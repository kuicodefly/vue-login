<template>
  <div>
      <input type="text" v-model="userName">
      <input type="password" v-model="password">
      <button @click="loginIt()">登录</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            userName:'',
            password:''
        }
    },
    methods:{
        loginIt(){
            if(this.userName != '' && this.password != ''){
                console.log(this.userName,this.password)
                this.toLogin({
                    userName:this.userName,
                    passWord:this.password
                });
                this.$router.push({
                    path:'/'
                })
            }
        },
        ...mapActions(['toLogin'])
    }
}
</script>

<style>

</style>