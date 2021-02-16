<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DataOchVBind />
    <ComputedProperties />
    <IfShow />
    <ForLoop />
    <ParentComponent />
    <VModel />
  </div>
</template>

<script>
import ComputedProperties from './components/ComputedProperties.vue'
import DataOchVBind from './components/DataOchVBind.vue'
import ForLoop from './components/ForLoop.vue'
import IfShow from './components/IfShow.vue'
import ParentComponent from './components/ParentComponent.vue'
import VModel from './components/VModel.vue'

export default {
  name: 'App',
  components: {
    DataOchVBind,
    ComputedProperties,
    IfShow,
    ForLoop,
    ParentComponent,
    VModel
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
