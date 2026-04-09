import { createContext, useContext, type SetStateAction } from "react";

interface FlipCoinData {
  turn: boolean;
  setTurn: React.Dispatch<SetStateAction<boolean>>;
  TruthDare: boolean[];
  counting2: CountingCalculate;
  collectionTruthandDare: collectionTD;
}

interface CountingCalculate {
  forbidden: number;
  truth: number;
  total: () => number;
}
interface collectionTD {
    forbidden: number[];
    setForbidden: React.Dispatch<SetStateAction<number[]>>;
    truth: number[];
    setTruth: React.Dispatch<SetStateAction<number[]>>;
}
export const TurnContext = createContext<FlipCoinData | undefined>(undefined);

export function turnContext() {
  const turn = useContext(TurnContext);
  if (turn === undefined) {
    // it is good habit to any inital value handling Error! set!
    throw new Error("UseTurn is undefined set hai!");
  }
  return turn;
}
