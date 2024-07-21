import { createRouter, createWebHistory } from 'vue-router'

// import HostList from '@views/list/index.vue'
// import Login from '@views/login/index.vue'
// import terminal from '@views/terminal/index.vue'
// import test from '@views/test/index.vue'

const Login = () => import('@views/login/index.vue')
const Container = () => import('@views/index.vue')
const Server = () => import('@views/server/index.vue')
const Terminal = () => import('@views/terminal/index.vue')
const Credentials = () => import('@views/credentials/index.vue')
const Group = () => import('@views/group/index.vue')
const Onekey = () => import('@views/onekey/index.vue')
const Scripts = () => import('@views/scripts/index.vue')
const Setting = () => import('@views/setting/index.vue')

const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Container,
    children: [
      { path: '/server', component: Server },
      { path: '/terminal', component: Terminal },
      { path: '/credentials', component: Credentials },
      { path: '/group', component: Group },
      { path: '/onekey', component: Onekey },
      { path: '/scripts', component: Scripts },
      { path: '/setting', component: Setting },
      { path: '', redirect: 'server' }, // 这里添加重定向
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/server'
  },
  // { path: '/server', component: Server },
  // { path: '/', component: HostList },
  // { path: '/terminal', component: Terminal },
  // { path: '/test', component: test },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
