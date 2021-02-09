import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_ARTICLE, REMOVE_ARTICLE, SET_PEOPLE, SET_COUNT, SET_NEXT, SET_PREVIOUS } from './mutation-types.js';
import { getRequest, PEOPLE_URL } from '../api/api.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    people: [],

    count: 0,
    next: null,
    previous: null,





    articles: [
      {
        id: 1
        , title: "Nike skor"
        , price: 1000
        , brand: "Nike"
      },
      {
        id: 2
        , title: "Filippa K byxor"
        , price: 2000
        , brand: "Filippa K"
      },
      {
        id: 3
        , title: "Adidas tröja"
        , price: 500
        , brand: "Adidas"
      },
      {
        id: 4
        , title: "Nike t-shirt"
        , price: 500
        , brand: "Nike"
      }
    ]
  },
  getters: {
    
    articles: state => {

      return state.articles;
    },
    articlesCount: (state, getters) => {

      return getters.articles.length;
    },
    getArticleById: (state, getters) => (id) => {

      return getters.articles.find(art => art.id == id);
    },
    getArticlesByBrand: (state) => (brand) => {

      return state.articles.filter(art => art.brand == brand);
    },
    getArticleCountByBrand: (state, getters) => (brand) => {

      return getters.getArticlesByBrand(brand).length;
    }
  },
  mutations: {

    [ADD_ARTICLE](state, payload){

      state.articles.push(payload);
    },
    [REMOVE_ARTICLE](state, payload){

      //payload == id

      const article = state.articles.find(art => art.id == payload);

      if(article){

        const indexOf = state.articles.indexOf(article);
        state.articles.splice(indexOf, 1);
      }
    },
    [SET_PEOPLE](state, payload){

      //payload == people
      state.people = payload;
    },
    [SET_COUNT](state, payload){

      state.count = payload
    },
    [SET_NEXT](state, payload){

      state.next = payload
    },
    [SET_PREVIOUS](state, payload){

      state.previous = payload;
    }
  },
  actions: {

    async setPeople( { commit } ){

      const data = await getRequest(PEOPLE_URL);
      commit(SET_PEOPLE, data.results);
      commit(SET_COUNT, data.count);
      commit(SET_NEXT, data.next);
      commit(SET_PREVIOUS, data.previous);
    }

  },
  modules: {
  }
})
