<template>
  <main class="py-10">
    <div class="container mx-auto">
      <div class="section">
        <div class="heading">
          <h2 class="text-2xl font-bold">
            Find your favourite car here!
          </h2>
        </div>
        <div class="grid mt-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProductCard from '@/components/content/ProductCard';

export default {
  name: 'ProductList',
  components: {
    ProductCard,
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
}
</style>>
