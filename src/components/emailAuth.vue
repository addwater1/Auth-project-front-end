<script>
import axios from 'axios';
export default {
  data(){
    return {
      email: "",
      code: "",
      info: "",
      sinfo: ""
    }
  },
  methods: {
    sentEmail(){
      //code
      axios.post('http://localhost:8000/sentEmail', {
        email: this.email
      })
      .then(res => {
        localStorage.setItem('token', res.data.token)
        this.sinfo = "发送成功"
      })
      .catch(err => {
        console.log('send failed')
        this.info = err.response.data
      })
    },
    sentCode(){
      //code
      axios.post('http://localhost:8000/checkEmail', {
        code: this.code,
        token: localStorage.getItem('token')
      })
      .then(res => {
        this.$router.push('/welcome')
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
      <input type="text" v-model="email" placeholder="输入邮箱">
      <button type="button" @click="sentEmail">发送验证码</button>
    </div>
    <div class="success-info">{{ sinfo }}</div>
    <div class="input-wrap">
      <input type="text" v-model="code" placeholder="输入验证码">
      <button type="button" @click="sentCode">登陆</button>
    </div>
    <div class="error-info">{{ info }}</div>
  </div>
</template>

<style scoped>
.container {
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

.success-info {
  color: green;
}

.input-wrap {
  margin: 1em;
  display: flex;
}

button {
  min-width: 130px;
  padding: 8px 16px;
  font-size: large;
  border: 1px solid black;
  border-radius: 0 20px 20px 0;
}

button:hover {
  border: #4CAF50 1px solid;
  color: #4CAF50;
}

input {
  padding: 8px 16px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: none;
  border-radius: 20px 0 0 20px;
}

</style>