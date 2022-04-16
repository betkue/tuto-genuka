<template>
    <div></div>
</template>

<script>

import { Company } from "@/models/company";
import axios from "axios";
export default {
    methods:{
        name:"checkView",
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
    }
}
</script>