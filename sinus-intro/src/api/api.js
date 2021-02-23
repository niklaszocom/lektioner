const { default: axios } = require("axios");

const BASE_URL = "http://localhost:5000/api/";
const PRODUCTS_URL = `${BASE_URL}products`;
const ORDERS_URL = `${BASE_URL}orders`;
const REGISTER_URL = `${BASE_URL}register`;
const AUTH_URL = `${BASE_URL}auth`;

const get = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const post = async (url, obj) => {
  try {
    const response = await axios.post(url, obj);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const setToken = (token) => {

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export { AUTH_URL, REGISTER_URL, PRODUCTS_URL, ORDERS_URL, get, post, setToken };
