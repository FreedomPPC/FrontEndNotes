import Vue from 'vue'
import VueRouter from 'vue-router'
import routeConfig from './route-config'
//import Index from './Index.vue'
Vue.use(VueRouter)

const router = new VueRouter()
router.map(routeConfig)
const Index = Vue.extend(require('./Index.vue'))
router.start(Index, '#app')