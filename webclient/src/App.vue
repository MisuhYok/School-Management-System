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
  background: linear-gradient(45deg, rgba(185,215,234,1) 0%, rgba(214,230,242,1) 61%);
}
</style>
