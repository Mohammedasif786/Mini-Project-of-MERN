import { useState, useEffect } from "react";
import axios from "axios";
function useWeatherData() {
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [temp, setTemp] = useState<number | null>(null); // done
  const [feelLike, setFeelLike] = useState<number | null>(); // done
  const [humidity, setHumidity] = useState<number>(); // done
  const [icon, setIcon] = useState<string>(""); // done
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [Error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=2b732fe7fcf5481fb8a91507262004&q=${location}&aqi=no`,
        );
        setName(res.data.location.name);
        setLocation(res.data.location.name);
        setCondition(res.data.current.condition.text);
        setTemp(res.data.current.temp_c);
        setFeelLike(res.data.current.feelslike_c);
        setHumidity(res.data.current.humidity);
        setIcon(res.data.current.condition.icon);
        setLoading(false);
      } catch (error) {
        setError("Error fetching weather data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [name, icon]);
  return { name, condition, temp, feelLike, humidity, icon, isLoading, Error };
}
export default useWeatherData;
