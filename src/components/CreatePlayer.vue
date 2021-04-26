<template lang="es">
    <div>
        <div class="field block">
            <label class="label">Username</label>
            <div class="control column is-half  is-offset-one-quarter">
                <input class="input" type="text" placeholder="Username" v-model="username">
            </div>
            <button class="button is-link" @click="createPlayer({username: username, score: 0})">Submit</button>
            
        </div>
    </div>
</template>



<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "create-player",
  data: function(){
      return{
          username: ''
      }
  },
  computed: {
    ...mapState(["players"]),
  },
  methods:{
    ...mapMutations(['createPlayer'])
  }
};
</script>


<style lang="">
</style>