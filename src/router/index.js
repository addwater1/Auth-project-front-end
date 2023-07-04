import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/login.vue'
import Signup from '../components/signup.vue'
import Home from '../components/home.vue'
import Welcome from '../components/welcome.vue'
import EmailAuth from '../components/emailAuth.vue'

const routes = [
  {path: '/login', component: Login},
  {path: '/signup', component: Signup},
  {path: '/', component: Home},
  {path: '/welcome', component: Welcome},
  {path: '/emailAuth', component: EmailAuth}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router