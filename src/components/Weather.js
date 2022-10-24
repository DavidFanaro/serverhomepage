import { useEffect, useState } from "react";
import React from "react";

export const Weather = () => {
  const [weatherData, setweatherData] = useState();
  const getLocalWeather = async () => {
    navigator.geolocation.getCurrentPosition(async (i) => {
      try {
        const req = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${i.coords.latitude}&lon=${i.coords.longitude}&exclude=daily&units=imperial&appid=a38f2282e0caf24cf27b053e5b6c40a0`
        );
        const data = await req.json();
        setweatherData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    });
  };

  useEffect(() => {
    getLocalWeather();
  }, []);

  // return <div>{weather ? weather.description : "error"}</div>;
  return (
    <div>
      {weatherData ? (
        <div className="flex items-center justify-center gap-2">
          <div>
            {weatherData.weather[0].description.replace(/\b\w/g, (c) =>
              c.toUpperCase()
            )}
          </div>
          <div>{`${Math.round(weatherData.main.temp)}℉`}</div>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather png"
          />
        </div>
      ) : (
        "Error"
      )}
    </div>
  );
};
