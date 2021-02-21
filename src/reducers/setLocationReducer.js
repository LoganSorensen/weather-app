import {
  SET_LOCATION,
  FETCHING_LOCATION_START,
  FETCHING_LOCATION_SUCCESS,
  FETCHING_LOCATION_FAILURE,
  TOGGLE_CELCIUS,
} from "../actions/types";

const inititalState = {
  isLoading: false,
  isCelcius: true,
  weather: [],
  cityName: "",
  error: "",
};

export const setLocation = (state = inititalState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        weather: action.payload.consolidated_weather,
        cityName: action.payload.title,
      };
    case FETCHING_LOCATION_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_LOCATION_SUCCESS:
      return {
        state,
        isLoading: false,
        weather: action.payload.consolidated_weather,
        cityName: action.payload.title,
      };
    case FETCHING_LOCATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case TOGGLE_CELCIUS:
      return {
        ...state, isCelcius: !state.isCelcius
      }
    default:
      return state;
  }
};
