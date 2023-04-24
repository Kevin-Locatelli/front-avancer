import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Theme from './views/Theme.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/category/:id', component: Category },
  { path: '/theme/:id', component: Theme },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
