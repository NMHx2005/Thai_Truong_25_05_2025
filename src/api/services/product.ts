import { api } from '../index';
import { Product, Category } from '../types';

export const productService = {
  getProducts: async (params?: { page?: number; limit?: number; category?: string; search?: string }) => {
    const response = await api.get<Product[]>('/products', { params });
    return response.data;
  },

  getProductById: async (id: string) => {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  },

  getCategories: async () => {
    const response = await api.get<Category[]>('/categories');
    return response.data;
  },

  getProductsByCategory: async (categoryId: string) => {
    const response = await api.get<Product[]>(`/categories/${categoryId}/products`);
    return response.data;
  },
}; 