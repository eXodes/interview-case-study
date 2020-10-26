<template>
  <main>
    <ProductList v-if="isLoggedIn" />
    <Preface />
  </main>
</template>

<script>
import Preface from '@/components/content/Preface.vue';
import ProductList from '@/components/content/ProductList.vue';
import useUser from '@/hooks/useUser';

export default {
  name: 'Home',
  components: {
    Preface,
    ProductList,
  },
  setup() {
    const { isLoggedIn } = useUser();

    return { isLoggedIn };
  },
};
</script>
