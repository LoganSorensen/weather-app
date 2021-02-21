import { useEffect } from "react";
import { connect } from "react-redux";

import SideBar from "./components/sidebar";
import SideBarSearch from "./components/sideBarSearch";
import FiveDayForecast from "./components/fiveDayForecast";
import Highlights from "./components/highlights";

import { setLocation, toggleCelcius } from "./actions/setLocationActions";
import { weatherAPI } from "./utils/weatherAPI";

import "./styles/index.css";

function App(props) {
  useEffect(() => {
    weatherAPI()
      .get("location/44418/")
      .then((res) => {
        props.setLocation(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeTemp = (e) => {
    if (e.target.className === "") {
      props.toggleCelcius();
    }
  };

  console.log('celcius',props.isCelcius)

  return (
    <div className="App">
      <SideBar />
      <SideBarSearch />
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
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    isCelcius: state.setLocation.isCelcius,
  };
};

export default connect(mapStateToProps, { setLocation, toggleCelcius })(App);
