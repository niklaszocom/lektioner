<template>
  <div class="wrapper">
      <ChildComponent 
        :firstName="firstName" 
        :lastName="lastName"
        @onChangeName="onChangeName"
      />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue"

export default {
  components: { ChildComponent },

  data: function(){

      return {

          firstName: 'Niklas',
          lastName: 'Holmström'
      }
  },
  computed: {


      fullName: function(){

          return this.firstName + " " + this.lastName;
      }
  },
  methods: {

      onChangeName: function(payload){

          if(payload != null){

              this.firstName = payload.firstName;
              this.lastName = payload.lastName;

              return;
          }

          if(this.firstName == "Niklas"){

              this.firstName = this.getName();
              this.lastName = "Svensson";
          }
          else{

              this.firstName = "Niklas";
              this.lastName = "Holmström";
          }
      },

      getName: function(){

          return "Björn";
      }
  }

}
</script>

<style>

    .wrapper{

        border-top: 2px black solid;
        margin-top: 2rem;
        background-color: rgb(243, 209, 209);
    }
</style>