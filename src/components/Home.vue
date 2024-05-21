<template>
    <Header />
    <button class="logout" v-on:click="logout">Logout</button>
    <div class="page">
        <h1>
            Hello {{ loggedName }}, Welcome to the restaurant app !
        </h1>
    </div>
</template>
<script>
import Header from './Header'
export default {
    name: 'HomeView',
    components: {
        Header
    },
    data() {
        return {
            loggedName: ''
        }
    },
    methods: {
        logout() {
            localStorage.removeItem("user-info");
            this.$router.push({ name: 'SignIn' });
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        } else {
            this.loggedName = JSON.parse(user)[0].name;
        }


    }
}
</script>

<style scoped>
</style>