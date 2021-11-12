import Vue from 'vue'
import Vuex from 'vuex'
import {mainRepositoryModule} from "./mainRepositoryModule";
import {popupModule} from "./popupModule";
import {repositoryModule} from "./repositoryModule";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      isAuth:false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // mainRepository: mainRepositoryModule,
    // popup: popupModule,
    // repository: repositoryModule
  }
})
