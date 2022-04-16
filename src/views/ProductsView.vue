<template>
    <div>
         products : {{ products.data[0].name  }} 
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name:"ProductsView",
  beforeMount(){
  },
  
  computed: {
    ...mapGetters(["company"]),
    ...mapGetters(["racine"]),
    ...mapGetters(["token"]),
    ...mapGetters(["collections"]),
    ...mapGetters(["products"]),
  },
  
}
</script>