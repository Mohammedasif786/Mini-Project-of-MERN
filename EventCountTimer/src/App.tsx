import { useMemo, useState } from "react";
import CountDown from "./components/CountDown";
import { EventAdd, type EventItem } from "./Context/AddItem";
import { randomColorGenerator } from "./Tools/Tools";

function App() {
  const [events, setEvents] = useState<EventItem[]>([]);

  const value = useMemo(() => {
    return {
      events,
      addEvent: (input: Omit<EventItem, "id">) => {
        setEvents((prev) => {
          const id = prev.length === 0 ? 0 : Math.max(...prev.map((e) => e.id)) + 1;
          return [...prev, { id, ...input }];
        });
      },
      removeEvent: (id: number) => {
        setEvents((prev) => prev.filter((e) => e.id !== id));
      },
    };
  }, [events]);

  // Note: randomColorGenerator is used from UserInputs.
  // Keeping import ensures bundle is consistent if you later move it.
  void randomColorGenerator;

  return <EventAdd.Provider value={value}>{<CountDown />}</EventAdd.Provider>;
}

export default App;

