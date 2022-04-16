<template>
  <div class="home">
    <img v-if='company?.logo == null' alt="Vue logo" src="../assets/logo.png">
    <img v-if='company?.logo != null' alt="Vue logo" :src="company?.logo">
    <Home  />
  </div>
</template>

<script>

import Home from '@/components/Home.vue'
import { mapGetters } from "vuex";
export default {
  name: 'HomeView',
  methods:{
  },
  components: {
    Home
  },
  
   computed: {
        ...mapGetters(['company']),
        ...mapGetters(['racine']),
        ...mapGetters(['token']),
    },
    
  beforeMount() {
    // this.$store.actions.checkCompany();
  },
    updated(){

     // this.$store.actions.getcollections();
    //  this.$store.actions.getproducts();

        


    }
}
</script>
