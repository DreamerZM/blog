import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/pages/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    }
  ]
})
