<template>
    <LoadProductsHome v-if="products == null" />
    <section v-else-if="products.length == 0">vide</section>
    <section v-else>

    </section>
</template>


<script>
import LoadProductsHome from '../loaders/LoadProductsHome.vue'
    export default {
        components:{
            LoadProductsHome
        },
        props:{
            products :null
        },
    name: "ProductsHome",
    };
</script>