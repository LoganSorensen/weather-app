import axios from "axios";

export const weatherAPI = () => {
  return axios.create({
    baseURL: "https://weather-app-proxy-server.herokuapp.com/",
    // 'http://localhost:5000'
    // "https://tranquil-bayou-42049.herokuapp.com/https://www.metaweather.com/api/",
  });
};
