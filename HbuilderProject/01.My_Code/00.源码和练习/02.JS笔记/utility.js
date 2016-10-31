var utility = {
	Event: {
		addHandler: function (el, type, handler) {
			if (el.addEventListener !== undefined) {
				el.addEventListener(type, handler, false)
			} else if (el.attachEvent) {
				el.attachEvent('on'+type, handler);
			} else {
				el['on'+type] = handler;
			}
		},
		removeHandler: function (el, type, handler) {
			if (el.removeEventListener !== undefined) {
				el.removeEventListener(type, handler);
			} else if (el.detachEvent) {
				el.detachEvent(type, handler);
			} else {
				el['on'+type] = null;
			}
		},
		getEvent: function (event) {
			return (event!==undefined) ? event : window.event;
		},
		getTarget: function (event) {
			return event.target!==undefined ? event.target : event.srcElement;
		},
		preventDefault: function (event) {
			if (event.preventDefault!==undefined) {
				event.preventDefault();
			} else {
				event.returnVaule = false;
			}
		},
		stopPropagation: function (event) {
			if (event.stopPropagation!==undefined) {
				event.stopPropagation();
			} else {
				event.cancelBubble = true;
			}
		}
	},
	Cookie : {
		set: function (name, value, days) {

			var nameStr = encodeURIComponent(name);
			var valueStr = encodeURIComponent(value);

			var cookieStr = nameStr + '=' + valueStr;

			if (days !== undefined) {
				var msOfOneDay = 1000*60*60*24;
				var now = new Date();
				var after = new Date(now.getTime() + msOfOneDay*days);
				cookieStr += ';expires=' + after;
			}

			document.cookie = cookieStr;

		},
		get: function (name) {
			//将每个键值对以key=value的形式存放
			var array = document.cookie.split('; ');
			var len = array.length;
			var key_value_pair;
			for (var i=0; i<len; i++) {
				//将一个键值对，用等号间隔，拆分为数组，
				//数组的第一个元素为key，第二个元素为value
				key_value_pair = array[i].split('=');
				
				if (key_value_pair[0] === name) {
					return key_value_pair[1]
				}
			}

			return '';

		},
		remove: function (name) {
			this.set(name,'',-1);
		}
	},
	Ajax: {
		send: function (method, url, asyn, successFn, errorFn) {
			var AJAX_RESPONSE_STATUS_OK = (location.protocol==='file:') ? 0 : 200;
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === AJAX_RESPONSE_STATUS_OK) {
						if (typeof successFn === 'function') {
							successFn(xhr.responseText)
						}
					} else {
						if (typeof errorFn === 'function') {
							errorFn(xhr.status);
						}
					}
				}
			}

			xhr.open(method, url, asyn);
			xhr.send();
		}
	}
}


