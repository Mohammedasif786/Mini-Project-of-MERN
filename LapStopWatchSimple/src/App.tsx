import { useMemo, useState } from "react";
import Stopwatch2 from "./components/Stopwatch2";
import { TimeData, type LapEntry, type TimeFomartDisplay } from "./context/timerHandling";

function App() {
  const [elapsed, setElapsed] = useState<number>(0);

  const [isRunning, setIsRunning] = useState<boolean>(false);

  const [laps, setLaps] = useState<LapEntry[]>([]);

  const [startTime, setStartTime] = useState<TimeFomartDisplay | null>(null);

  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [startEngine, setStartEngine] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);
  const [Edits,setEdit] = useState<boolean>(false);

  // const allWorkingData = {
  //   Edits,
  //   setEdit,
  //   elapsed,
  //   setElapsed,
  //   isRunning,
  //   setIsRunning,
  //   laps,
  //   setLaps,
  //   startTime,
  //   setStartTime,
  //   intervalId,
  //   setIntervalId,
  //   startEngine,
  //   setStartEngine,
  //   reset,
  //   setReset,
  // };

  const allWorkingData = useMemo(
  () => ({
    Edits,
    setEdit,
    elapsed,
    setElapsed,
    isRunning,
    setIsRunning,
    laps,
    setLaps,
    startTime,
    setStartTime,
    intervalId,
    setIntervalId,
    startEngine,
    setStartEngine,
    reset,
    setReset,
  }),
  [
    Edits,
    elapsed,
    isRunning,
    laps,
    startTime,
    intervalId,
    startEngine,
    reset,
  ]
);
  return (
    <TimeData.Provider value={allWorkingData}>
      <Stopwatch2 />
    </TimeData.Provider>
  );
}

export default App;
