var utilities = utilities || {
        Event: {
            addEventHandler: function () {

            },

            removeEventHandler: function () {

            },

        },

        Cookie: {
            set: function () {

            },

            get: function () {

            },

            remove: function () {

            }
        },

        Ajax: {
            send: function (method, url, async, successFn) {
                //Ajax的使用方法：
                //1. 创建XMLHttpRequest
                var xhr = new XMLHttpRequest();

                //4. 绑定响应函数，接收响应数据
                //这个函数，在每次readyState变化的时候，都会调用。(一共调用4次，具体的readyState值代表的意义，参见PPT)
                xhr.onreadystatechange = function () {
                    //readyState===4说明已经接收全部的服务器响应
                    if (xhr.readyState === 4) {

                        //判断服务器返回的数据的状态，200 代表请求成功，404代表资源没有找到，304是从缓存中取得数据
                        //0 当前的页面，是以本地文件的形式运行的，数据取得成功。
                        if (xhr.status === 200 || xhr.status === 0) {
                            successFn(xhr.responseText);
                        }
                    }
                };

                //2. 配置/打开这个对象
                //open的三个参数：1. type ['get'/'post'], 2. url, 3. async [true/fales]
                xhr.open(method, url, async);

                //发送Ajax请求
                xhr.send(null);
            }
        },

        movement: {
            getStyle: function (el, prop) {
                if (el.currentStyle) {
                    return el.currentStyle[prop];
                } else {
                    return window.getComputedStyle(el)[prop];
                }
            },

            move: function (el, properties, fn) {
                var current, speed, prop, target;
                //为了避免重复调用导致动画速度越来愉快
                clearInterval(el.timerId);
                //因为这个timerID是基本类型，所以通过参数传递，无法保证下一次
                //进入move函数中，这个id值是这次设置的，所以将id放到el这个对象上。
                //因为这个对象是引用类型，所以这个id在内部改变，el上也会跟着改变
                var self = this;
                el.timerId = setInterval(function () {
                    
                    var isNeedStop = true;

                    for (prop in properties) {

                        target = properties[prop];

                        if (prop === 'opacity') {
                            current = Math.round(parseFloat(self.getStyle(el, prop)) * 100);
                        } else {
                            current = parseInt(self.getStyle(el, prop));
                        }

                        speed = (target - current) / 10;

                        speed = (speed > 0) ? (Math.ceil(speed)) : (Math.floor(speed));

                        if (prop === 'opacity') {
                            el.style[prop] = (current + speed) / 100;
                        } else {
                            el.style[prop] = current + speed + 'px';
                        }

                        if (current !== target) {
                            isNeedStop = false;
                        }

                    }


                    if (isNeedStop) {
                        clearInterval(el.timerId);
                        if (typeof fn === 'function') {
                            fn();
                        }
                        return;
                    }

                    
                }, 30);
            }
        }


    };