<template>
  <div>
      <form @submit.prevent="onSubmit">

          <input type="text" v-model="name">
          <input type="text" v-model="type">
          <input type="submit" value="Spara">
      </form>
  </div>
</template>

<script>
export default {

    data: function(){

        return {

            name: ''
            , type: ''
        }
    },
    methods: {


        onSubmit: function(){

            const animal = {
                name: this.name
                , type: this.type
            };

            this.$store.dispatch('addAnimalAction', animal);

            this.name = '';
            this.type = '';
        }
    }
}
</script>

<style>

</style>