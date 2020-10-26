export default {
  async getProducts(api) {
    const response = await fetch(api);
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error('Error getting products!');
  },
};
