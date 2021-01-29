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
    background:url("https://img.wallpapersafari.com/desktop/1920/1080/47/4/kWGX9a.jpg");
    background-size: cover;
    max-width:100vw;
    height: 100vh;
    margin: 0;

  }
  .remove-button:hover{
    color:red;
    cursor:pointer;
  }
  .remove-button {
    font-size: 2rem;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 5%;
    font:bold;
    align-self: center;
    color:darkred;
    font-family: Verdana, sans-serif;    
  }
  
  .time{
    color:black;
    font-size:0.8rem;
  }

</style>
