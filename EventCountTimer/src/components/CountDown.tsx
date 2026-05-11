import { Button } from "@mui/material";
import UserInputs from "./UserInputs";
import { useEventAdd } from "../Context/AddItem";
import { useEffect } from "react";

function CountDown() {
  const context = useEventAdd();
  if (context instanceof Error) return null;
  const { userData, counter, target } = context;

  const randomColorGenerator = () => {
    const RGB = 256 * 256 * 256;
    return (
      "#" +
      Math.floor(Math.random() * RGB)
        .toString(16)
        .padStart(0, "6")
    );
  };
  useEffect(() => {

  },[])
  // useEffect(() => randomColorGenerator,[]);
  // useEffect(() => {
  //   randomColorGenerator();
  // }, []);
  // console.log(target);

  const ConutedDivs = () => {
    return counter.map((_, i) => (
      <div
        key={i}
        className="flex flex-col gap-2 px-8 py-4 border-2 rounded"
        style={{
          backgroundColor: randomColorGenerator(),
          color: "white",
        }}
      >
        <h1 className="text-2xl font-bold">{"Timer Tile"}</h1>
        <h3 className="text-xl">{"category"}</h3>
        <div className="flex gap-6 p-4">
          <p className="border-2 p-2 rounded text-center">
            {target.Day}
            <br />
            day
          </p>
          <p className="border-2 p-2 rounded text-center">
            {target.Hour}
            <br />
            hours
          </p>
          <p className="border-2 p-2 rounded text-center">
            {target.Minute}
            <br />
            minutes
          </p>
          <p className="border-2 p-2 rounded text-center">
            {target.Sec}
            <br />
            seconds
          </p>
        </div>
        <Button variant="contained" color="warning" size="medium" fullWidth>
          Remove
        </Button>
      </div>
    ));
  };

  return (
    <>
      <UserInputs />
      <div className="border-2 gap-6 flex-wrap flex overflow-x-auto justify-center-safe">
        <div
          className="flex flex-col gap-2 px-8 py-4 border-2 rounded"
          style={{
            backgroundColor: randomColorGenerator(),
            color: "white",
          }}
        >
          <h1 className="text-2xl font-bold">{"Timer Tile"}</h1>
          <h3 className="text-xl">{"category"}</h3>
          <div className="flex gap-6 p-4">
            <p className="border-2 p-2 rounded text-center">
              {1}
              <br />
              day
            </p>
            <p className="border-2 p-2 rounded text-center">
              {23}
              <br />
              hours
            </p>
            <p className="border-2 p-2 rounded text-center">
              {58}
              <br />
              minutes
            </p>
            <p className="border-2 p-2 rounded text-center">
              {11}
              <br />
              seconds
            </p>
          </div>
          <Button variant="contained" color="warning" size="medium" fullWidth>
            Remove
          </Button>
        </div>
        <ConutedDivs />
      </div>
    </>
  );
}

export default CountDown;
