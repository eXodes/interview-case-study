<template>
  <li class="px-3 py-2 ml-2 rounded-lg transition duration-300 ease-in-out relative">
    <router-link to="/">
      <fa
        icon="cart-plus"
        class="w-6 h-6 m-auto"
      />
      <div class="absolute top-0 right-0 rounded-full bg-red-700 text-white text-xs leading-none w-5 h-5 flex">
        <span class="m-auto">1</span>
      </div>
    </router-link>
  </li>
  <li class="px-6 py-2">
    <a href="#">Username</a>
  </li>
</template>

<script>
export default {
  name: 'LogIn'
};
</script>

<style>

</style>