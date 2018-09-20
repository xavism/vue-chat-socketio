import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import Chat from '@/containers/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chat/:idUser',
      name: 'chat',
      props: true,
      component: Chat,
    },
  ],
})
