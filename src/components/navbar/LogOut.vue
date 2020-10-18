<template>
  <li class="px-6 py-2">
    <router-link to="/Login">
      Login
    </router-link>
  </li>
  <li class="px-6 py-2 ml-2 border-2 border-white rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-green-600">
    <router-link to="/Register">
      Register
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'LogOut'
};
</script>

<style>

</style>