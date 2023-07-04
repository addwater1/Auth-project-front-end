<script>
</script>

<template>
  <div>
    <nav>
      <router-link to="/">主页</router-link>
      <router-link to="/login">口令登录</router-link>
      <router-link to="/signup">注册</router-link>
      <router-link to="/emailAuth">邮箱登录</router-link>
    </nav>
  </div>
</template>

<style scoped>
nav {
  width: 100vw;
  min-height: 60px;
  border-width: 3px;
  text-align: center;
  background-color: #4CAF50;
  display: flex;
  justify-content: end;
  align-items: center;
}

a {
  padding: 10px;
  margin: 0;
  color: white;
  font-size: 2em;
}

a:hover {
  background-color: green;
}
</style>