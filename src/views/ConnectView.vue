<template>

        <LogAuth v-show="connect == true" />,
        <SingAuth v-show="connect == false" />
</template>
<script>
//import { UserConnect } from '@/models/user_connect';
import LogAuth from "@/components/authentification/LogAuth.vue";
import SingAuth from "@/components/authentification/SingAuth.vue";
export default {
    name:"ConnectView",
    components:{
        LogAuth,
        SingAuth
    },
    props:{
        
        connect: {
            type: Boolean,
            default: true
        }
    },
    beforeCreate(){
/*         let user = new UserConnect("betkuetjh@gmail.com","password");
                    console.log(user);
        console.log(this.$store.state.company)
        this.$store.commit("CONNEXION",user); */
    }
}
</script>