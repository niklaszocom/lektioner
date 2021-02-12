import { get } from "./api.js";

const BASE_URL = `https://swapi.dev/api/`;
const STARSHIPS_URL = `${BASE_URL}starships`;

export const getStarshipsList = async () => await get(STARSHIPS_URL);