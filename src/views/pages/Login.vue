<template>
  <main class="bg-gray-200">
    <LoginForm v-if="!reset" :reset="reset" />
    <ForgotPasswordForm v-if="reset" :reset="reset" />
  </main>
</template>

<script>
import LoginForm from '@/components/forms/LoginForm';
import ForgotPasswordForm from '@/components/forms/ForgotPasswordForm';
import { ref, watchEffect } from 'vue';
export default {
  name: 'Login',
  components: {
    LoginForm,
    ForgotPasswordForm,
  },
  setup() {
    const reset = ref(false);

    watchEffect(() => reset.value);

    return { reset };
  },
};
</script>

<style></style>
