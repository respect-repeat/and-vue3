import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../view/home.vue'

const routerHistory = createWebHistory()

const Router = createRouter({
  history: routerHistory,
  routes: [{
    path: '/',
    component: Home
  }]
})

export default Router
