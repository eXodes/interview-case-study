<template>
  <Header />
  <main>
    <ProductList />
  </main>
  <footer>
    Footer
  </footer>
</template>

<script>
import Header from '@/partials/Header';
import ProductList from '@/components/ProductList';

export default {
  name: 'App',
  components: {
    Header,
    ProductList
  },
};
</script>

<style>
#app {
  min-width: 100vh;
  min-height: 100vh;
}

.line-clamp {
    display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>