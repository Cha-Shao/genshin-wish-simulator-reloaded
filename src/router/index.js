import { createRouter, createWebHistory } from 'vue-router'
import PCIndex from '../views/PCIndex.vue'
import MIndex from '../views/MIndex.vue'

const routes = [{
  path: '',
  redirect: '/pc'
  },{
    path: '/pc',
    name: 'pc_index',
    component: PCIndex
  },{
    path: '/m',
    name: 'm_index',
    component: MIndex
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
