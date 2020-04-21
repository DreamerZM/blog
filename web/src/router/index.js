import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/pages/index'
import ControllerPage from '@/components/pages/controller'
import ListPage from '@/components/pages/list'
import inputNumber from '@/components/tests/inputNumber'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage,
      meta: {
        title: '首页'
      }
    }, {
      path: '/controller',
      name: 'controller',
      component: ControllerPage,
      meta: {
        title: '控制面板'
      }
    }, {
      path: '/list',
      name: 'list',
      component: ListPage,
      meta: {
        title: '列表页'
      }
    }, {
      path: '/test/input_number',
      name: 'inputNumber',
      component: inputNumber,
      meta: {
        title: '移动端数字输入框'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
