<template>
    <h2>Sign-up</h2>
    <div class="register">
        <input type="text" name="name" v-model="name" placeholder="Enter name" />
        <input type="text" name="email" v-model="email" placeholder="Enter email" />
        <input type="password" name="password" v-model="password" placeholder="Enter password" />
        <button v-on:click="signUp" class="signup">Sign-up</button>
        <a class="signup" href="/sign-in">Sign-in</a>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                name: this.name,
                password: this.password
            });
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({ name: "Home" })
            }

        }
    },
    mounted() {
        console.log("mounted")
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
    margin-left: auto;
    margin-right: auto;
    background-color: #1d2222;
    cursor: pointer;
    color:white;
}


h2 {
    color: white;
}

a.signup {
    margin-top:2px;
    margin-left: 10px;
    padding: 11px 10px;
    text-decoration:none;
    background-color: #1d2222;
    color:white;
}
</style>