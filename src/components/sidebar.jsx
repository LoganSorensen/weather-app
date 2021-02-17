import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import ShowerCloud from "../assets/Shower.png";
import BackgroundImg from "../assets/Cloud-background.png";

const SideBar = () => {
  return (
    <div className="sidebar">
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
            15<span>°C</span>
          </p>
        </div>
        <p className="weather-type">Shower</p>
        <div className="date">
          <span>Today</span>
          <span>•</span>
          <span>Fri, 5 Jun</span>
        </div>
        <div className="location">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Helsinki</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
