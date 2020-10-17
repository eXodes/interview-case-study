<template>
  <header class="bg-green-600 w-screen">
    <div class="container mx-auto py-4 flex justify-between">
      <div class="logo w-64 my-auto">
        <img
          src="@/assets/images/logo.png"
          alt="Supplycart"
        >
      </div>
      <div class="menu my-auto">
        <ul class="flex flex-row text-white">
          <li class="px-6 py-2">
            <a href="#">Login</a>
          </li>
          <li class="px-6 py-2">
            <a href="#">Logout</a>
          </li>
          <li class="px-6 py-2 ml-2 border border-white rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-green-600">
            <a href="#">Register</a>
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
