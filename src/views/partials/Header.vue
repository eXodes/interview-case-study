<template>
  <header class="bg-primary">
    <div class="container mx-auto p-4 flex justify-between">
      <router-link to="/" class="flex">
        <div class="logo w-40 md:w-64  my-auto">
          <img src="@/assets/images/logo.png" alt="Supplycart" />
        </div>
      </router-link>
      <div class="menu my-auto flex-initial">
        <ul class="flex flex-row text-white font-bold">
          <LoggedIn v-if="isLoggedIn" />
          <LoggedOut v-if="!isLoggedIn" />
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import LoggedIn from '@/components/navbar/LoggedIn';
import LoggedOut from '@/components/navbar/LoggedOut';
import useUser from '@/hooks/useUser';

export default {
  name: 'Header',
  components: {
    LoggedIn,
    LoggedOut,
  },
  setup() {
    const { isLoggedIn } = useUser();

    return { isLoggedIn };
  },
};
</script>
