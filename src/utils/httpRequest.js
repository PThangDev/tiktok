import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const httpRequest = {
  // GET
  async get(endpoint, options = {}) {
    const response = await axiosInstance.get(endpoint, options);
    return response.data;
  },
};

export default httpRequest;
