import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CardView from '@/views/CardView'
import SignUpView from '@/views/SignUpView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/place/:category',
    name: 'Place',
    component: CardView,
    props: true
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router