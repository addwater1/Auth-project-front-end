<script>
import Login from "./components/login.vue";
import Signup from "./components/signup.vue";
import Navbar from "./components/navbar.vue"
import axios from 'axios'

export default {
  data() {
    return {
      info: null
    }
  },
  components:
  {
    Navbar
  }
}

</script>
http://localhost:5173/
<template>
  <Navbar/>
  <router-view></router-view>
</template>

<style>
body {
  background-color: rgb(250 245 243);
}


</style>