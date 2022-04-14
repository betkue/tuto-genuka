<template>
  <div class="hello">
    <h1>{{ company.name }}</h1>
    <h2> {{ company.description }} </h2>
    <div class="display">
      
    <h3> Collecions </h3>
    <CollectionsHome  />
    </div>

    <div class="display">
      
    
    <h3> Produits </h3>
    <ProductsHome  />
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import { mapGetters } from "vuex";
import CollectionsHome from '@/components/collections/CollectionsHome.vue'
import ProductsHome from '@/components/products/ProductsHome.vue'

export default {
  name: "HomeOne",
  components:{
    CollectionsHome,
    ProductsHome
  },
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
<style scoped>
.display{
  display: inline-block;
  width: 30%;
  border-radius:  5em;
  background: white;
  height:  30em;
  margin: 20px;
}
h3{
  color:  orange;
  background:  black;
  font-size: 3em;
}
</style>


