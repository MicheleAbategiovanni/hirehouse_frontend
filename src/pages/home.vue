<template>
    <TheNavbarHome></TheNavbarHome>
    <TheHeaderHome></TheHeaderHome>
    <TheMainHome></TheMainHome>
    <TheFooter></TheFooter>

</template>

<script>
import TheNavbarHome from '../components/TheNavbarHome.vue';
import TheHeaderHome from '../components/TheHeaderHome.vue';
import TheMainHome from "../components/TheMainHome.vue";
import TheFooter from '../components/TheFooter.vue';

export default {
    name: 'HomePage',
    components: {TheHeaderHome, TheMainHome, TheNavbarHome, TheFooter},
    data() {
        return {
            
        }
    },
}

</script>