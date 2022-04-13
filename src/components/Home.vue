<template>
  <div class="hello">
    <h1>{{ company.name }}</h1>
    <h2> {{ company.description }} </h2>
    <h3> Collecions </h3>
    
    <h3> Produits </h3>

    
<button type="button" class="btn btn-danger">Voir Plus</button>
  </div>
</template>
<style scoped>
</style>
<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeOne",
   computed: {
        ...mapGetters(['company']),
        ...mapGetters(['racine']),
        ...mapGetters(['token']),
    },
  props: {
    msg: String,
  },
};
</script>


