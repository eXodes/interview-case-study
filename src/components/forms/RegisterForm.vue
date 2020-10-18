<template>
  <div class="container mx-auto py-10 w-1/2">
    <div class="bg-white shadow-lg px-32 py-16">
      <h4 class="uppercase text-lg font-bold mb-10">
        Fill the registration form below
      </h4>
      <form @submit="register">
        <div class="">
          <label
            class="font-semibold"
            for="username"
          > Email: </label>
          <input
            id="username"
            v-model.lazy="username"
            class="border-b-2 w-full text-center"
            type="email"
          >
        </div>
        <div class="mt-4">
          <label
            class="font-semibold"
            for="password"
          > Password: </label>
          <input
            id="password"
            v-model.lazy="password"
            class="border-b-2 w-full text-center"
            type="password"
          >
        </div>
        <div class="mt-16">
          <button class="button-text">
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
import { register } from '@/firebase/config';

export default {
  name: 'RegisterForm',  setup(props, ctx) {
    const loginStatus = ref(false);
    const username = ref([]);
    const password = ref([]);

    // const register = (username. password) => {
    //   register(username.value, password.value ).then(
    //     (data) => {
    //       console.log(data);
    //     }
    //   );
    // };

    return { username, password, loginStatus };
  },
};
</script>