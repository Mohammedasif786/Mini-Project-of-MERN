import { useState } from "react";
import CountDown from "./components/CountDown";
import { EventAdd } from "./Context/AddItem";

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

function App() {
  const [counter, setCounter] = useState<number[]>([]);
  const [userData, setUserDate] = useState<UserWants>({
    Title: "",
    Target: "",
    Category: null,
  }); // user input date!
  const [target, setTarget] = useState<TimeFormat>({
    Day: 0,
    Hour: 0,
    Minute: 0,
    Sec: 0,
  });

  return (
    <EventAdd.Provider
      value={{ counter, setCounter, userData, setUserDate, target, setTarget }}
    >
      <CountDown />
    </EventAdd.Provider>
  );
}

export default App;
