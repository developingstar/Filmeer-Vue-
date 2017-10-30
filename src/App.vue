<template>
  <div id="app">
    <!-- the router outlet, where all matched components would ber viewed -->

    <div class = "admin-header">  
        <div class = "container">
          <div class = "menu-logo"><router-link v-bind:to="'/'">filmeer</router-link></div>
          <div class = "menu-item"><router-link v-bind:to="'/about'">toplist</router-link></div>
          <div class = "menu-item"><router-link v-bind:to="'/filmeer/home/main'">user</router-link></div>
          <div class = "menu-item"><router-link v-bind:to="'/filmeer/ads/campaigns'">ads</router-link></div>
          <div class = "register"><router-link v-bind:to="'/filmeer/home/main'">[Register]</router-link></div>
        </div>
    </div>
    <div class = "filmeerbiz-menu" style = "display:none">
      <router-link v-bind:to="'/'">filmeerbiz</router-link>
      <router-link v-bind:to="'/about'">posts</router-link>
      <router-link v-bind:to="'/filmeer/home/main'">contributor</router-link>
      <router-link v-bind:to="'/filmeer/home/main'">projects</router-link>
      <router-link v-bind:to="'/filmeer/home/main'">payments</router-link>
      <router-link v-bind:to="'/filmeer/home/main'">posts: ALL</router-link>
      <router-link v-bind:to="'/filmeer/home/main'">posts: CSTM</router-link>
    </div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
</style>
