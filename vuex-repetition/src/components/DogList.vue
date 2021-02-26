<template>
  <div>
      <ul>
          <li v-for="(dog, index) in dogs" :key="index">
              {{dog.name}}
          </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    computed: {

        ...mapGetters([
            'dogs'
        ]),
        // samma som nedan
        // dogs: function(){

        //     return this.$store.getters.dogs;
        // }
    }
}
</script>

<style>

</style>