import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const SideBar = ({ cityName, weather }) => {
  const openSearch = () => {
    let search = document.querySelector(".sidebar-search");
    search.classList.add("sidebar-search--open");
  };

  const setWeatherImg = () => {
    const weatherName = weather[0].weather_state_name.replace(/ +/g, "");
    return weatherName;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const splitDate = date.toString().split(" ");
    return `${splitDate[0]}, ${splitDate[2]} ${splitDate[1]}`;
  };

  return (
    <div className="sidebar">
      {weather[0] !== undefined && (
        <>
          <div className="location-btns">
            <button className="search-btn" onClick={openSearch}>
              Search for places
            </button>
            <button className="current-loc-btn">
              <FontAwesomeIcon icon={faLocationArrow} />
            </button>
          </div>
          <div className="weather-icon-cont">
            <img
              src="/assets/Cloud-background.png"
              alt="background clouds"
              className="background-img"
            />
            <img
              src={`/assets/${setWeatherImg()}.png`}
              alt="weather type icon"
              className="weather-icon"
            />
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
              <span>{formatDate(weather[0].applicable_date)}</span>
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
  return {
    cityName: state.setLocation.cityName,
    weather: state.setLocation.weather,
  };
};

export default connect(mapStateToProps, {})(SideBar);
