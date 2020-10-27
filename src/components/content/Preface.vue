<template>
  <teleport to="body">
    <div
      v-if="show"
      class="preface absolute top-0 left-0 w-screen h-screen p-4 bg-black bg-opacity-50 flex z-50"
    >
      <div class="m-auto mt-36">
        <div class="max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg">
          <div class="flex justify-center md:justify-end -mt-16">
            <img
              class="w-20 h-20 object-cover rounded-full border-2 border-primary-hover"
              :src="imgSrc"
            />
          </div>
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">
              This is just another test site
            </h2>
            <p class="mt-2 text-gray-600">
              This site is build with Vue 3, mainly the new Component API that
              gives the ability to create composable functions. The Composition
              API the new way to manage states in Vue 3 without the need of a
              central state management such as Vuex.
            </p>
          </div>
          <div class="flex justify-end mt-4">
            <button
              @click="handleClose"
              class="text-xl font-bold text-primary hover:text-primary-hover"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import profileImage from '@/assets/images/me.png';
import store from '@/stores/';

export default {
  name: 'Preface',
  setup() {
    const imgSrc = profileImage;
    const show = store.preface;

    const handleClose = () => {
      store.preface.value = false;
    };

    return { imgSrc, show, handleClose };
  },
};
</script>

<style lang="scss" scoped>
.preface {
  font-family: 'SF Mono, Monaco', 'Courier New', monospace;
}
</style>
