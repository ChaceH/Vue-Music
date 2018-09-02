import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

let itunesApi = Axios.create({
  baseURL: 'https://itunes.apple.com/search',
  timeout: 3000
});
let mytunesApi = Axios.create({
  baseURL: 'http://localhost:3000/api/songs',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itunesPlaylist: [],
    mytunesPlaylist: []
  },
  mutations: {
    setItunes(state, data){
      state.itunesPlaylist = data
    },
    setMytunes(state, data){
      state.mytunesPlaylist = data
    }
  },
  actions: {
    getItunes({commit, dispatch}, search){
      itunesApi.get("", {
        params: {
          term: search
        }
      }) .then(res => {
        commit('setItunes', res.data.results)
      }) 
    },
    getMytunes({commit, dispatch}){
      mytunesApi.get('')
      .then(res => commit('setMytunes', res.data))
    },
    addToPlaylist({commit, dispatch}, song){
      mytunesApi.post('', song)
      .then(res => dispatch('getMytunes'))
    },
    removeFromPlaylist({commit, dispatch}, songId){
      mytunesApi.delete('/' + songId)
      .then(res => dispatch('getMytunes'))
    }
  }
})
