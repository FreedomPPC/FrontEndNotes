import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Index from './components/Index.vue';
import MessageIndentify from './components/MessageIdentify.vue';
import AccountIdentify from './components/AccountIdentify.vue';
import WechatIdentify from './components/WechatIdentify.vue';
import Intrada from './components/Intrada.vue';
Vue.use(VueRouter);

var router = new VueRouter();

router.map ({
	'/index': {
		name:'home',
		component: Index,
		subRoutes:{
			'/account':{
				component: AccountIdentify,
			},
			'/message':{
				component: MessageIndentify,
			},
			'/wechat': {
				component: WechatIdentify,
			},
		}
	},
	'intrada': {
		component: Intrada,
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
