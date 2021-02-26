<template>
  <div>
      <ul>
        <li v-for="(animal, index) in animals" :key="index">
          <strong>{{animal.type}}:</strong> {{animal.name}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {

  computed: {

    animals: function(){

      const lista = this.$store.state.animals;

      return lista;
    }
  }
}
</script>

<style>

</style>