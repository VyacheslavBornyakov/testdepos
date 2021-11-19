import Vue from 'vue'
import Vuex from 'vuex'
import {MainRepositoryModule} from "./modules/clientData/MainRepositoryModule";
import {PopupModule} from "./modules/popup/PopupModule";
import {ClientStoragesModule} from "./modules/clientData/ClientStoragesModule";
import {ThirdPartyStoragesModule} from "./modules/siteRepositories/ThirdPartyStoragesModule";
import {ClientStorageFilesModule} from "./modules/clientData/ClientStorageFilesModule";
import {FilesForAntiPiracy} from "./modules/clientData/FilesForAntiPiracy";
import {ClientModule} from "./modules/auth/ClientModule";


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
    MainRepositoryModule: MainRepositoryModule,
    PopupModule: PopupModule,
    ClientStoragesModule: ClientStoragesModule,
    ThirdPartyStoragesModule: ThirdPartyStoragesModule,
    ClientStorageFilesModule: ClientStorageFilesModule,
    FilesForAntiPiracy: FilesForAntiPiracy,
    ClientModule: ClientModule
  }
})
