<template>
  <div class="w-full max-w-xs container mx-auto my-10">
    <form
      @submit.prevent="handleLogin"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Email
        </label>
        <input class="input" id="username" type="text" v-model="state.email" />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="input"
          id="password"
          type="password"
          v-model="state.password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button class="button-text" type="button" @click="handleLogin">
          Sign In
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm link cursor-pointer"
          @click="handleForgotPassword"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
import { auth } from '@/firebase/';
import store from '@/stores/';
import router from '@/router/';

export default {
  name: 'LoginForm',
  props: {
    reset: Boolean,
  },
  setup(props) {
    const state = reactive({
      email: '',
      password: '',
    });

    const handleLogin = async () => {
      await auth
        .signInWithEmailAndPassword(state.email, state.password)
        .then(() => {
          store.isLoggedIn = true;
          router.push({ name: 'Home' });
        })
        .catch((error) => {
          throw new Error(`${error.code}: ${error.message}`);
        });
    };

    const handleForgotPassword = () => {
      computed(() => !props.reset);
      console.log(props.reset);
    };

    return {
      state,
      handleLogin,
      handleForgotPassword,
    };
  },
};
</script>
