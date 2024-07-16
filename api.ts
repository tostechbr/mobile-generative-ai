import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const register = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : new Error('Erro ao registrar');
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : new Error('Erro ao fazer login');
  }
};
