<template>
  <LoadCollectionsHome v-if="collections == null" />
  <section v-else-if="collections.length == 0">vide</section>
  <section v-else>plein</section>
</template>


<script>
import LoadCollectionsHome from "../loaders/LoadCollectionsHome.vue";
import { mapGetters } from "vuex";
export default {
  name: "CollectionsHome",
  computed: {
    ...mapGetters(["company"]),
    ...mapGetters(["racine"]),
    ...mapGetters(["token"]),
  },
  props: {
    collections:null
  },
  components: {
    LoadCollectionsHome,
  },
   mounted() {
     // this.$emit('company')
    /* let collec = new Collections();
    console.log(collec);
    console.log(this.$store.state.company)
    let url = this.$store.state.racine + "companies/"+ this.$store.state.company.id +"/collections";
    console.log(url);
    axios.get(url).then(
        (response)=>{
            console.log(response);
        }
    ); */
  },
};
</script>