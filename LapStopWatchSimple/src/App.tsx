import { useState } from "react";
import Stopwatch2 from "./components/Stopwatch2";
import { TimeData, type LapEntry, type TimeFomartDisplay } from "./context/timerHandling";

function App() {
  const [elapsed, setElapsed] = useState<number>(0);

  const [isRunning, setIsRunning] = useState<boolean>(false);

  const [laps, setLaps] = useState<LapEntry[]>([]);

  const [startTime, setStartTime] = useState<TimeFomartDisplay | null>(null);

  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [startEngine, setStartEngine] = useState<boolean>(false);

  const allWorkingData = {
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
  };

  return (
    <TimeData.Provider value={allWorkingData}>
      <Stopwatch2 />
    </TimeData.Provider>
  );
}

export default App;
