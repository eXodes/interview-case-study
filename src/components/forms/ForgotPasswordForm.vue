<template>
  <div class="w-full max-w-xs container mx-auto my-10">
    <form
      @submit.prevent="handleForgotPassword"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Email
        </label>
        <input class="input" id="email" type="email" v-model="email" />
      </div>
      <div class="flex items-center justify-between">
        <a
          class="inline-flex align-baseline font-bold text-sm link cursor-pointer"
          @click="goBack"
        >
          <fa icon="long-arrow-alt-left" class="w-6 h-6 m-auto mr-2" />
          <span class="my-auto">Back</span>
        </a>

        <button class="button-text" type="button" @click="handleForgotPassword">
          Reset password
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '@/firebase/';

export default {
  name: 'LoginForm',
  props: {
    reset: Boolean,
  },
  setup(props) {
    const email = ref('');

    const handleForgotPassword = async () => {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {})
        .catch((error) => {
          throw new Error(`${error.code}: ${error.message}`);
        });
    };

    const goBack = () => {
      console.log(props);
      // reset.value = false;
    };

    return {
      email,
      handleForgotPassword,
      goBack,
    };
  },
};
</script>
