import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

// Create a configured instance of Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define functions to interact with the backend
export const itemService = {
  // Fetch all items (GET)
  getItems: async () => {
    try {
      const response = await api.get('/data');
      return response.data.items;
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  },

  // Add a new item (POST)
  addItem: async (itemName) => {
    try {
      const response = await api.post('/items', { name: itemName });
      return response.data.items;
    } catch (error) {
      console.error('Error adding item:', error);
      throw error;
    }
  }
};