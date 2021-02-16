<template>
  <div>

      <p v-if="display">
          {{value}}
      </p>
      <p v-show="display">
          {{value}}
      </p>

      <button v-on:click="onClick">
          Visa
      </button>
  </div>
</template>

<script>
export default {

    data: function(){

        return {

            display: true
            , value: 'Hej! Jag syns när display är true'
        }
    },
    methods: {

        onClick: function(){

            this.display = !this.display;
        }
    }
}
</script>

<style>

</style>