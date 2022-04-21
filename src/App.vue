<template  >

     <!--  si l'id de la company est non null et # -404 -->
  <div
    v-show="company.id != null && company.id != -404"
    :style="{ background: 'black', height: '100vh' }"
  >
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="token == null" to="/products">Produits</router-link> |
      <router-link v-if="token == null" to="/collections"
        >Collections</router-link
      >
      | <router-link v-if="token == null" to="/connect">connect</router-link> |
      <router-link v-if="token != null" to="/deconnect">deconnect</router-link> |
      <router-link  to="/panier">panier [ {{  panier.products.length  }} ]</router-link>
    </nav>
    <router-view />
  </div>

     <!--  si l'id de la company est  null  -->

  <LoadHome
    v-show="company.id == null"
    :style="{ background: 'black', height: '100vh' }" />

    
     <!--  si l'id de la company est -404 -->
  <ErrorHome 
    v-show="company?.id == -404"/>


</template>


<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import { mapGetters } from "vuex";
import LoadHome from "@/components/loaders/LoadHome.vue";
import { Company } from "./models/company";
import ErrorHome from "@/components/ErrorHome.vue";

export default {
  name: "App",
  components: {
    LoadHome,
    ErrorHome,
  },
  watch:{
       title: {
      immediate: true,
      handler () {
        document.title = this.$store.state.company.name??"..."
      }
  }},
  methods: {
    async getcompany() {
      var getcom = function (store) {
        return new Promise((resolve) => {
          setTimeout(function () {
            resolve("");
            if (store.state.company.id == null) {
              
            store.commit("UPDATE_COMPANY", new Company(-404));
            }
          }, store.state.timeReset);
        });
      };
      this.$store.commit("GET_COMPANY");
      const lente = await getcom(this.$store);

      console.log(lente);
    },
  },
  computed: {
    ...mapGetters(["company"]),
    ...mapGetters(["racine"]),
    ...mapGetters(["token"]),
    ...mapGetters(["panier"]),
  },
  async beforeMount() {
    
 
    this.getcompany();
  },
};
</script>


