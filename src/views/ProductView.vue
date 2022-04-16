<template>
    <div>
         products : {{ single_product.name  }} 
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name:"ProductsView",
  beforeMount(){
  },
  
  computed: {
    ...mapGetters(["single_product"])
  },
  
}
</script>