<template>
  <div>
      <form @submit.prevent="onSubmit">
          <input type="email" v-model="email">
          <input type="password" v-model="password">
          <input type="submit" value="Logga in">
      </form>

      <!-- <button @click="onClick">
        Klicka för att regga Greta
      </button> -->
  </div>
</template>

<script>
export default {
    data: function(){

        return {

            email: null,
            password: null
        }
    },

    methods: {

        onSubmit: function() {

            console.log(this.email, this.password);

            const obj = {

                email: this.email
                , password: this.password
            };

            this.$store.dispatch('authenticateUser', obj);

        },

        // onClick: function(){
            
        //     const user = 
        //     {
        //         email: 'greta.thunberg@example.se',
        //         password: 'grillkorv123',
        //         name: 'Johan Kivi',

        //         address: {
        //             street: 'Tokitokvägen 3',
        //             zip: '123 45',
        //             city: 'Tokberga'
        //         }
        //     };

        //     this.$store.dispatch('registerUser', user);

        // }
    }
}
</script>

<style>

</style>