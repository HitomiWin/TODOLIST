<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar"
  export default {
    components:{
      Navbar,
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Fraunces', serif;
  }
  body{
    background:url("assets/david-latorre-romero-3cQ5LDWtAf4-unsplash.jpg");
    background-size: cover;
    max-width:100vw;
    height: 100vh;
    margin: 0;
  }

</style>
