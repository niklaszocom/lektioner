<template>
  <div>
      <ul>
          <li v-for="(cat, index) in cats" :key="index">
              {{cat.name}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {

    computed: {

        cats: function(){

            return this.$store.getters.animalOfType('Cat');
        }
    }
}
</script>

<style>

</style>