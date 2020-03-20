import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        result: null
    },
    mutations: {
        SET_RESULT (state, payload) {
            state.result = payload
        }
    },
    actions: {
        async getResult ({ commit }) {
            return await axios.get('/v2/locations?country_code=PH')
                .then(res => {
                    commit('SET_RESULT', res.data)
                })
                .catch(err => console.log(err))
        }
    },
    getters: {
        result (state) {
            return state.result
        }
    }
})