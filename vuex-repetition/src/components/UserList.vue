<template>
  <div>
    <ul>
      <li v-for="(user, i) in users" :key="i">
        {{ user.name.title }} {{ user.name.first }} {{ user.name.last }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
//   created: function() {
//     this.$store.dispatch("getUsersAction");
//   },
  computed: {
    users: function() {
      return this.$store.state.users;
    },
  },
};
</script>

<style></style>
