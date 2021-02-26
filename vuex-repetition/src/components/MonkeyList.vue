<template>
  <div>
      <ul>
          <li v-for="(monkey, index) in monkeys" :key="index">
              {{monkey.name}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {

    computed: {

        monkeys: function(){

          return this.$store.getters.animalOfType('Monkey');
        }
    }
}
</script>

<style>

</style>