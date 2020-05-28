import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import css01 from '@/views/CSS/CSS01'
import css02 from '@/views/CSS/CSS02'
import css03 from '@/views/CSS/CSS03'
import css04 from '@/views/CSS/CSS04'
import css05 from '@/views/CSS/CSS05'
import css06 from '@/views/CSS/CSS06'
import css07 from '@/views/CSS/CSS07'
import css08 from '@/views/CSS/CSS08'
import css09 from '@/views/CSS/CSS09'
import css10 from '@/views/CSS/CSS10'
import css11 from '@/views/CSS/CSS11'
import css12 from '@/views/CSS/CSS12'
import css13 from '@/views/CSS/CSS13'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
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
    },
    {
      path: '/CSS07',
      name: 'CSS07',
      component: css07
    },
    {
      path: '/CSS08',
      name: 'CSS08',
      component: css08
    },
    {
      path: '/CSS09',
      name: 'CSS09',
      component: css09
    },
    {
      path: '/CSS10',
      name: 'CSS10',
      component: css10
    },
    {
      path: '/CSS11',
      name: 'CSS11',
      component: css11
    },
    {
      path: '/CSS12',
      name: 'CSS12',
      component: css12
    },
    {
      path: '/CSS13',
      name: 'CSS13',
      component: css13
    }
  ]
})
