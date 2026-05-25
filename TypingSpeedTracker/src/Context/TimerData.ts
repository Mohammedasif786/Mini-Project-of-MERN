import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

interface TimerContextType {
  Timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
  startTest: boolean;
  setStartTest: Dispatch<SetStateAction<boolean>>;
}

interface UserInputdata {
  level: number;
  setLevel: Dispatch<SetStateAction<number>>;
  Type: string;
  setType: Dispatch<SetStateAction<string>>;
  quote: string;
  setQuote: Dispatch<SetStateAction<string>>;
}

export interface StatFormula {
  wpm: (chars: number, time: number) => number;
  accuracy: (correct: number, total: number) => number;
  characters: (chars: number) => number;
  mistakes: (mistakes: number) => number;
}

const TimerData = createContext<TimerContextType | undefined>(undefined);
export const UserTypeData = createContext<UserInputdata | undefined>(undefined);
export const FormulaData = createContext<StatFormula | undefined>(undefined);

export function useFormula() {
  const hold = useContext(FormulaData);
  if (!hold) {
    throw new Error("useFormula must be used within a FormulaData provider");
  }
  return hold;
}

export function useUserInput() {
  const hold = useContext(UserTypeData);
  if (!hold) {
    throw new Error("useUserInput must be used within a UserTypeData provider");
  }
  return hold;
}

export function useTimer() {
  const context = useContext(TimerData);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
}

export function useTypingMetrics() {
  const { Type, quote } = useUserInput();
  const { Timer, duration } = useTimer();
  const { wpm, accuracy, characters, mistakes } = useFormula();
  const characterCount = Type.length;
  const mistakeCount = quote
    ? Type.split("").filter((char, index) => char !== quote[index]).length
    : 0;
  const correctCharacters = Math.max(characterCount - mistakeCount, 0);
  const elapsedSeconds = duration - Timer;

  return {
    wpmScore: wpm(correctCharacters, elapsedSeconds),
    accuracyScore: accuracy(correctCharacters, characterCount),
    characterCount: characters(characterCount),
    mistakeCount: mistakes(mistakeCount),
  };
}

export default TimerData;
