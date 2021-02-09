<template>
  
  <div>
      
      <ul>
          <li v-for="(p, index) in people" :key="index">

              {{p.name}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {


    created: function(){

        this.$store.dispatch('setPeople')
    },
    computed: {

        people: function(){

            return this.$store.state.people;
        }
    }
}
</script>

<style>

</style>