<template>
  <Header />
  <router-view />
  <footer>
    Footer
  </footer>
</template>

<script>
import Header from '@/partials/Header';
export default {
  name: 'App',
  components: {
    Header
  },
};
</script>

<style>
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
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

a:focus, button:focus, input:focus {
  outline: none;
  box-shadow: none;
}

.button-icon {
  @apply bg-green-600 text-white rounded-md border-2 border-green-600 px-1 py-1 ;
}

.button-icon:hover {
  @apply bg-green-700 border-green-700;
}

.button-text {
  @apply bg-green-600 text-white font-semibold uppercase text-sm rounded-md border-2 transition-all duration-200 ease-in-out border-green-600 px-6 py-2;
}

.button-text:hover {
  @apply bg-green-700 border-green-700;
}

.button-small {
  @apply px-3 py-1;
}
</style>
