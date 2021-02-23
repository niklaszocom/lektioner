<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div style="display: none">
      <DataOchVBind />
      <ComputedProperties />
      <IfShow />
      <ForLoop />
      <ParentComponent />
      <VModel />
     
      <ParentMount />
      <ParentSass />
    </div>
    <button @click="display = !display">klicka här</button>
    <LifeCycleHooks v-if="display" />
    

  </div>
</template>

<script>
import ComputedProperties from './components/ComputedProperties.vue'
import DataOchVBind from './components/DataOchVBind.vue'
import ForLoop from './components/ForLoop.vue'
import IfShow from './components/IfShow.vue'
import LifeCycleHooks from './components/LifeCycleHooks.vue'
import ParentComponent from './components/ParentComponent.vue'
import ParentMount from './components/ParentMount.vue'
import ParentSass from './components/ParentSass.vue'
import VModel from './components/VModel.vue'

export default {
  name: 'App',
  components: {
    DataOchVBind,
    ComputedProperties,
    IfShow,
    ForLoop,
    ParentComponent,
    VModel,
    LifeCycleHooks,
    ParentMount,
    ParentSass
  },
  data: function(){

    return {

      display: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
