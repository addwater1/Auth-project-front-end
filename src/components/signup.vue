<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: "",
      email: "",
      passwd: "",
      info: "",
      sinfo: ""
    }
  },
  methods: {
    signup() {
      axios.post('http://localhost:8000/register', {
        name: this.username,
        email: this.email,
        password: this.passwd
      })
      .then(res => {
        this.sinfo = "注册成功"
      })
      .catch(err => {
        this.info = err.response.data
      })
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="input-wrap">
      <label for="">Username</label>
      <input type="text" v-model="username">
    </div>
    <div class="input-wrap">
      <label for="">Email</label>
      <input type="text" v-model="email">
    </div>
    <div class="input-wrap">
      <label for="">Password</label>
      <input type="text" v-model="passwd">
    </div>
    <div class="error-info">{{ info }}</div>
    <div class="success-info">{{ sinfo }}</div>
    <div class="button-wrap">
      <button type="button" @click="signup">Signup</button>
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
.input-wrap {
  min-width: 400px;
}

.error-info {
  color: red;
}
.success-info {
  color: green;
}

input {
  border-radius: 15px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
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

.button-wrap {
  min-width: 400px;
  display: flex;
  justify-content: end;
}

button:hover {
  background-color: white;
  border: #4CAF50 3px solid;
  color: #4CAF50;
}
</style>