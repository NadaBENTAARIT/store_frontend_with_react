import axios from 'axios';

const API_URL_GETALL = 'http://localhost:8080/api/devices';
const API_URL_GET_BY_ID = 'http://localhost:8080/api/devices';
const API_URL_POST = 'http://localhost:8080/api/devices';
const API_URL_PUT = 'http://localhost:8080/api/devices';
const API_URL_DELETE = 'http://localhost:8080/api/devices';

const deviceService = {
  deleteDevice: async (id) => {
    try {
      const response = await axios.delete(`${API_URL_DELETE}/${id}`);
      return response.data;
    } catch (error) {
      console.error('error while deleting device:', error);
      throw error;
    }
  },

  loadDevice: async () => {
    try {
      const response = await axios.get(API_URL_GETALL);
      return response.data;
    } catch (error) {
      console.error('error while loading  device list:', error);
      throw error;
    }
  },

  getDeviceById: async (id) => {
    try {
      const response = await axios.get(`${API_URL_GET_BY_ID}/${id}`);
      console.log(response);
      return response;
    } catch (error) {
      console.error('error while loading device', error);
      throw error;
    }
  },

  addDevice: async (device) => {
    try {
      const response = await axios.post(API_URL_POST, device);
      return response.data;
    } catch (error) {
      console.error('error while adding device:', error);
      throw error;
    }
  },

  editDevice: async (id, device) => {
    try {
      const response = await axios.put(`${API_URL_PUT}/${id}`, device);
      return response.data;
    } catch (error) {
      console.error('error while editing device:', error);
      throw error;
    }
  },
};

export default deviceService;
