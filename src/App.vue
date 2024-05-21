<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  height: 60px;
}

body {
    background-image: url("./assets/bg_.jpg");
    background-size: cover;
    background-position: center top;
}

header {
  height: 90px;
  border-bottom: 2px solid grey;
  margin-bottom: 10px;
  display: flex;
}

.logout {
  color: white;
  background-color: #ad4545;
  padding: 8px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
</style>
