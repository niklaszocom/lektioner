<template>
  <div>

      <p v-on:click="onClick">
          {{fullNameWithTitle}}
      </p>
      <p>
          Mr {{firstName}} {{lastName}}
      </p>
      <p>
          {{fullName}}
      </p>
  </div>
</template>

<script>
export default {

    data: function(){

        return {

            firstName: 'Niklas'
            , lastName: 'Holmström'
        }
    },
    computed: {

        fullName: function(){

            return this.firstName + " " + this.lastName;
        },
        fullNameWithTitle: function(){

            return "Mr " + this.fullName;
        }
    },
    methods: {

        onClick: function(){

            if(this.firstName == 'Niklas'){

                this.firstName = 'Björn';
                this.lastName = 'Svensson';
            }
            else{

                this.firstName = 'Niklas';
                this.lastName = 'Holmström';
            }
        }
    }
}
</script>

<style>

</style>