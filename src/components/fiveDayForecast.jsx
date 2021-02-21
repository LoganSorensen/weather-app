import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const FiveDayForecast = (props) => {
  const [forecast, setForecast] = useState(props.weather);

  useEffect(() => {
    setForecast(props.weather);
  }, [props.weather]);

  const setWeatherImg = (weather) => {
    const weatherName = weather.weather_state_name.replace(/ +/g, "");
    return weatherName;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const splitDate = date.toString().split(" ");
    return `${splitDate[0]}, ${splitDate[2]} ${splitDate[1]}`;
  };

  const setTemp = (temp) => {
    if (props.isCelcius === true) {
      return Math.round(temp);
    } else {
      return Math.round((temp * 9) / 5 + 32);
    }
  };

  return (
    <div className="forecast">
      {forecast.map((weather) => {
        if (weather !== forecast[0]) {
          setWeatherImg(weather);
          return (
            <div className="weather-card" key={weather.id}>
              <div>
                <span className="day-of-week">
                  {formatDate(weather.applicable_date)}
                </span>
                <img
                  src={`/assets/${setWeatherImg(weather)}.png`}
                  alt="weather type icon"
                />
              </div>
              <div className="temperatures">
                <span>
                  {setTemp(weather.max_temp)}
                  {props.isCelcius === true ? "°C" : "°F"}
                </span>
                <span className="min-temp">
                  {setTemp(weather.min_temp)}
                  {props.isCelcius === true ? "°C" : "°F"}
                </span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.setLocation.weather,
    isCelcius: state.setLocation.isCelcius,
  };
};

export default connect(mapStateToProps, {})(FiveDayForecast);
