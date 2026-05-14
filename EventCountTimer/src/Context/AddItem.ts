import { createContext, useContext } from "react";

export type Category = "Meeting" | "Interview" | "Party" | "Others";

export interface EventItem {
  id: number;
  title: string;
  targetISO: string; // ISO string produced from <input type="date" />
  category: Category;
  color: string;
}

interface EventContextValue {
  events: EventItem[];
  addEvent: (input: Omit<EventItem, "id">) => void;
  removeEvent: (id: number) => void;
}

export const EventAdd = createContext<EventContextValue | null>(null);

export function useEventAdd() {
  const hold = useContext(EventAdd);
  if (hold === null) return new Error("Please Add the new Events");
  return hold;
}

