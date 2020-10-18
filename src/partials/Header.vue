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
          <LogIn />
          <LogOut />
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import LogIn from '@/components/navbar/LogIn';
import LogOut from '@/components/navbar/LogOut';

export default {
  name: 'Header',
  components: {
    LogIn,
    LogOut
  },
};
</script>
