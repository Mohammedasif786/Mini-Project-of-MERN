import { useState, useEffect } from "react";
import axios from "axios";
import { useCityName } from "../context/LocationFinder";

interface NameWithRegion {
  name: string;
  region: string;
}

function useWeatherData() {
  const cityDataOrError = useCityName();
  const [name, setName] = useState<NameWithRegion>();
  // const [location, setLocation] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [temp, setTemp] = useState<number | null>(null);
  const [feelLike, setFeelLike] = useState<number | null>();
  const [humidity, setHumidity] = useState<number>();
  const [wind, setWind] = useState<number>();
  const [icon, setIcon] = useState<string>("");
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (cityDataOrError instanceof Error) {
      setErrorMsg(cityDataOrError.message);
      setLoading(false);
      return;
    }

    const { City } = cityDataOrError;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=2b732fe7fcf5481fb8a91507262004&q=${City}&aqi=no`,
        );
        setName({
          name: res.data.location.name,
          region: res.data.location.region,
        });
        setCondition(res.data.current.condition.text);
        setTemp(res.data.current.temp_c);
        setFeelLike(res.data.current.feelslike_c);
        setHumidity(res.data.current.humidity);
        setWind(res.data.current.wind_kph);
        setIcon(res.data.current.condition.icon);
        setErrorMsg("");
      } catch (error) {
        setErrorMsg("Error fetching weather data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [cityDataOrError]);

  return {
    name,
    condition,
    feelLike,
    temp,
    wind,
    humidity,
    icon,
    isLoading,
    Error: errorMsg,
  };
}

export default useWeatherData;
