<template>
  <div
    class=" relative pt-4 pr-2 group"
    v-for="product in data"
    :key="product.id"
  >
    <div class="border rounded-md shadow-lg overflow-hidden mb-3">
      <div
        class="absolute top-0 right-0 bg-red-700 text-white font-bold rounded-lg px-2 py-1 shadow-sm z-10"
      >
        {{ product.year }}
      </div>
      <div>
        <img :src="product.image" alt="" />
      </div>
    </div>
    <div class="relative">
      <div
        class="bg-white border text-left shadow-md -mx-2 -mt-8 py-2 px-3 relative z-10 transform transition-all duration-300 ease-in-out group-hover:-translate-y-12"
      >
        <h4 class="font-bold uppercase">
          {{ product.maker }}
        </h4>
        <p class="line-clamp">
          {{ product.model }}
        </p>
      </div>
      <div
        class="absolute bottom-0 z-auto pb-2 px-3 w-full flex justify-between"
      >
        <button class="button-text button-small">
          Find out more
        </button>
        <button class="button-icon">
          <fa icon="cart-plus" class="w-6 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    data: Object,
  },
};
</script>

<style></style>
