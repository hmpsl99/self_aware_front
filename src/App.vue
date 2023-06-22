<template>
  <InitialExamExpView />
</template>

<script>
import InitialExamExpView from './components/InitialExamExpView.vue'

export default {
  name: 'App',
  components: {
    InitialExamExpView
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
