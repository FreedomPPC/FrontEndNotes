import protobuf from 'protobufjs';
import fecha from 'fecha';
import { ENV_NAME, API_HOST, API_VERSION } from './global';
import { getToken, saveUserSession } from './session';
import { deepCopy } from '../utils/utils';
import { saveLog } from '../utils/log';

let logining = false;
let MessageData;
let host = API_HOST;

// 调试模式
if (ENV_NAME === 'development' || ENV_NAME === 'testing') {
    host = localStorage.getItem('debug_host') ? localStorage.getItem('debug_host') : host;
}

/**
 * 发出xhr请求
 * @param  {string} url              请求的url
 * @param  {Object} data             要提交的data
 * @param  {String} method           请求方式，默认POST
 * @param  {Array}  impartibleFields 不允许分割的字段，默认POST方式时，数组和对象会单独分割出formData
 * @param  {Array}  partibleFields   强制分割的字段，默认POST方式时，字符串不会被单独分割出formData
 * @return {Promise}                 返回promise对象
 */
const fetchBuffer = (url, data = {}, method = 'POST', impartibleFields = [], partibleFields = []) => {
    if (typeof impartibleFields === 'string') { // 转化字符串类型的impartibleFields
        impartibleFields = [impartibleFields];
    }
    if (typeof partibleFields === 'string') { // 转化字符串类型的partibleFields
        partibleFields = [partibleFields];
    }

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        let postData = '';
        let token = getToken();
        if (token) data.token = token;
        if (method === 'GET') {
            let query = '';
            Object.keys(data).forEach(key => query += key + '=' + data[key] + '&');
            if (query) {
                url += url.indexOf('?') > -1 ? '&' : '?';
                url += query.slice(0, -1);
            }
        }

        xhr.open(method, url, true);

        xhr.responseType = 'arraybuffer';
        if (method === 'POST') {
            // postData数据封装
            let postObj = { formData: {} };
            if (Array.isArray(data)) { // 整个data都是数组的情况
                postData = 'formData=' + encodeURIComponent(JSON.stringify(deepCopy(data)));
                if (token) postData += '&token=' + token;
            } else {
                Object.keys(data).forEach(key => {
                    if (partibleFields.indexOf(key) > -1 ||
                        key === 'token' ||
                        impartibleFields.indexOf(key) === -1 && typeof data[key] === 'object'
                    ) {
                        postObj[key] = data[key];
                    } else {
                        postObj.formData[key] = data[key];
                    }
                });
                Object.keys(postObj).forEach(key => {
                    let value = typeof postObj[key] === 'object' ? JSON.stringify(deepCopy(postObj[key])) : postObj[key];
                    postData += key + '=' + encodeURIComponent(value) + '&';
                });
                postData = postData.slice(0, -1);
            }

            // xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        }

        xhr.onload = function(e) {
            resolve(this.response);
        };

        xhr.ontimeout = function(e) {
            reject('timeout');
        };

        xhr.onerror = function(e) {
            reject('error');
        };

        xhr.send(postData);
    });
};

// 清理表单数据，以使表单可以正常提交
const cleanData = (data) => {
    let clean = (obj) => {
        Object.keys(obj).forEach(key => {
            if (Array.isArray(obj[key])) {
                obj[key].forEach(item => clean(item));
            } else if (obj[key] instanceof Date) { // 格式化日期
                obj[key] = fecha.format(obj[key], 'YYYY-MM-DD HH:mm:ss');
            } else if (typeof obj[key] === 'object') {
                clean(obj[key]);
            }
        });
    };
    clean(data);
    return JSON.parse(JSON.stringify(deepCopy(data)));
};

// 加载通用MessageData
const loadMessageRoot = async() => {
    let messageRoot = await protobuf.load('protos/message.proto');
    MessageData = messageRoot.lookup('com.martin.gaofei.nyk.server.MessageData');
};

let protos = {};

/**
 * request模块，请求protobuf接口用
 * @param  {json} api     必须，格式为 {url, proto, messageName}，至少包含url
 * @param  {json} data    可选，要提交的表单数据
 * @param  {json} options 可选，目前支持设置method、dataType、impartibleFields、partibleFields
 *                        impartibleFields仅POST方式有效，指遇到对象及数组，不分割出formData
 *                        partibleFields仅POST方式有效，指即使遇到字符串，也强制分割出formData
 * @return {json}         返回服务器数据
 */
export default async(api, data = {}, options = {}) => {
    let settings = Object.assign({ dataType: 'protobuf' }, options);
    let url = /^http/.test(api.url) ? api.url : host + '/' + API_VERSION + (api.url.indexOf('/') === 0 ? api.url : '/' + api.url);
    let protoFile = 'protos/' + api.proto;
    if (!MessageData) {
        await loadMessageRoot();
    }
    let result = {};
    try {
        
        let res = await fetchBuffer(url, cleanData(data), settings.method, settings.impartibleFields, settings.partibleFields);
        if (settings.dataType === 'protobuf') {
            result = MessageData.decode(new Uint8Array(res));
            if (result.data && api.proto) {
                try {
                    //不重新加载proto文件
                    let dataRoot;
                    let dataRootMemory = protos[protoFile];
                    if (undefined == dataRootMemory) {
                        dataRootMemory = await protobuf.load(protoFile);
                        protos[protoFile] = dataRootMemory;
                    }
                    dataRoot = dataRootMemory;
                    
                    // let dataRoot = await protobuf.load(protoFile);
                    let Message = dataRoot.lookup('com.martin.gaofei.nyk.server.' + api.messageName);
                    result.data = Message.decode(result.data);

                } catch (err) {}
            }
        } else {
            result = res;
        }
    } catch (err) {
        console.info(err);
    }
    if (result.code !== 1) {
        // 接口返回失败时，打印该项到控制台，以供后台开发人员调试
        let msg = result.msg || '服务器错误';
        console.info('%c' + msg + ' %c@ ' + '%c' + api.url, 'color:red', 'color:gray', 'color:blue');
        saveLog('FailRequest', {
            api: api.url,
            msg: result.msg
        });
    }
    if (result.code === 1) logining = false;
    if (result.code === 5) {
        if (!logining) {
            let url = encodeURIComponent(location.hash.slice(1));
            alert('登录会话已过期，需重新登录！');
            saveUserSession({});
            window.location.href = '#/login' + (url ? '?redirect=' + url : '');
            logining = true;
        }
        return;
    }
    return result;
};