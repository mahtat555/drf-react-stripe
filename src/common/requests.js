import axios from "axios";

// The Axios default configuration
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.baseURL = document.location.origin;
axios.defaults.baseURL = "http://localhost:8000";


export default class requests {
  /**
   * Options to use in requests, we will send data in format JSON,
   * and accept JSON from the server.
   */
  static options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  /**
   * Send a GET request to the server.
   *
   * @param {string} url
   * @param {array} params
   * @returns
   */
  static async get(url, params = {}, headers = {}, token = null) {
    const options = { ...this.options, headers: { ...this.options["headers"], ...headers } }
    this._authorization(options, token)
    return await axios.get(url, { ...options, params: { ...params } })
  }

  /**
   * Send a POST requests to the server.
   *
   * @param {string} url
   * @param {array} data
   * @param {array} params
   * @returns
   */
  static async post(url, data = {}, params = {}, headers = {}, token = null) {
    const json = JSON.stringify(data);
    const options = { ...this.options, headers: { ...this.options["headers"], ...headers } }
    this._authorization(options, token)
    return await axios.post(url, json, { ...options, ...params });
  }

  /**
   * Send a PUT requests to the server.
   *
   * @param {string} url
   * @param {array} data
   * @param {array} params
   * @returns
   */
  static async put(url, data = {}, params = {}, headers = {}, token = null) {
    const json = JSON.stringify(data);
    const options = { ...this.options, headers: { ...this.options["headers"], ...headers } }
    this._authorization(options, token)
    return await axios.put(url, json, { ...options, ...params });
  }

  /**
   * Send a DELETE requests to the server.
   *
   * @param {string} url
   * @param {array} data
   * @param {array} params
   * @returns
   */
  static async delete(url, data = {}, params = {}, headers = {}, token = null) {
    const json = JSON.stringify(data);
    const options = { ...this.options, headers: { ...this.options["headers"], ...headers } }
    this._authorization(options, token)
    return await axios.delete(url, json, { ...options, ...params });
  }


  /**
   * Set the token
   * @param {object} options
   * @param {string} token
   */
  static _authorization(options, token = null) {
    if (token) {
      options["headers"]["Authorization"] = `Bearer ${token}`
    }
  }

  /**
   * Send a POST requests to the server with formData.
   *
   * @param {string} url
   * @param {array} data
   * @param {array} params
   * @returns
   */
  static async postForm(url, data = {}, params = {}, headers = {}, token = null) {
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    const options = { ...this.options, headers: { ...this.options["headers"], ...headers } }
    options.headers["Content-Type"] = "multipart/form-data"
    this._authorization(options, token)
    return await axios.post(url, formData, { ...options, ...params });
  }
}