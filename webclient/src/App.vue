<template>
  <v-app id="app">
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',
  components: { Footer },
  data: () => ({
    //
  })
}
</script>

<style scoped>
#app {
  background: linear-gradient(90deg, rgba(247,251,252,1) 0%, rgba(214,230,242,1) 50%, rgba(185,215,234,1) 100%);
}
</style>
