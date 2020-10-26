<template>
  <div class="w-full max-w-xs container mx-auto my-10">
    <form @submit.prevent="handleRegister" class="w-full max-w-lg bg-white p-4">
      <div class="flex flex-wrap -mx-3 mb-3 text-left">
        <div class="w-full md:w-1/2 px-3 md:mb-0">
          <label for="grid-first-name">
            First Name
          </label>
          <input
            v-model="state.firstName"
            id="grid-first-name"
            type="text"
            placeholder="John"
            name="first-name"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label for="grid-last-name">
            Last Name
          </label>
          <input
            v-model="state.lastName"
            id="grid-last-name"
            type="text"
            placeholder="Smith"
            name="last-name"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-3">
        <div class="w-full px-3">
          <label for="grid-email">
            Email
          </label>
          <input
            v-model="state.email"
            id="grid-email"
            type="email"
            name="email"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-3">
        <div class="w-full px-3">
          <label for="grid-password">
            Password
          </label>
          <input
            v-model="state.password"
            id="grid-password"
            type="password"
            name="password"
          />
          <p class="text-gray-600 text-xs mt-1 italic">
            Must be at least 6 characters
          </p>
        </div>
      </div>

      <button class="button-text" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { auth, dbUsers } from '@/firebase/';
import store from '@/stores/';
import router from '@/router/';

export default {
  name: 'RegisterForm',
  setup() {
    const state = reactive({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });

    const handleRegister = () => {
      auth
        .createUserWithEmailAndPassword(state.email, state.password)
        .then((credentials) => {
          const { user } = credentials;
          const uid = user.uid;
          const userData = {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            isVerified: user.emailVerified,
            isAdmin: false,
            displayName: user.displayName,
            createdAt: new Date(),
            photo: user.photoURL,
            phone: user.phoneNumber,
            products: [],
          };
          dbUsers.doc(uid).set(userData);
          store.isLogged = true;
          store.user = userData;
          router.push({
            name: 'Home',
          });
        })
        .catch((error) => {
          throw new Error(`${error.code}: ${error.message}`);
        });
    };

    return {
      state,
      handleRegister,
    };
  },
};
</script>
