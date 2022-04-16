<template>
    <div></div>
</template>
<script>
import { UserConnect } from '@/models/user_connect';
export default {
    beforeCreate(){
        let user = new UserConnect("betkuetjh@gmail.com","password");
                    console.log(user);
        console.log(this.$store.state.company)
        this.$store.commit("CONNEXION",user);
    }
}
</script>