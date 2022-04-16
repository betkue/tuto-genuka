
<template>
  <div :style="{ background: 'black', height: '100vh' }">

    Loading ... {{ login }}

  </div>
</template>

<style scoped>
div{
  
  font-size: 6vh;
  margin-top: 40vh ;
}
</style>


<script>

import { mapGetters } from "vuex";
export default {
  name: "LoadHome",
  methods:{
  },
  computed: {
    ...mapGetters(["login"])
  },
};
</script>