import axios from "axios";

// const baseUrl = `https://tranquil-bayou-42049.herokuapp.com/`;

export const weatherAPI = () => {
  return axios.create({
    baseURL:
      "https://tranquil-bayou-42049.herokuapp.com/https://www.metaweather.com/api/",
  });
};
// const hitAPI = () => {
//   axios
//     .get(`${baseUrl}https://www.metaweather.com/api/location/44418/`)
//     .then((res) => {
//       console.log(res.data);
//       setLocation(res.data);
//     })
//     .catch((err) => console.log(err));
// };
