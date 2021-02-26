<template>
  <div>
      <div>
          <h2>
              Add animal
          </h2>
          <AnimalForm />
      </div>
      <div>
          <h2>
              All animals
          </h2>
          <AnimalList />
      </div>

      <div>
          <h2>
              Dogs
          </h2>
          <DogList />
      </div>

      <div>
          <h2>
              Cat
          </h2>
          <CatList />
      </div>

      <div>
          <h2>
              Monkeys
          </h2>
          <MonkeyList />
      </div>
  </div>
</template>

<script>

import AnimalList from '../components/AnimalList.vue'
import DogList from '../components/DogList.vue'
import CatList from '../components/CatList.vue'
import MonkeyList from '../components/MonkeyList.vue'
import AnimalForm from '../components/AnimalForm.vue'

export default {
    components: {
        AnimalList,
        DogList,
        CatList,
        MonkeyList,
        AnimalForm
    }
}
</script>

<style>

</style>
