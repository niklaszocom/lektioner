<template>
  <div>
      <ul>
          <li v-for="(p, i) in people" :key="i">
              {{p.name}}
          </li>
      </ul>
  </div>
</template>

<script>
import { INIT_DATA, NAMESPACE } from "@/store/modules/people.js";
import { mapState } from 'vuex'
export default {
  created: function() {

        this.$store.dispatch(NAMESPACE + INIT_DATA);
    },
    computed: {

        ...mapState(NAMESPACE, {
            people: state => state.results
        })
    }
}
</script>

<style>

</style>