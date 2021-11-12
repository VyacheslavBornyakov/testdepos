import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Account'
import AntiPiracyFileSelection from '../views/AntiPiracyFileSelection'
import AntiPiracyResult from '../views/AntiPiracyResult'
import Documents from '../views/Documents'
import Integration from '../views/Integration'
import SubscriptionsManagement from '../views/SubscriptionsManagement'
import SignUp from "../views/SignUp";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/ap-file-selection',
    component: AntiPiracyFileSelection
  },
  {
    path: '/ap-result',
    component: AntiPiracyResult
  },
  {
    path: '/documents',
    component: Documents
  },
  {
    path: '/subscriptions-management',
    component: SubscriptionsManagement
  },
  {
    path: '/integration',
    component: Integration
  },
  {
    path: '/signup',
    component: SignUp
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
