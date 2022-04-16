<template>
    <LoadProductsHome v-if="products.data == null" />
    <section v-else-if="products.data.length == 0">vide</section>
    <section v-else>       
    <div>
      <span>{{ products.data[0].name  }}</span>
    </div>
    </section>
</template>


<script>
import LoadProductsHome from '../loaders/LoadProductsHome.vue'
import { mapGetters } from "vuex";
    export default {
        components:{
            LoadProductsHome
        },
  computed: {
    ...mapGetters(["company"]),
    ...mapGetters(["racine"]),
    ...mapGetters(["token"]),
    ...mapGetters(["collections"]),
    ...mapGetters(["products"]),
  },
    name: "ProductsHome",
    };
</script>

<style scoped>

  span{
    font-size:2em;
    }
</style>