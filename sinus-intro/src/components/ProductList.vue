<template>
  <div>
      <ul>
          <li v-for="(p, i) in products" :key="i">
              {{p.title}}, price: {{p.price}}
          </li>
      </ul>
  </div>
</template>

<script>
import {get, PRODUCTS_URL} from '@/api/api.js';

export default {

    created: async function(){

        const response = await get(PRODUCTS_URL);
        this.products = response.data;
    },

    data: function(){

        return {

            products: []
        }
    }
}
</script>

<style>

</style>