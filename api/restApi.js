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

export default api;