<template>
  <div>
      <p @click="onClick">
          {{fullName}}
      </p>
  </div>
</template>

<script>
export default {

    props: {

        firstName: {

            type: String,
            required: true
        },
        lastName: {
            
            type: String,
            required: true
        }
    },
    computed: {

        fullName: function(){

            return this.firstName + ' ' + this.lastName;
        }
    },
    methods: {

        onClick: function(){

            // const payload = {

            //     firstName: "Hejsan"
            //     , lastName: "Svejsan"
            // };

            // this.$emit('onChangeName', payload);
            this.$emit('onChangeName');
        }
    }
}
</script>

<style>

</style>