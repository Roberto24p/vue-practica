import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players:[
      {username: 'Roberto', score: 5}
    ],
    playerSelected: {}
  },
  mutations: {
    createPlayer(state, player){
      state.players.push(player);
      console.log(state.playerSelected);
    },
    updateScore(state){
      for(jugador in state.players){
        if(jugador.username == playerSelected.username){
          jugador.score = playerSelected.score;
        }
      }
    }
   
  },
  actions: {
  },
  modules: {
  }
})
