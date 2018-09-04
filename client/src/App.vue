<template>
  <div id="app" >
    <div id="nav" class="main-bg">
      <h1 class="font-color">My-Tunes</h1>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 146px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.main-bg {
  background-image: url('./assets/yodamusic.jpg');
  background-size: cover;
}

.font-color{
  color: black;
  text-shadow: 5px 5px white;
  font-size: 70pt
}
</style>
