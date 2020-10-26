const { reactive, ref } = require('vue');

const isLoggedIn = ref(false);

const user = reactive({});

const preface = ref(true);

const products = ref([]);

export default {
  preface,
  isLoggedIn,
  user,
  products,
};
