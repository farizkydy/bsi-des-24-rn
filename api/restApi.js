import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
});

export const fetchPosts = async () => {
  try {
    const response = await api.get('/users');
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch posts: ' + error.message);
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post('/users', postData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create post: ' + error.message);
  }
};

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

export const register = async (email, password) => {
  try {
    const response = await api.post('/register', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Registration failed');
  }
};


export default api;