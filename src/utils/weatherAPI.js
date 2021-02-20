import axios from "axios";

export const weatherAPI = () => {
  return axios.create({
    baseURL:
      "https://tranquil-bayou-42049.herokuapp.com/https://www.metaweather.com/api/",
  });
};
