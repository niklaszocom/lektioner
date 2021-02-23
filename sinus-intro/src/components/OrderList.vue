<template>
  <div>
      order list
  </div>
</template>

<script>
import {get, ORDERS_URL} from '@/api/api.js';

export default {

    created: async function(){


        const response = await get(ORDERS_URL);
        console.log(response);
    }
}
</script>

<style>

</style>