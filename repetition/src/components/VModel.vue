<template>
  <div>

      <ul>
          <li v-for="(person, index) in personer" :key="index">

              {{person.firstName}} {{person.lastName}}
          </li>
      </ul>
    
    <p>
        {{fullName}}
    </p>
    <form v-on:submit.prevent="onSubmit">

        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName">
        <input type="submit" value="Spara">
    </form>
  </div>
</template>

<script>
export default {

    data: function(){

        return {

            firstName: ''
            , lastName: ''
            , personer: []
        }
    },
    computed: {

        fullName: function(){

            return this.firstName + ' ' + this.lastName;
        }
    },
    methods: {

        onSubmit: function(){

            const person = {

                firstName: this.firstName
                , lastName: this.lastName
            };

            this.personer.push(person);

            this.firstName = '';
            this.lastName = '';
        }
    }
}
</script>

<style>

</style>