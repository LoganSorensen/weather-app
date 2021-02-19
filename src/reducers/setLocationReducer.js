import { SET_LOCATION } from "../actions/types";

const inititalState = {
  weather: [],
  cityName: "",
};

export const setLocation = (state = inititalState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        weather: action.payload.consolidated_weather,
        cityName: action.payload.title,
      };
    default:
      return state;
  }
};
