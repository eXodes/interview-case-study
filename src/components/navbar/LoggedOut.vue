<template>
  <li class="px-6 py-2">
    <router-link to="/login">
      Login
    </router-link>
  </li>
  <li class="px-6 py-2 ml-2 border-2 border-white rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-green-600">
    <router-link to="/register">
      Register
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'LoggedOut'
};
</script>

<style>

</style>