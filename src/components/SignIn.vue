<template>
    <h2>Sign-in</h2>
    <div class="register">
        <input type="text" name="email" v-model="email" placeholder="Enter email" />
        <input type="password" name="password" v-model="password" placeholder="Enter password" />
        <button v-on:click="signIn" class="signin">Sign in</button>
        <a class="signup" href="/sign-up">Sign Up</a>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async signIn() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            );
            console.log(result)
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({ name: "Home" });
            } 
            else {
                alert('Invalid username or password');
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: "Home" });
        }
    }
}
</script>

<style scoped>
div.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

button.signup {
    width: 150px;
    height: 40px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    background-color: skyblue;
    cursor: pointer;
}

button.signin {
    width: 150px;
    height: 40px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    background-color: #1d2222;
    color:white;
}

a.signup {
    text-decoration:none;
    margin-top:2px;
    margin-left: 10px;
    padding: 11px 10px;
    
    background-color: #1d2222;
    color:white;
}

h2 {
    color: white;
}
</style>