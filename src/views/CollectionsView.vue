<template>
    <div>
      sjbvfhkjsdjbfhk
        collections : {{ collections.data[0].name }} 
    </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  
  name:"CollectionsView",
  computed: {
    ...mapGetters(["company"]),
    ...mapGetters(["racine"]),
    ...mapGetters(["token"]),
    ...mapGetters(["collections"]),
    ...mapGetters(["products"]),
  },

}
</script>