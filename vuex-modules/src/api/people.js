import { get } from "./api.js";

const BASE_URL = `https://swapi.dev/api/`;
const PEOPLE_URL = `${BASE_URL}people`;

export const getPeopleList = async () => await get(PEOPLE_URL);