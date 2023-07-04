<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: "",
      passwd: "",
      info: ""
    }
  },
  methods: {
    login() {
      axios.post('http://localhost:8000/login', {
        email: this.email,
        password: this.passwd
      })
        .then(res => {
          this.$router.push('/welcome')
        })
        .catch(err => {
          // 登陆失败后的操作
          this.info = err.response.data
        })
    }
  }
}
</script>

<template>
  <div class="container">
    <div id="pwd">
      <div class="input-wrap">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email">
      </div>
      <div class="input-wrap">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="passwd">
      </div>
      <div class="error-info">{{ info }}</div>
      <div class="button-wrap">
        <button type="button" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: black 2px solid;
  border-radius: 30px;
  margin: 6em;
  padding: 10px;
  box-shadow: 3px 3px;
}

.error-info {
  color: red;
}

.input-wrap {
  min-width: 400px;
}

.button-wrap {
  min-width: 400px;
  display: flex;
  justify-content: end;
}



button {
  background-color: #4CAF50;
  /* Green */
  border: green 3px solid;
  border-radius: 15px;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  margin-top: 20px;
}

button:hover {
  background-color: white;
  border: #4CAF50 3px solid;
  color: #4CAF50;
}

input {
  border-radius: 15px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
