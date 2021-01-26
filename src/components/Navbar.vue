<template>
  <div class="navbar">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/create-new-todo">Create New</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
  background:lightgray;
  padding:0.6rem 0 0.6rem
}
 a{ color:navy;
  text-decoration: none;
  margin:0 1rem;
  transition: 0.3s;
 }
a:hover{
  color:grey;
}

</style>