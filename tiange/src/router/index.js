import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import css01 from '@/views/CSS/CSS01'
import css02 from '@/views/CSS/CSS02'
import css03 from '@/views/CSS/CSS03'
import css04 from '@/views/CSS/CSS04'
import css05 from '@/views/CSS/CSS05'
import css06 from '@/views/CSS/CSS06'

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
    },
    {
      path: '/CSS03',
      name: 'CSS03',
      component: css03
    },
    {
      path: '/CSS04',
      name: 'CSS04',
      component: css04
    },
    {
      path: '/CSS05',
      name: 'CSS05',
      component: css05
    },
    {
      path: '/CSS06',
      name: 'CSS06',
      component: css06
    }
  ]
})
