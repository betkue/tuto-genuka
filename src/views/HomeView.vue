<template>
  <div class="home">
    <img v-if='company.logo == null' alt="Vue logo" src="../assets/logo.png">
    <img v-if='company.logo != null' alt="Vue logo" :src="company.logo">
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

import { mapGetters } from "vuex";
export default {
  name: 'HomeView',
  components: {
    Home
  },
  
   computed: {
        ...mapGetters(['company']),
        ...mapGetters(['racine']),
        ...mapGetters(['token']),
    },
}
</script>
