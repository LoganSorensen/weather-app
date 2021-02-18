import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import ShowerCloud from "../assets/Shower.png";
import BackgroundImg from "../assets/Cloud-background.png";

const SideBar = ({ location }) => {
//   let { consolidated_weather } = location;

//   console.log(location === {})

  return (

        <div className="sidebar">
      {location !== null && (
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
                {Math.round(location.consolidated_weather[0].the_temp)}
                <span>°C</span>
              </p>
            </div>
            <p className="weather-type">
              {location.consolidated_weather[0].weather_state_name}
            </p>
            <div className="date">
              <span>Today</span>
              <span>•</span>
              <span>{location.consolidated_weather[0].applicable_date}</span>
            </div>
            <div className="location">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>{location.title}</span>
            </div>
          </div>
          </>
      )}
        </div>
   
  );
};

export default SideBar;
