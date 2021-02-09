<template>
  

  <div>
      <form @submit.prevent="onSubmit">
          <input type="text" v-model="title">
          <input type="text" v-model="brand">
          <input type="number" v-model="price">
          <input type="number" v-model="id">
          <input type="submit" value="Spara">
      </form>
  </div>
</template>

<script>

import { ADD_ARTICLE } from '@/store/mutation-types.js';

export default {
    data: function(){

        return {

            title: ''
            , brand: ''
            , price: 0
            , id: 0
        }
    },
    methods: {

        onSubmit: function(){

            const article = {

                id: this.id
                , title: this.title
                , brand: this.brand
                , price: this.price
            };

            this.$store.commit(ADD_ARTICLE, article);
        }
    }
}
</script>

<style>

</style>