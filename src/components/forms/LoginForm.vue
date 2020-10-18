<template>
  <div class="container mx-auto py-10 w-1/2">
    <div class="bg-white shadow-lg px-32 py-16">
      <h4 class="uppercase text-lg font-bold mb-10">
        Fill your login details below
      </h4>
      <form action="">
        <div class="">
          <label
            class="font-semibold" 
            for="username"
          >
            Email:
          </label>
          <input
            id="username"
            v-model.lazy="email"
            class="border-b-2 w-full text-center"
            type="email"
          >
        </div>
        <div class="mt-4">
          <label
            class="font-semibold" 
            for="password"
          >
            Password:
          </label>
          <input
            id="password"
            v-model.lazy="password"
            class="border-b-2 w-full text-center"
            type="password"
          >
        </div>
        <div class="mt-16">
          <button class="button-text">
            Log In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
};
</script>

<style>

</style>