<template>
  <div :style="{ background: 'black', height: '100vh' }" id="error">
    <span class="message"> Some error has been detected </span><br />
    <span @click="update" type="button" class="btn btn-danger">
      click here to refresh
    </span>
  </div>
</template>

<style scoped>
#error {
  text-align: center;
  padding-top: 30vh;
}
.message {
  font-size: 6vh;
}
#error .btn {
  padding: 10vh;
  border-radius: 5vh;
  font-size: 6vh;
}
</style>

<script>
import { Company } from '@/models/company';
export default {
  name: "ErrorHome",

  methods: {
    update() {
      console.log("debut up");
      this.$store.commit("UPDATE_COMPANY", new Company);

      this.getcompany();
    },
  },
};
</script>