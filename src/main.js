// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import apis from './common/js/services'

//如果有icon 需要换成本地的
import myLoading from './components/notice/loading/index'
Vue.use(myLoading, {
  // icon: require(),
  // progressColor: 'blue'
})

// 基础组件自动化全局注册
import './components/componentsRegister'
// 初始化样式
import './common/css/reset.css'
// 完整引入Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI); //注册mint-UI组件库

Vue.config.productionTip = false

Vue.prototype.$http = axios;
Vue.prototype.$api = apis;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
