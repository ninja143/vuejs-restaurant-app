<template>
    <header>
        <img src="../assets/restro.png" class="logo" />
        <h1>Welcome to Restro App</h1>
    </header>
    <nav>
        <a href="">Add Restaurant</a>
    </nav>
</template>

<script>
export default {
    name: 'HeaderView'
}
</script>

<style>
nav {
    display: block;
    margin: 20px auto;
    height: 40px;
    display: flex;
}

nav a {

    text-decoration: none;
    padding: 10px 6px;
    border: 1px solid cyan;
    width: 150px;
    margin-left: 20px;
    text-align: center;
    background-color: rgb(123, 25, 110);
    color: white;
    font-weight: 500;

}
</style>