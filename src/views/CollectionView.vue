<template>
    <div>
        collections : {{ single_collection.name }} 
    </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  
  name:"CollectionsView",
  computed: {
    ...mapGetters(["single_collection"]),
  },

}
</script>