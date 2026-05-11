import React, { createContext, useContext, type SetStateAction } from "react";

interface UserWants {
  Title: string;
  Target: string;
  Category: "Meeting" | "Interview" | "Party" | "Others" | null;
}
interface TimeFormat {
  Day: number;
  Hour: number;
  Minute: number;
  Sec: number;
}

interface counterApp {
  counter: number[];
  setCounter: React.Dispatch<SetStateAction<number[]>>;
  userData: UserWants;
  setUserDate: React.Dispatch<SetStateAction<UserWants>>;
  target: TimeFormat;
  setTarget: React.Dispatch<SetStateAction<TimeFormat>>;
}

export const EventAdd = createContext<counterApp | null>(null);

export function useEventAdd() {
  const hold = useContext(EventAdd);
  if (hold === null) return new Error("Please Add the new Events");
  return hold;
}
