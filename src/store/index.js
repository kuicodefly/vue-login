import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        isLogin:false,
        userInfo:{
            userName:'',
            passWord:''
        }
    },
    mutations:{
        login:(state,obj)=>{
            if(obj){
                state.isLogin = true;
                state.userInfo = obj;
            }
        },
        unLogin:state=>{
            state.isLogin = false;
            state.userName = {
            }
        }
    },
    actions:{
        toLogin:(context,obj)=>{
            context.commit('login',obj);
        },
        disLogin:context=>{
            context.commit('unLogin')
        }
    }
})