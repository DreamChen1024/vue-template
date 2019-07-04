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
      meta: {
        title: '首页'
      },
      component: () => import('@/views/Home/home.vue')
    },
    {
      path: '/form',
      name: 'form',
      meta: {
        title: '表单'
      },
      component: () => import('@/views/Form/form.vue'),
      children: [
        {
          path: '/cascader',
          name: 'cascader',
          meta: {
            title: '级联选择器'
          },
          component: () => import('@/components/form/cascader.vue')
        }
      ]
    }
  ]
})
