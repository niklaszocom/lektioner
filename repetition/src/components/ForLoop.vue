<template>
  <div>

      <!-- värden -->
      <ul>
          <li v-for="(person, index) in personer" v-bind:key="index">
              {{person}}
          </li>
      </ul>

    <!-- objekt -->
      <p v-for="person in personObjekt" v-bind:key="person.id">
          {{person.name}}
      </p>
  </div>
</template>

<script>
export default {

    data: function(){
        return {
            personer: [
                "Niklas",
                "Björn",
                "Anders",
                "Andreas",
                "Leo",
                "Sofia"
            ],

            personObjekt: [
                {
                    id: 1,
                    name: "Kalle"
                },
                {
                    id: 2,
                    name: "Sofie"
                },
                {
                    id: 3,
                    name: "Sara"
                }
            ]
        }
    }
    
}
</script>

<style>

</style>