import { LoginCredentials, RegisterData, User } from '../types';
import { api } from "../index";

export const authService = {
  login: async (credentials: LoginCredentials) => {
    const response = await api.post('/auth/login', credentials);
    localStorage.setItem('token', response.data.token);
    return response.data.user;
  },

  register: async (data: RegisterData) => {
    const response = await api.post('/auth/register', data);
    localStorage.setItem('token', response.data.token);
    return response.data.user;
  },

  logout: async () => {
    await api.post('/auth/logout');
    localStorage.removeItem('token');
  },

  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },

  updateProfile: async (userId: string, data: Partial<User>) => {
    const response = await api.put(`/auth/profile/${userId}`, data);
    return response.data;
  },
}; 