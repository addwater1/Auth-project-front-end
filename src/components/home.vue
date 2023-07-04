<script>
import axios from 'axios';
export default {
  data() {
    return {
      id: null,
      title: null,
      author: null,
      info: null,
      isborrowed: true
    }
  },
  methods: {
    getBookInfo(){
      axios
        .get('http://localhost:8000/api')
        .then(res => (this.info = res.data))
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>Wlecome</h1>
    <p>This is a Authorization Project</p>
    <div class="input-wrap">
      <input type="text">
      <button @click="getBookInfo">Search</button>
    </div>
    <div>{{ info }}</div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em;
}

.input-wrap {
  display: flex;
  justify-content: center;
  padding: 2em;
}

button {
  padding: 15px 32px;
  font-size: large;
  border: 3px solid black;
}

input {
  padding: 12px 20px;
  min-width: 400px;
  border-bottom: 3px solid black;
  border-top: 3px solid black;
  border-left: 3px solid black;
  border-right: none;
}

h1 {
  font-family: monospace;
  font-size: 50px;
}
p {
  font-family: monospace;
  font-size: 30px;
}

</style>