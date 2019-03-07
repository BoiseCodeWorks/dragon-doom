<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>DRAGONS <img alt="Vue logo" src="../assets/logo.png">S Champions </h1>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <button @click="fight" class="btn btn-danger" v-show="ready">FIGHT!!!</button>
      </div>
    </div>
    <div class="row">
      <dragons></dragons>
      <champions></champions>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Champions from '@/components/Champions.vue'
  import Dragons from '@/components/Dragons.vue'
  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('initialize')
    },
    computed: {
      ready() {
        return this.$store.state.activeDragon.name && this.$store.state.activeChampion.name
      }
    },
    methods: {
      fight() {
        this.$store.dispatch('fight')
      },
      setActiveChampion(champ) {
        this.$store.dispatch('setActiveChampion', champ)
      }
    },
    components: {
      Dragons,
      Champions
    }
  }
</script>

<style scoped>
  img {
    height: 1em;
  }
</style>