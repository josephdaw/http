// this module extracts away the http calls to allow for changing libraries down the track
const axios = require('axios');

const http = {
  get: async (url, options = {}) => {
    try {
      const response = await axios.get(url, options);
      return {
        data: response.data,
        status: response.status,
        ok: response.status >= 200 && response.status < 300,
      };
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to GET ${url}`);
    }
  },

  post: async (url, data, options = {}) => {
    try {
      const response = await axios.post(url, data, options);
      return {
        data: response.data,
        status: response.status,
        ok: response.status >= 200 && response.status < 300,
      };
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to POST ${url}`);
    }
  },

  put: async (url, data, options = {}) => {
    try {
      const response = await axios.put(url, data, options);
      return {
        data: response.data,
        status: response.status,
        ok: response.status >= 200 && response.status < 300,
      };
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to PUT ${url}`);
    }
  },

  delete: async (url, options = {}) => {
    try {
      const response = await axios.delete(url, options);
      return {
        data: response.data,
        status: response.status,
        ok: response.status >= 200 && response.status < 300,
      };
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to DELETE ${url}`);
    }
  },
};

module.exports = http;