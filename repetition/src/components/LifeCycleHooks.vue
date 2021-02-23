<template>
  <div>
      <h1>Hej!</h1>
      <p>
          Hej jag är en p tag
      </p>

      <button v-on:click="onClick">

          Klicka på mig för att uppdatera namnet!
      </button>

      <p class="fullName">
        {{fullName}}
      </p>
  </div>
</template>

<script>
export default {

    beforeCreate: function(){

        console.log("beforeCreate");
        console.log(this.firstName);
    },
    created: function(){

        console.log("created");
        console.log(this.firstName);

        this.fullName = this.firstName + ' ' + this.lastName;
    },
    beforeMount: function(){

        console.log("beforeMount");
        console.log(this.firstName);
        console.log(this.$el);
    },
    mounted: function(){
        
        console.log("mounted");
        console.log(this.firstName);
        console.log(this.$el);
        console.log(this.$el.querySelector("p").textContent);
    },
    beforeUpdate: function(){

        console.log("beforeUpdate");
        console.log(this.fullName);
        console.log(this.$el.querySelector("p.fullName").textContent);
    },
    updated: function(){

        console.log("updated");
        console.log(this.fullName);
        console.log(this.$el.querySelector("p.fullName").textContent);
    },
    beforeDestroy: function(){

        console.log("beforeDestroy");
    },
    destroyed: function(){

        console.log("destroyed");
    },
    data: function(){

        return {

            firstName: 'Niklas'
            , lastName: 'Holmström'
            , fullName: null
        }
    },
    // computed: {

    //     fullName: function(){

    //         return this.firstName + ' ' + this.lastName;
    //     }
    // },
    methods: {

        onClick: function(){

            this.firstName = this.firstName == 'Björn' ? 'Niklas': 'Björn';
        }
    }
}
</script>

<style>

</style>