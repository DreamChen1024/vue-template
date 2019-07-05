import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      meta: { title: '首页' },
      component: () => import('@/views/Home/home.vue')
    },
    {
      path: '/form',
      name: 'form',
      meta: { title: '表单' },
      component: () => import('@/views/Form/form.vue'),
      children: [
        {
          path: '/form/radio',
          name: 'radio',
          meta: { title: '单选框' },
          component: () => import('@/views/Form/radio.vue')
        },
        {
          path: '/form/checkBox',
          name: 'checkBox',
          meta: { title: '复选框' },
          component: () => import('@/views/Form/checkBox.vue')
        },
        {
          path: '/form/input',
          name: 'input',
          meta: { title: '输入框' },
          component: () => import('@/views/Form/input.vue')
        },
        {
          path: '/form/cascader',
          name: 'cascader',
          meta: { title: '级联选择器' },
          component: () => import('@/views/Form/cascader.vue')
        }
      ]
    },
    {
      path: '/notice',
      name: 'notice',
      meta: { title: '通知' },
      component: () => import('@/views/Notice/notice.vue'),
      children: [
        {
          path: '/notice/loading',
          name: 'loading',
          meta: { title: '加载'},
          component: () => import('@/views/Notice/loading.vue')
        }
      ]
    }
  ]
})
