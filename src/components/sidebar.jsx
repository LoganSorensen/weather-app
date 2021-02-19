import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import ShowerCloud from "../assets/Shower.png";
import BackgroundImg from "../assets/Cloud-background.png";

const SideBar = ({ cityName, weather }) => {
  return (
    <div className="sidebar">
      {weather[0] !== undefined && (
        <>
          <div className="location-btns">
            <button className="search-btn">Search for places</button>
            <button className="current-loc-btn">
              <FontAwesomeIcon icon={faLocationArrow} />
            </button>
          </div>
          <div className="weather-icon-cont">
            <img src={BackgroundImg} alt="" className="background-img" />
            <img src={ShowerCloud} alt="" className="weather-icon" />
          </div>
          <div className="weather-info">
            <div className="temperature">
              <p>
                {Math.round(weather[0].the_temp)}
                <span>°C</span>
              </p>
            </div>
            <p className="weather-type">{weather[0].weather_state_name}</p>
            <div className="date">
              <span>Today</span>
              <span>•</span>
              <span>{weather[0].applicable_date}</span>
            </div>
            <div className="location">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>{cityName}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    cityName: state.setLocation.cityName,
    weather: state.setLocation.weather,
  };
};

export default connect(mapStateToProps, {})(SideBar);
