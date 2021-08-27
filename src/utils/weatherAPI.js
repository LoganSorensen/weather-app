import axios from "axios";

export const weatherAPI = () => {
  return axios.create({
    baseURL: "https://weather-app-proxy-server.herokuapp.com/",
  });
};
