<template>
  <li
    class="px-3 py-2 ml-2 rounded-lg transition duration-300 ease-in-out relative"
  >
    <router-link to="/cart">
      <fa icon="cart-plus" class="w-6 h-6 m-auto" />
      <div
        v-if="addedProducts"
        class="absolute top-0 right-0 rounded-full bg-red-700 text-white text-xs leading-none w-5 h-5 flex"
      >
        <span class="m-auto">{{ addedProducts }}</span>
      </div>
    </router-link>
  </li>
  <li
    class="px-3 py-2 ml-2 rounded-lg transition duration-300 ease-in-out relative"
  >
    <button @click="logout">
      <fa icon="sign-in-alt" class="w-6 h-6" />
    </button>
  </li>
</template>

<script>
import { auth } from '@/firebase/';
import store from '@/stores/';
import router from '@/router/';
import { computed, toRefs, watchEffect } from 'vue';

export default {
  name: 'LoggedIn',
  setup() {
    const userStore = toRefs(store.user.value);
    const products = toRefs(userStore.products.value);

    const addedProducts = computed(() => products.length);
    watchEffect(() => console.log(products.length));

    const logout = () => {
      auth
        .signOut()
        .then(() => {
          store.user.value = null;
          store.isLoggedIn = false;
          router.push({ name: 'Login' });
        })
        .catch((error) => {
          throw new Error(error);
        });
    };

    return {
      logout,
      addedProducts,
    };
  },
};
</script>

<style></style>
