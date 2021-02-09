<template>
  <div>
      
      <div v-for="art in articles" :key="art.id" class="border-bottom" @click="onClick(art.id)" @click.right="onRightClick(art.id)">
          <h2>
              {{art.title}}
          </h2>
          <p>
              {{art.price}}
          </p>
      </div>
      <p>
          Antal: {{ articlesCount }}
      </p>
  </div>
</template>

<script>
export default {

    computed: {

        articles: function() {

            return this.$store.getters.articles;
        },
        articlesCount: function(){

            return this.$store.getters.articlesCount;
        }
    },
    methods: {

        onClick: function(id){

            this.$router.push(`/article/${id}`)
        },
        onRightClick: function(id){

            this.$store.commit('removeArticle', id);
        }
    }
}
</script>

<style>

</style>