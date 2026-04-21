import SearchCity from "./components/SearchCity";
import Main from "./components/Main";
import { useState } from "react";
import { CityName } from "./context/LocationFinder";
import LoadingScript from "./components/LoadingScript";
import useWeatherData from "./Api/WeatherData";

function App() {
  const [City, setCity] = useState<string>("");
  const { isLoading } = useWeatherData();

  return (
    <CityName.Provider value={{ City, setCity }}>
      <div className="grid place-items-center h-screen">
        <div className="flex flex-col items-center gap-10">
          <h1 className=" text-blue-500 font-tertiary font-bold tracking-wide ease-in duration-300 text-4xl">
            Weather App - Md Asif
          </h1>
          {!isLoading ? <SearchCity /> : <LoadingScript />}
          <Main />
        </div>
      </div>
    </CityName.Provider>
  );
}

export default App;
