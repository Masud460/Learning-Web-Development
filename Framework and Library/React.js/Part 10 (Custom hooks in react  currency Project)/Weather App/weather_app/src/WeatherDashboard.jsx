import { React, useState, useEffect, useCallback } from "react";
import useWeatherApp from "./hooks/useWeatherApp.js";

export default function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [temp_C, setTemp_C] = useState(0);
  const [temp_F, setTemp_F] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [cloud, setCloud] = useState(0);
  const [sky, setSky] = useState("");
  const [isOn, setIsOn] = useState(false);
  const [isDisplay, setIsDisplay] = useState("hidden");
  const weatherData = useWeatherApp(city);
  const runWeather = () => {
    // Display Error
    if (!weatherData && city) {
      setIsDisplay("block");
    } else {
      setIsDisplay("hidden");
    }

    setTemp_C(weatherData["temp_c"]);
    setTemp_F(weatherData["temp_f"]);
    setHumidity(weatherData["humidity"]);
    setCloud(weatherData["cloud"]);
    setCityName(city);

  };

  // set sky
  useEffect(() => {
    switch (true) {
      case cloud == 0:
        setSky("Search city");
        break;
      case cloud <= 25:
        setSky("Sunny");
        break;
      case cloud <= 87:
        setSky("Mostly Cloudy");
        break;
      case cloud <= 100:
        setSky("Overcast");
        break;
      default:
        setSky("Search city");
        break;
    }
  }, [cloud]);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#212121] ">
      {/* gradiant : bg-gradient-to-r from-blue-400 to-teal-300 */}
      {/* Weather Card */}
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 w-80 text-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-white mb-4">
          🌤️ Weather Dashboard
        </h1>

        {/* Search Section */}
        <form
          className="flex items-center gap-2 mb-4"
          onSubmit={(e) => {
            e.preventDefault();
            runWeather();
          }}
        >
          <input
            id="userInput"
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-3 py-2 rounded-lg outline-none border border-white/40 focus:ring-2 focus:ring-blue-500 text-white"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            Search
          </button>
        </form>

        {/* Weather Info Section */}
        <div className="space-y-2 mb-4">
          <h2 className="text-xl font-semibold text-white">
            Weather in {cityName}
          </h2>
          <p className="text-lg text-white">🌥️ {sky}</p>
          <p className="text-3xl font-bold text-white">
            🌡️ {isOn ? temp_F : temp_C} °{isOn ? "F" : "C"}
          </p>
          <p className="text-white">💧 Humidity: {humidity}%</p>
        </div>

        {/* Toggle Section */}
        <button
          onClick={handleToggle}
          className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition"
        >
          Switch to °{isOn ? "C" : "F"}
        </button>

        {/* Error Message */}
        <p className={`mt-3 text-white text-sm ${isDisplay}`}>
          ❌ City not found!
        </p>
      </div>
    </div>
  );
}
