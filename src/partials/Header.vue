<template>
  <header class="bg-green-600">
    <div class="container mx-auto py-4 flex justify-between">
      <router-link to="/">
        <div class="logo w-64 my-auto">
          <img
            src="@/assets/images/logo.png"
            alt="Supplycart"
          >
        </div>
      </router-link>
      <div class="menu my-auto">
        <ul class="flex flex-row text-white font-bold">
          <li class="px-6 py-2">
            <router-link to="/">
              <a href="#">Login</a>
            </router-link>
          </li>
          <li class="px-6 py-2 ml-2 border-2 border-white rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-green-600">
            <router-link to="/">
              <a href="#">Register</a>
            </router-link>
          </li>
          <li class="px-3 py-2 ml-2 rounded-lg transition duration-300 ease-in-out relative">
            <router-link to="/">
              <a href="#">
                <fa
                  icon="cart-plus"
                  class="w-6 h-6 m-auto"
                />
                <div class="absolute top-0 right-0 rounded-full bg-red-700 text-white text-xs leading-none w-5 h-5 flex">
                  <span class="m-auto">1</span>
                </div>
              </a>
            </router-link>
          </li>
          <li class="px-6 py-2">
            <a href="#">Username</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
