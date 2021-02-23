import Vue from 'vue'
import Vuex from 'vuex'
import {post, setToken, REGISTER_URL, AUTH_URL} from '@/api/api.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {

    async registerUser(context, payload){

      const response = await post(REGISTER_URL, payload);
      console.log(response);


      //görs bara temporärt för att det ska bygga
      console.log(context);
    },

    async authenticateUser(context, payload){

      const response = await post(AUTH_URL, payload);
      console.log(response);

      setToken(response.data.token);


      //görs bara temporärt för att det ska bygga
      console.log(context);
    }
  },
  modules: {
  }
})
