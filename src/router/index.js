import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../layout/Home.vue'
import Account from '../layout/Account'
import AntiPiracyFileSelection from '../layout/AntiPiracyFileSelection'
import AntiPiracyResult from '../layout/AntiPiracyResult'
import Documents from '../layout/Documents'
import Integration from '../layout/Integration'
import SubscriptionsManagement from '../layout/SubscriptionsManagement'
import SignUp from "../layout/SignUp";

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
