import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import flight from '../views/Flight.vue'
import flights from '../views/Flights.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/flights',
    name: 'flights',
    component: flights
  },
  {
    path: '/flight/:id',
    name: 'flight',
    component: flight
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
