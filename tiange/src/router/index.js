import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import css01 from '@/views/CSS/CSS01'
import css02 from '@/views/CSS/CSS02'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/CSS01',
      name: 'CSS01',
      component: css01
    },
    {
      path: '/CSS02',
      name: 'CSS02',
      component: css02
    }
  ]
})
