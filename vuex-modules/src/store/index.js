import Vue from "vue";
import Vuex from "vuex";
import people from "./modules/people.js";
import starships from "./modules/starships.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    people: people,
    starships: starships
  }
});
