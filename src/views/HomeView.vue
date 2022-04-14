<template>
  <div class="home">
    <img v-if='company.logo == null' alt="Vue logo" src="../assets/logo.png">
    <img v-if='company.logo != null' alt="Vue logo" :src="company.logo">
    <Home :msg='"uoi"' />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

import axios from "axios";
import { mapGetters } from "vuex";
import { Collections } from '@/models/collections';
export default {
  name: 'HomeView',
  methods:{
    getcollections(){
          let url = this.$store.state.racine + "companies/"+ this.$store.state.company.id +"/collections";
    let collec =new Collections();
    console.log(url);
    axios.get(url).then(
        (response)=>{
          collec.fromJson(response.data) 
          this.$store.commit('CREATE_COLLECTIONS',collec);
        }
    );
    },
    getproducts(){
          let url = this.$store.state.racine + "companies/"+ this.$store.state.company.id +"/products";
    let collec =new Collections();
    console.log(url);
    axios.get(url).then(
        (response)=>{
          collec.fromJson(response.data) 
          this.$store.commit('CREATE_PRODUCTS',collec);
        }
    );
    }
  },
  components: {
    Home
  },
  
   computed: {
        ...mapGetters(['company']),
        ...mapGetters(['racine']),
        ...mapGetters(['token']),
    },
    updated(){

      this.getcollections();
      this.getproducts();

        


    }
}
</script>
