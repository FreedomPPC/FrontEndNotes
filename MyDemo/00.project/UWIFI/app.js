import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Index from './components/Index.vue';
import MessageIndentify from './components/MessageIdentify.vue';
import AccountIdentify from './components/AccountIdentify.vue';
import WechatIdentify from './components/WechatIdentify.vue';
Vue.use(VueRouter);

var router = new VueRouter();

router.map ({
	'/index': {
		name:'home',
		component: Index,
	},
	'message': {
		component: MessageIndentify,
	},
	'account': {
		component: AccountIdentify,
	},
	'wechat': {
		component: WechatIdentify,
	}
});

router.redirect({
	'*':'/index'
});

router.start({
    components: {
        'app': App,
    }
}, '#app');
