<template>
  <main>
    <ProductList />
  </main>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'Home',
  components: {
    ProductList
  }
};
</script>
