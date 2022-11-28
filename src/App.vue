<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>TP8</h1>
      <br>
      <Navbar />
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  h1 {
    color: rgb(52, 52, 204);
  }
</style>
