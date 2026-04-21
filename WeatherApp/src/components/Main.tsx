import { Stack } from "@mui/material";
import useWeatherData from "../Api/WeatherData";

function Main() {
  const { name, condition, temp, wind, icon } = useWeatherData();
  const fullY = new Date();
  const LongDate = fullY.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      year: 'numeric'
  })
  return (
    <div>
      <Stack direction={"column"} gap={2}>
        <p>{name?.name},&nbsp;{name?.region}</p>
        <h3>
          {LongDate}
        </h3>
        <div className="flex gap-2">
          <img src={icon} alt="" />
          <p>{temp}&nbsp;<sup>o</sup>C</p>
        </div>
        <p>{condition}</p>
        <h2> Wind Speed: {wind}</h2>
      </Stack>
    </div>
  );
}

export default Main;
