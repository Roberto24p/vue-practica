<template lang="es">
    <div>
      <label class="label">Seleccione jugador</label>
      <div class="control">
        <div class="select">
          <select v-model="$store.state.playerSelected">
            <option v-for="player in players" v-bind:value="player">{{player.username}}</option>
          </select>
        </div>
      </div>
      <h1>Jugador: {{$store.state.playerSelected.username}}  </h1>
      <h2>Score: {{$store.state.playerSelected.score}} </h2>
      <div class=" column ">
        <button class="button is-medium " v-for="(numberEl,index) in arrayNumbers" v-model="index" @click="changeNumber(index)">{{numberEl.state}}</button>
        
      </div> 
      <input type="text" class="input is-primary is-small column is-half is-offset-one-quarter" v-model="itemSelected">  
      
     
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "table-elements",
  data: function () {
    return {
      arrayNumbers: [],
      itemSelected: '',
      intentos: 10,
      score: 0
    };
  },
  methods: {
    fillArray() {
      this.arrayNumbers = [];
      for (let i = 0; i < 8; i++) {
        this.arrayNumbers.push({number: parseInt(Math.random() * (11 - 1) + 1), state: '-'});
      }
      console.log(this.arrayNumbers);
    },
    changeNumber(i) {
      if(this.itemSelected != ''){
      if(this.arrayNumbers[i].number == this.itemSelected){
        console.log('Acierto');
        this.arrayNumbers[i].state = 'o';
        this.score++;
        this.intentos--;
      }else{
        console.log('DesAcierto');
        this.intentos--;
        this.arrayNumbers[i].state = 'x';
      }
      }else{
        alert('Escriba en el input un número');
      }
      this.itemSelected = '';  
      if(this.intentos == 0){
        this.intentos = 10;
        this.sendPlayerSelected;
        this.$store._mutations.updateScore;
        alert('Juego terminado');
        this.fillArray();
      }
    },
  },
  computed:{
    ...mapState(['players', 'playerSelected']),
    sendPlayerSelected(state){
        state.playerSelected.score = this.score;
    }

  },
  mounted() {
    this.myLocalComputed;
    this.fillArray();
  },
};
</script>
<style lang="">
</style>