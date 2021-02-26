import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    
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
    ]
  },
  getters: {

    //property style access
    dogs: (state, getters) => {

      return getters.animalOfType('Dog');
    },
    //method style access
    animalOfType: (state) => (type) => {

      const list = state.animals;

      const result = [];

      for (let i = 0; i < list.length; i++) {
        const animal = list[i];
        
        if(animal.type == type){

          result.push(animal);
        }
      }

      return result;
    }
  },
  mutations: {

    addAnimal(state, payload){

      //payload är ett objekt av animal

      state.animals.push(payload);
    },
    setAnimals(state, payload){
      
      //payload är en lista (array) av animal

      state.animals = payload;
    }
  },
  actions: {
    
    // addAnimalAction(context, animal){

    //   context.commit('addAnimal', animal);

    //   localStorage.setItem('Animals', JSON.stringify(context.state.animals));
    // }, 
    //är samma sak som nedan
    addAnimalAction({ commit, state }, animal){

      commit('addAnimal', animal);

      localStorage.setItem('Animals', JSON.stringify(state.animals));
    },

    initApp({ commit }){

      const storageObj = localStorage.getItem('Animals');

      const animals = JSON.parse(storageObj);

      if(animals != null){

        commit('setAnimals', animals);
      }
    }
  },
  modules: {}
});
