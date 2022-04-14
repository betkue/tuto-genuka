<template>
  <LoadCollectionsHome v-if="collections.data == null" />
  <section v-else-if="collections.data.length == 0">vide</section>
  <section v-else>
    <div>
      <span>{{ collections.data[0].name }}</span>
    </div>




  </section>
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
    ...mapGetters(["collections"]),
    ...mapGetters(["products"]),
  },
  components: {
    LoadCollectionsHome,
  },
    updated(){


      console.log(this.$store.state.collections.data[0])

        


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
<style scoped>

  span{
    font-size:2em;
    }
</style>