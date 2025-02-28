import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const getItems = async () => {
  const response = await api.get('/products');
  return response.data.products;
};

export const getItemDetail = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};