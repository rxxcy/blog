import { createRouter, createWebHashHistory } from 'vue-router'
// import { pinia } from '../store'
// import { SystemStore } from '../store/system'
import Home from '../views/home.vue'

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
    component: () => import('../views/project.vue'),
    meta: {
      title: '项目',
    },
  },
  {
    path: '/dcim',
    name: 'dcim',
    component: () => import('../views/dcim.vue'),
    children: [
      {
        path: '',
        name: 'dcimlist',
        component: () => import('../views/dcim/list.vue'),
        meta: {
          title: '相册',
        },
      },
      {
        path: ':id',
        name: 'dcimdetails',
        component: () => import('../views/dcim/details.vue'),
      },
    ],
  },
  {
    path: '/note',
    name: 'note',
    component: () => import('../views/note.vue'),
    children: [
      {
        path: '',
        name: 'notelist',
        component: () => import('../views/note/list.vue'),
        meta: {
          title: '笔记',
        },
      },
      {
        path: ':id',
        name: 'notedetails',
        component: () => import('../views/note/details.vue'),
      },
    ],
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/music.vue'),
    meta: {
      title: '音乐',
    },
  },
  {
    path: '/fan',
    name: 'fan',
    component: () => import('../views/fan.vue'),
    meta: {
      title: '追番',
    },
  },
  {
    path: '/404',
    name: 'notfound',
    component: () => import('../views/notfound.vue'),
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

// const store = SystemStore(pinia)

router.beforeEach((to, from, next) => {
  const { title } = to.meta
  window.document.title = title ? `${title} - 若许闲乘月` : '若许闲乘月'
  // store.loadingStart()
  // setTimeout(() => store.loadingFinish(), 300)
  next()
})

router.afterEach(() => window.scrollTo(0, 0))

export default router
