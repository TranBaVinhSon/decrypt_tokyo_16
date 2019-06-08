<template>
  <div class="main">
    <router-link tag="li" to="/user_login">
      <a>/user_login</a>
    </router-link>
    <router-link tag="li" to="/user_registration">
      <a>/user_registration</a>
    </router-link>
    <router-link tag="li" to="/company_login">
      <a>/company_login</a>
    </router-link>
    <router-link tag="li" to="/company_registration">
      <a>/company_registration</a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
