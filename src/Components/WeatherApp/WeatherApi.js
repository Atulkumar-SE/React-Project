import axios from "axios";
import React, { useEffect, useState } from "react";
import "./WeatherApi.css";

const WeatherApi = () => {
  const apikey = "c3ea22d0ade3a22411284df60b06c6e3";
  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState("");
  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apikey;

    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const handleChange = (e) => {
    // console.log("value", e.target.value);
    setInputCity(e.target.value);
  };
  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  return (
    <div className="col-md-12 weatherContainer">
      <div className="WeatherBg">
        <h1>Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-5 mb-5">
          <input
            type="text"
            placeholder="Enter your city"
            className="form-control"
            value={inputCity}
            onChange={handleChange}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
       

        {Object.keys(data).length > 0 && (
          <div className="col-md-12 text-center mt-5 mb-5">
            <div className="tempBox">
              <img
                className="weatherIcon"
                src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
                alt="icon"
              />
              <h5 className="City">{data?.name}</h5>
              <h6 className="Temp">
                {(data?.main?.temp - 273.15).toFixed(2)}°C
              </h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApi;
