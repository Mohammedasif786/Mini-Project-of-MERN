import { createContext, useContext, type SetStateAction } from "react";

interface FlipCoinData {
  turn: boolean;
  setTurn: React.Dispatch<SetStateAction<boolean>>;
  TruthDare: boolean[];
}
export const TurnContext = createContext<FlipCoinData | undefined>(undefined);

export function turnContext() {
  const turn = useContext(TurnContext);
  if(turn === undefined) {
    throw new Error("UseTurn is undefined set hai!");
  }
  return turn;
}
