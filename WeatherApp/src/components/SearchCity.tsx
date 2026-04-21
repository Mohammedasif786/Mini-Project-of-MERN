// import { useState } from "react";
import { useCityName } from "../context/LocationFinder";
//import useWeatherData from "../Api/WeatherData";

function SearchCity() {
  const setCity  = useCityName();

  if (!(setCity instanceof Error)) {
    console.error("It hits Error! ⚠");
    return null;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search city"
        className="w-80 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 text-lg font-medium text-gray-700"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchCity;
