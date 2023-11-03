import React, { useState } from "react";
import CityDropDown from "./components/CityDropDown"
import WeatherDetails from "./components/WeatherDetails"
import { API_KEY, API_URL } from "./util/API";
function App() {
  console.log("API KEY ", API_KEY, "API URL ", API_URL);

  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null)

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value)
  }

  const getWeatherData = () => {
    const getData = `${API_URL}?key=${API_KEY}&q=${selectedCity}&aqi=no?`

    fetch(getData)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("ERROR FETCHING DATA", error));
  };

  const clearWeatherData = () => {
    setSelectedCity('');
    setWeatherData(null);
  };
  return (
    <div className="container">
      <h1 className="mt-4">Weather App</h1>
      <h4 className="mt-4">This app will display the weather details of the city you choose from the dropdown</h4>
      <div className="city-drop-down">
        <CityDropDown
          selectedCity={selectedCity}
          onCityChange={handleCityChange}
          getCity={getWeatherData}
          weatherData={weatherData}
        />
      </div>
      <div className="weather-details">
        <WeatherDetails selectedCity={selectedCity} onClear={clearWeatherData} weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
