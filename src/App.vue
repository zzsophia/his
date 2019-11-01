<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <div>-->
<!--      <p>-->
<!--        If Element is successfully added to this project, you'll see an-->
<!--        <code v-text="'<el-button>'"></code>-->
<!--        below-->
<!--      </p>-->
<!--      <el-button>el-button</el-button>-->
<!--    </div>-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <router-link to="/dispensing">dispensing</router-link>-->
<!--    <router-link to="/returnmedicine">returnmedicine</router-link>-->
<!--    <router-link to="/drugadministration">drugadministration</router-link>-->
    <router-link to="/Constantcategorymanagement">Constantcategorymanagement</router-link>
<!--    <router-link to="/officeManagement">officeManagement</router-link>-->
<!--      <router-link to="/userManagement">userManagement</router-link>-->
      <router-link to="/registrationlevelmanagement">registrationlevelmanagement</router-link>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
