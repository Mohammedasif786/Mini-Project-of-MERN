import { createContext, useContext, type Dispatch, type SetStateAction } from "react";
export interface LapEntry {
  id: number;
  label: string;
  lapTime: string;
  totalTime: string;
}

export interface TimeFomartDisplay {
  nanoSec: number;
  Second: number;
  Minute: number;
  Hour: number;
}

export interface TimeContextType {
  Edits: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  elapsed: number;
  setElapsed: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  startEngine: boolean;
  setStartEngine: React.Dispatch<React.SetStateAction<boolean>>;
  laps: LapEntry[];
  setLaps: React.Dispatch<React.SetStateAction<LapEntry[]>>;
  startTime: TimeFomartDisplay | null;
  setStartTime: React.Dispatch<React.SetStateAction<TimeFomartDisplay | null>>;
  intervalId: number | null;
  setIntervalId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const TimeData = createContext<TimeContextType | null>(null);

export function useDataHandler(p0: { nanoSec: number; Second: number; Minute: number; Hour: number; }) {
  const context = useContext(TimeData);
  if (!context) {
    throw new Error("useDataHandler must be used within a TimeDataProvider");
  }
  return context;
}
