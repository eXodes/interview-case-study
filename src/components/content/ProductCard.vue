<template>
  <div class=" relative pt-4 pr-2 group">
    <div class="border rounded-md shadow-lg overflow-hidden">
      <div class="absolute top-0 right-0 bg-red-700 text-white font-bold rounded-lg px-2 py-1 shadow-sm z-10">
        On Sale!
      </div>
      <div>
        <img
          src="https://loremflickr.com/320/240/bmw,car"
          alt="BMW Car"
        >
      </div>
    </div>
    <div class="relative">
      <div class="bg-white border shadow-md -mx-2 -mt-8 py-2 px-3 relative z-10 transform transition-all duration-300 ease-in-out group-hover:-translate-y-12">
        <h4 class="font-bold uppercase">
          Eiusmod occaecat
        </h4>
        <p class="line-clamp">
          Est ad tempor ea eiusmod et labore exercitation quis.
        </p>
      </div>
      <div class="absolute bottom-0 z-auto pb-2 px-3 w-full flex justify-between">
        <button class="bg-green-600 text-white font-semibold uppercase text-sm rounded-md border-2 transition-all duration-200 ease-in-out border-green-600 px-3 py-1 hover:bg-green-700 hover:border-green-700">
          Find out more
        </button>
        <button class="bg-green-600 text-white rounded-md border-2 border-green-600 px-3 py-1 hover:bg-green-700 hover:border-green-700">
          <fa
            icon="cart-plus"
            class="w-6 h-4"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
};
</script>

<style>

</style>