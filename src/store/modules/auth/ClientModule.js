import axios from "axios";

export const ClientModule = {
    state: () => ({
        Client:{}
    }),
    getters: {

    },
    mutations: {
        updateClientData(state, data) {
            state.Client = data
        }
    },
    actions: {
        async onloadClientData({commit}) {
            try {
                let data = await axios.get('/config/Client.json')
                commit('updateClientData', data)
            } catch (e) {
                alert('Ошибка')
            }
        },
    },
    namespaced:true
}
