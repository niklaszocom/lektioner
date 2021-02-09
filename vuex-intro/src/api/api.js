const BASE_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = `${BASE_URL}people`;

const getRequest = async (url) => {
  try {
    const response = await fetch(url);

    const data = response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};


export { getRequest, BASE_URL, PEOPLE_URL };