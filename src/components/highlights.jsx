import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Highlights = (props) => {
  const [weather, setWeather] = useState(props.weather[0]);

  useEffect(() => {
    setWeather(props.weather[0]);
  }, [props.weather]);

  return (
    <div className="highlights">
      {weather !== undefined && (
<>
      <h2>Today's Highlights</h2>
      <div className="highlight-cards">
        <div className="highlight-card top-card">
          <h3>Wind Status</h3>
          <p>
            {Math.round(weather.wind_speed)}
            <span> mph</span>
            <div className="wind-direction">
              <div className="compass">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{
                    transform: `rotate(${
                      Math.round(weather.wind_direction) - 45
                    }deg)`,
                  }}
                />
              </div>

              <span>{weather.wind_direction_compass}</span>
            </div>
          </p>
        </div>
        <div className="highlight-card top-card">
          <h3>Humidity</h3>
          <p>
            {weather.humidity}
            <span>%</span>
          </p>
          <div className="percentage-display">
            <div className="percentage-numbers">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="percentage-bar">
              <div
                className="bar-filled"
                style={{ width: `${weather.humidity}%` }}
              ></div>
            </div>
            <span className="percent-symbol">%</span>
          </div>
        </div>
        <div className="highlight-card">
          <h3>Visibility</h3>
          <p>
            {Math.round(weather.visibility)}
            <span> miles</span>
          </p>
        </div>
        <div className="highlight-card">
          <h3>Air Pressure</h3>
          <p>
            {weather.air_pressure}
            <span> mb</span>
          </p>
        </div>
      </div>
      </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.setLocation.weather,
  };
};

export default connect(mapStateToProps, {})(Highlights);
