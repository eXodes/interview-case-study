<template>
  <Header />
  <main>
    Main
  </main>
  <footer>
    Footer
  </footer>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style scoped>
#app {
  min-width: 100vh;
  min-height: 100vh;
}
</style>