import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {},
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/Project.vue'),
    meta: {
      title: '项目',
    },
  },
  {
    path: '/dcim',
    name: 'dcim',
    component: () => import('../views/Dcim.vue'),
    children: [
      {
        path: '',
        name: 'dcimlist',
        component: () => import('../views/dcim/List.vue'),
        meta: {
          title: '相册',
        },
      },
      {
        path: ':id',
        name: 'dcimdetails',
        component: () => import('../views/dcim/Details.vue'),
      },
    ],
  },
  {
    path: '/note',
    name: 'note',
    component: () => import('../views/Note.vue'),
    children: [
      {
        path: '',
        name: 'notelist',
        component: () => import('../views/note/List.vue'),
        meta: {
          title: '笔记',
        },
      },
      {
        path: ':id',
        name: 'notedetails',
        component: () => import('../views/note/Details.vue'),
      },
    ],
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/Music.vue'),
    meta: {
      title: '音乐',
    },
  },
  {
    path: '/fan',
    name: 'fan',
    component: () => import('../views/Fan.vue'),
    meta: {
      title: '追番',
    },
  },
  {
    path: '/404',
    name: 'notfound',
    component: () => import('../views/Notfound.vue'),
    meta: {
      title: '404',
    },
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const { title } = to.meta
  window.document.title = title ? `${title} - 若许闲乘月` : '若许闲乘月'
  next()
})

export default router
