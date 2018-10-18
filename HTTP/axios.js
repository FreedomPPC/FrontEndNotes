import axios from 'axios';

axios.defaults.validateStatus = function(status) {
    return status < 500;
};


export default {
    get: (url, params)=> new Promise((resolve, reject)=> {
        params = Object.assign({
            timeout: 10000,
            loading: true
        }, params);
        params.headers = Object.assign({
            'Content-Type': 'application/json'
        }, params.headers);

        params.loading && window.commonFun.loading.show();

        axios.get(`${url}?ajax=${Date.now()}`, params)
            .then(res=> {
                if (res.status === 200) {
                    resolve(res.data);
                } else {
                    reject(res);
                }
            })
            .catch(err=> {
                reject(err);
            }).finally(()=> {
                params.loading && window.commonFun.loading.hide();
            });
    }),
    post: (url, data, params)=> new Promise((resolve, reject)=> {
        params = Object.assign({
            timeout: 10000,
            loading: true
        }, params);
        params.headers = Object.assign({
            'Content-Type': 'application/json'
        }, params.headers);

        params.loading && window.commonFun.loading.show();

        axios.post(url, data, params)
            .then(res=> {
                if (res.status === 200) {
                    resolve(res.data);
                } else {
                    reject(res);
                }
            })
            .catch(err=> {
                reject(err);
            }).finally(()=> {
                params.loading && window.commonFun.loading.hide();
            });
    }),
    request: (params)=> new Promise((resolve, reject)=> {
        params = Object.assign({
            timeout: 10000,
            loading: true
        }, params);
        params.headers = Object.assign({
            'Content-Type': 'application/json'
        }, params.headers);

        params.loading && window.commonFun.loading.show();

        axios(params)
            .then(res=> {
                if (res.status === 200) {
                    resolve(res.data);
                } else {
                    reject(res);
                }
            })
            .catch(err=> {
                reject(err);
            }).finally(()=> {
                params.loading && window.commonFun.loading.hide();
            });
    })
};