import {
  SET_LOCATION,
  FETCHING_LOCATION_START,
  FETCHING_LOCATION_SUCCESS,
  FETCHING_LOCATION_FAILURE,
  TOGGLE_CELCIUS,
} from "./types";
import { weatherAPI } from "../utils/weatherAPI";

export const setLocation = (location) => {
  return { type: SET_LOCATION, payload: location };
};

export const fetchLocation = (woeid) => (dispatch) => {
  dispatch({ type: FETCHING_LOCATION_START });
  weatherAPI()
    .get(`?urlExtension=location/${woeid}/`)
    .then((res) => {
      dispatch({ type: FETCHING_LOCATION_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCHING_LOCATION_FAILURE, payload: err });
    });
};

export const toggleCelcius = () => {
  return { type: TOGGLE_CELCIUS };
};
