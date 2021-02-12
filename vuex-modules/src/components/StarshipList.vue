<template>
  <div>
      <ul>
          <li v-for="(s, i) in starships" :key="i">
              {{s.name}}
          </li>
      </ul>

      <div>
          <p>
              {{firstPeople.name}}
          </p>
      </div>
  </div>
</template>

<script>

import { NAMESPACE, INIT_DATA } from "@/store/modules/starships.js";
import { mapState } from 'vuex';

export default {

created: function(){

    this.$store.dispatch(NAMESPACE + INIT_DATA);
},

computed: {

    ...mapState(NAMESPACE, {

        starships: state => state.results
    }),

    firstPeople: function(){

        return this.$store.state.people.results[0];
    }
}
}
</script>

<style>

</style>