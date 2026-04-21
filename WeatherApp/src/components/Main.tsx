import { Stack } from "@mui/material";
import useWeatherData from "../Api/WeatherData";

function Main() {
  const { name, condition, temp, wind, icon } = useWeatherData();
  const fullY = new Date();
  const LongDate = fullY.toLocaleDateString("en-GB", {
    weekday: "long",
    month: "long",
    year: "numeric",
  });
  return (
    <div>
      <Stack
        direction={"column"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <p className="text-3xl font-semibold">
          {name?.name},&nbsp;{name?.region}
        </p>
        <h3 className="text-lg font-medium text-gray-500">{LongDate}</h3>
        <div className="flex gap-2 border rounded-2xl p-4 shadow-xl items-center">
          <img src={icon} height={200} width={100} alt="" />
          <p className="text-2xl font-bold">
            {temp}&nbsp;
            <sup style={{ fontSize: "20px", color: "green" }}>o</sup>C
          </p>
        </div>
        <p className="font-bold text-gray-700 text-lg">
          {condition.toUpperCase()}
        </p>
        <h2 className="font-bold text-lg text-green-700">
          {" "}
          Wind Speed: {wind}/km
        </h2>
      </Stack>
    </div>
  );
}

export default Main;
