<template>
  <div id="app">
    <p>username:{{userInfo.userName}}</p>
    <p>password:{{userInfo.passWord}}</p>
    <router-link to="/Login" v-if="!isLogin">登录</router-link>
    <router-link to="/Home">home</router-link>
    <router-link to="/">首页</router-link>
    <router-view />
  </div>
</template>

<script>
import {mapState} from 'vuex'
// import Head from '@/components/Head
export default {
  name: "App",
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      if(this.isLogin){
        next()
      }else{
        next({
          path:'/Login'
        })
      }
    });
  },
  computed:{
    ...mapState(['userInfo','isLogin']),
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
