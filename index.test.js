const axios = require('axios');
const http = require('./http');

describe('http module', () => {
  describe('given a GET request', () => {
    it('should return the expected data', async () => {
      // Mock the axios.get method to return a mock response
      const mockResponse = { data: { foo: 'bar' }, status: 200 };
      jest.spyOn(axios, 'get').mockResolvedValue(mockResponse);

      // Call the http.get method with a mock URL and options
      const url = 'https://example.com';
      const options = { headers: { Authorization: 'Bearer token' } };
      const result = await http.get(url, options);

      // Assert that the method returns the expected data
      expect(result.data).toEqual({ foo: 'bar' });
      expect(result.status).toEqual(200);
      expect(result.ok).toEqual(true);
    });

    it('should throw an error when the request fails', async () => {
      // Mock the axios.get method to throw an error
      const mockError = new Error('Request failed');
      jest.spyOn(axios, 'get').mockRejectedValue(mockError);

      // Call the http.get method with a mock URL and options
      const url = 'https://example.com';
      const options = { headers: { Authorization: 'Bearer token' } };

      // Assert that the method throws an error
      await expect(http.get(url, options)).rejects.toThrowError('Failed to GET https://example.com');
    });
  });

  describe('given a POST request', () => {
    it('should return the expected data', async () => {
      // Mock the axios.post method to return a mock response
      const mockResponse = { status: 200, data: { foo: 'bar' } };
      jest.spyOn(axios, 'post').mockResolvedValue(mockResponse);

      // Call the http.post method with a mock URL, data, and options
      const url = 'https://example.com';
      const data = { baz: 'qux' };
      const options = { headers: { Authorization: 'Bearer token' } };
      const result = await http.post(url, data, options);

      // Assert that the method returns the expected data
      expect(result.data).toEqual({ foo: 'bar' });
      expect(result.status).toEqual(200);
      expect(result.ok).toEqual(true);
    });

    it('throws an error when the request fails', async () => {
      // Mock the axios.post method to throw an error
      const mockError = new Error('Request failed');
      jest.spyOn(axios, 'post').mockRejectedValue(mockError);

      // Call the http.post method with a mock URL, data, and options
      const url = 'https://example.com';
      const data = { baz: 'qux' };
      const options = { headers: { Authorization: 'Bearer token' } };

      // Assert that the method throws an error
      await expect(http.post(url, data, options)).rejects.toThrowError('Failed to POST https://example.com');
    });
  });

  describe('given a PUT request', () => {
    it('should return the expected data', async () => {
      // Mock the axios.put method to return a mock response
      const mockResponse = { status: 200, data: { foo: 'bar' } };
      jest.spyOn(axios, 'put').mockResolvedValue(mockResponse);

      // Call the http.put method with a mock URL, data, and options
      const url = 'https://example.com';
      const data = { baz: 'qux' };
      const options = { headers: { Authorization: 'Bearer token' } };
      const result = await http.put(url, data, options);

      // Assert that the method returns the expected data
      expect(result.data).toEqual({ foo: 'bar' });
      expect(result.status).toEqual(200);
      expect(result.ok).toEqual(true);
    });

    it('should throw an error when the request fails', async () => {
      // Mock the axios.put method to throw an error
      const mockError = new Error('Request failed');
      jest.spyOn(axios, 'put').mockRejectedValue(mockError);

      // Call the http.put method with a mock URL, data, and options
      const url = 'https://example.com';
      const data = { baz: 'qux' };
      const options = { headers: { Authorization: 'Bearer token' } };

      // Assert that the method throws an error
      await expect(http.put(url, data, options)).rejects.toThrowError('Failed to PUT https://example.com');
    });
  });

  describe('given a DELETE request', () => {
    it('should return the expected data', async () => {
      // Mock the axios.delete method to return a mock response
      const mockResponse = { status: 200, data: { foo: 'bar' } };
      jest.spyOn(axios, 'delete').mockResolvedValue(mockResponse);

      // Call the http.delete method with a mock URL and options
      const url = 'https://example.com';
      const options = { headers: { Authorization: 'Bearer token' } };
      const result = await http.delete(url, options);

      // Assert that the method returns the expected data
      expect(result.data).toEqual({ foo: 'bar' });
      expect(result.status).toEqual(200);
      expect(result.ok).toEqual(true);
    });

    it('should throw an error when the request fails', async () => {
      // Mock the axios.delete method to throw an error
      const mockError = new Error('Request failed');
      jest.spyOn(axios, 'delete').mockRejectedValue(mockError);

      // Call the http.delete method with a mock URL and options
      const url = 'https://example.com';
      const options = { headers: { Authorization: 'Bearer token' } };

      // Assert that the method throws an error
      await expect(http.delete(url, options)).rejects.toThrowError('Failed to DELETE https://example.com');
    });
  });
});