import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getRepositoryArticles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/repository`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repository articles:', error);
    return [];
  }
};