import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import News from './fragments/News.vue';
import Messages from './fragments/Messages.vue';
import Detail from './fragments/Detail.vue';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/home':{
    name:'home',
    component:Home,
    subRoutes:{
      '/news':{
        name:'News',
        component:News,
        subRoutes:{
          '/detail/:id':{
            name:'detail',
            component:Detail
          }
        }
      },
      '/messages':{
        name: 'messages',
        component:Messages
      }
    }
  },
  '/about':{
    name:'about',
    component:About,
  }
});

router.start(App,'#app')
