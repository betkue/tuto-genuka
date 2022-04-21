<template>
    <div>
         panier : {{ panier.products.length  }} 
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name:"PanierView",
  beforeMount(){
  },
  
  computed: {
    ...mapGetters(["panier"])
  },
  
}
</script>