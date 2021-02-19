<template>
  <div>
      <p>
          Parent
      </p>

      <h1>
          Hej hej
      </h1>
      <h3>
          jag är en h3:a
      </h3>

      <nav>
          <ul>
              <li><a href="#">Hej jag är en a-tag</a></li>
              <li><a href="#">Hej jag är en a-tag</a></li>
              <li><a href="#">Hej jag är en a-tag</a></li>
              <li><a href="#">Hej jag är en a-tag</a></li>
          </ul>
      </nav>

      <ChildSass />
  </div>
</template>

<script>
import ChildSass from './ChildSass.vue'
export default {
  components: { ChildSass },

}
</script>

<style lang="scss" scoped>

    @import './colors.scss';

    p {

        color: $primary-color;
        &:hover{

            color:yellow;
        }
    }

    h1{

        background-color: $secondary-color;
    }

    nav{

        ul{
            margin: 0;
            padding: 0;
            list-style: none;
        }
        li{

            display: inline-block;
        }

        a{

            display: block;
            padding: 6px 12px;
            text-decoration: none;
            color: $secondary-color;
        }
    }

</style>