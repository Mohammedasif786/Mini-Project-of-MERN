import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

interface CityData {
  City: string | undefined;
  setCity: Dispatch<SetStateAction<string>>;
}
export const CityName = createContext<CityData | undefined>(undefined);

export function useCityName() {
  const hold = useContext(CityName);
  if (hold === undefined) return new Error("Give the City name Propely!");
  return hold;
}
