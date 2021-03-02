import Vue from "vue";
import Vuex from "vuex";
import { get } from "@/api/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    animals: [
      // {
      //   type: 'Dog'
      //   , name: 'Douglas'
      // },
      // {
      //   type: 'Monkey'
      //   , name: 'Simon'
      // },
      // {
      //   type: 'Cat'
      //   , name: 'Gizzy'
      // },
      // {
      //   type: 'Dog'
      //   , name: 'Sebastian'
      // }
    ],
  },
  getters: {
    //property style access
    dogs: (state, getters) => {
      return getters.animalOfType("Dog");
    },
    //method style access
    animalOfType: (state) => (type) => {
      const list = state.animals;

      const result = [];

      for (let i = 0; i < list.length; i++) {
        const animal = list[i];

        if (animal.type == type) {
          result.push(animal);
        }
      }

      return result;
    },
  },
  mutations: {
    addAnimal(state, payload) {
      //payload är ett objekt av animal

      state.animals.push(payload);
    },
    setAnimals(state, payload) {
      //payload är en lista (array) av animal

      state.animals = payload;
    },
    setUsers(state, payload) {
      //payload är en lista (array) av users

      state.users = payload;
    },
  },
  actions: {
    // addAnimalAction(context, animal){

    //   context.commit('addAnimal', animal);

    //   localStorage.setItem('Animals', JSON.stringify(context.state.animals));
    // },
    //är samma sak som nedan
    addAnimalAction({ commit, state }, animal) {
      commit("addAnimal", animal);

      localStorage.setItem("Animals", JSON.stringify(state.animals));
    },

    async getUsersAction(context) {
      if (context.state.users.length == 0) {
        const response = await get("https://randomuser.me/api/?results=50");

        context.commit("setUsers", response.data.results);
      }
    },
    // är samma sak som
    // async getUsersAction({ commit }) {
    //   const response = await get("https://randomuser.me/api/?results=50");

    //   commit("setUsers", response.data.results);
    // },

    initApp({ commit, dispatch }) {
      const storageObj = localStorage.getItem("Animals");

      const animals = JSON.parse(storageObj);

      if (animals != null) {
        commit("setAnimals", animals);
      }

      dispatch("getUsersAction");
    },
  },
  modules: {},
});
