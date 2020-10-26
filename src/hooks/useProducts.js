import { reactive, watch } from 'vue';
import API from '@/libs/API';

const useProducts = (api) => {
  const productsState = reactive({
    loading: false,
    data: [],
    error: '',
  });

  const loadData = async () => {
    try {
      productsState.loading = true;
      productsState.error = '';
      productsState.data = [];

      const response = await API.getProducts(api);
      productsState.data = response;
    } catch (error) {
      productsState.error = error.message;
    } finally {
      productsState.loading = false;
    }
  };

  watch(() => api, loadData, { immediate: true });

  return { productsState };
};

export default useProducts;
