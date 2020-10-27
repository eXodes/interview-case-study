<template>
  <main class="py-10 px-4">
    <div class="container mx-auto">
      <div class="section">
        <div class="heading">
          <h2 class="text-2xl font-bold">
            Find your favourite car here!
          </h2>
        </div>
        <div v-if="productsState.loading">
          <div
            class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50"
          >
            <span
              class="text-primary opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
              style="top: 50%;"
            >
              <i class="fas fa-circle-notch fa-spin fa-5x"></i>
            </span>
          </div>
        </div>
        <div v-if="!productsState.loading" class="grid mt-6">
          <ProductCard :data="products" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue';
import ProductCard from '@/components/content/ProductCard';
import useProducts from '@/hooks/useProducts';

export default {
  name: 'ProductList',
  components: {
    ProductCard,
  },
  setup() {
    const { productsState } = useProducts(
      'https://run.mocky.io/v3/bb218412-d57c-4052-bd71-74eb33070468'
    );

    const products = computed(() => productsState.data);

    return { productsState, products };
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
