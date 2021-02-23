import { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import SideBar from "./components/sidebar";
import SideBarSearch from "./components/sideBarSearch";
import FiveDayForecast from "./components/fiveDayForecast";
import Highlights from "./components/highlights";

import {
  setLocation,
  toggleCelcius,
  fetchLocation,
} from "./actions/setLocationActions";
import { weatherAPI } from "./utils/weatherAPI";

import "./styles/index.css";

function App(props) {
  const success = (position) => {
    const latitude = Math.round(position.coords.latitude * 100) / 100;
    const longitude = Math.round(position.coords.longitude * 100) / 100;

    weatherAPI()
      .get(`location/search/?lattlong=${latitude},${longitude}`)
      .then((res) => {
        props.fetchLocation(res.data[0].woeid);
      })
      .catch((err) => console.log(err));
  };

  const error = (error) => {
    console.log(error);
    weatherAPI()
      .get("location/44418/")
      .then((res) => {
        props.setLocation(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  const changeTemp = (e) => {
    if (e.target.className === "") {
      props.toggleCelcius();
    }
  };

  return (
    <div className="App">
      <SideBar />
      <SideBarSearch />
      {props.isLoading ? (
        <div className="loader">
          <Loader
            type="RevolvingDot"
            color="#e7e7e7"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      ) : (
        <div className="forecast-and-highlights">
          <div className="temp-btns">
            <button
              className={props.isCelcius === true ? "temp-btn--active" : ""}
              value="C"
              onClick={changeTemp}
            >
              °C
            </button>
            <button
              className={props.isCelcius === false ? "temp-btn--active" : ""}
              value="F"
              onClick={changeTemp}
            >
              °F
            </button>
          </div>
          <FiveDayForecast />
          <Highlights />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isCelcius: state.setLocation.isCelcius,
    isLoading: state.setLocation.isLoading,
  };
};

export default connect(mapStateToProps, {
  setLocation,
  toggleCelcius,
  fetchLocation,
})(App);
