<template>
  <div>
       <div class="border-bottom">
          <h2>
              {{article.title}}
          </h2>
          <p>
              {{article.price}}
          </p>
          <p>
              {{article.brand}}
          </p>
      </div>
  </div>
</template>

<script>
export default {

    computed: {

        article: function() {

            const id = this.$route.params.id;

            return this.$store.getters.getArticleById(id);
        }
    }

}
</script>

<style>

</style>