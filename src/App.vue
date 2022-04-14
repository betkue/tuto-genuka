<template  >
  <div v-show="company.id != null" :style="{background:'black',height: '100vh' }">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="token == null" to="/products">Produits</router-link> |
      <router-link v-if="token == null" to="/collections"
         >Collections</router-link
      >
      | <router-link v-if="token == null" to="/connect">connect</router-link> |
      <router-link v-if="token == null" to="/deconnect">deconnect</router-link>
    </nav>
    <router-view  />
  </div>
  <LoadHome v-show="company.id == null" :style="{background:'black',height: '100vh' }"/>
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
import { Company } from "@/models/company";
import axios from "axios";
import LoadHome from '@/components/loaders/LoadHome.vue'
export default {
  name: "App",
  components: {
    LoadHome
  },

  methods:{
    aff()
    {
       console.log(this.$store.state.company);
    },
    getcompany(){
      
      let company = new Company();
      let domaine =
        document.location.protocol + "//" + document.location.hostname;

      axios
        .get(this.$store.state.racine + "companies/byurl?url=" + domaine)
        .then((response) => {
          if (response.status == 200) {
            let json = response.data;
            company.fromJson(json);

            this.$store.commit("UPDATE_COMPANY", company);

            return company;
          }
        });
    }
  },
  computed: {
    ...mapGetters(["company"]),
    ...mapGetters(["racine"]),
    ...mapGetters(["token"]),
  },
   beforeMount() {
    if (this.$store.state.company.id == null) {
      
         this.getcompany()
    }
  },
};
</script>


