import { useState, useEffect } from "react";

export default function useWeatherApp(city) {
    const [data, setData] = useState({})
  const key = "09343958475b46b59dc181313252108";
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`;
  useEffect(() => {
      fetch(url)
          .then((res) => res.json())
            .then(res => setData(res["current"]))
  }, [city]);
    return data
}
