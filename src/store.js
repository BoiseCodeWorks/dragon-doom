import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js';

let _api = Axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragons: [],
    champions: [],
    game: {},
    activeDragon: {},
    activeChampion: {}
  },
  mutations: {
    setChampions(state, data) {
      state.champions = data
    },
    setDragons(state, data) {
      state.dragons = data
    },
    setActiveChampion(state, data) {
      state.activeChampion = data
    },
    setActiveDragon(state, data) {
      state.activeDragon = data
    },
    setGame(state, data) {
      state.game = data
    }
  },
  actions: {
    initialize({ commit }) {
      _api.get('dragons')
        .then(res => {
          commit('setDragons', res.data)
        })
      _api.get('champions')
        .then(res => {
          commit('setChampions', res.data)
        })
    },
    getGame({ commit }, payload) {
      _api.get('games/' + payload)
        .then(res => {
          commit('setGame', res.data)
        })
    },
    setActiveChampion({ commit }, payload) {
      commit('setActiveChampion', payload)
    },
    setActiveDragon({ commit }, payload) {
      commit('setActiveDragon', payload)
    },
    fight({ commit, state }) {
      let data = { dragonId: state.activeDragon.id, championId: state.activeChampion.id }
      _api.post('games', data)
        .then(res => {
          commit('setGame', res.data.game)
          router.push({ name: 'game', params: { id: res.data.game._id } })
        })
    },
    attack({ commit }, payload) {
      _api.put('games/' + payload.id, payload)
        .then(res => {
          commit('setGame', res.data)
        })
    }
  }
})
