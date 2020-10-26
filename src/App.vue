<template>
  <Header/>
  <router-view />
</template>

<script>
import Header from '@/views/partials/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

body::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

a:focus,
button:focus,
input:focus {
  outline: none;
  box-shadow: none;
}
</style>
