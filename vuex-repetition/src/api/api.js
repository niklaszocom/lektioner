import axios from "axios";

const get = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { get };
