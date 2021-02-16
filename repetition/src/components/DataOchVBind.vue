<template>
  <div class="hello">
    <p v-on:click="onClick">{{ namn }}</p>
    <img v-bind:src="imgUrl">

    <p :class="minKlass">
      Hej hej hej jag är en p tag
    </p>
    
  </div>
</template>

<script>
export default {
  name: 'DataOchVBind',

  data: function(){

    return {

      namn: 'Niklas',
      imgUrl: 'https://source.unsplash.com/random',
      minKlass: 'minKlass'
    }
  },
  methods: {

    onClick: function(){

      if(this.namn == 'Björn'){

        this.namn = 'Niklas'
      }
      else{

        this.namn = 'Björn';
      }

      // this.namn = this.namn == 'Björn' ? 'Niklas': 'Björn';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

img {

  height: 6rem;
}

.minKlass{

  background-color: rgb(156, 102, 102);
}
</style>
