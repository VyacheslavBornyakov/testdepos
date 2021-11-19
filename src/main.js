import '@/assets/styles/main.css'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Fragment from 'vue-fragment'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(Fragment.Plugin)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
