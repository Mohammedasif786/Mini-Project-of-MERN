import { createContext, useContext } from "react";
import type { FormatType } from "../types/format";

interface UiContextType {
  inputValue: string;
  setInputValue: (value: string) => void;
  fromFormat: FormatType;
  setFromFormat: (format: FormatType) => void;
  toFormat: FormatType;
  setToFormat: (format: FormatType) => void;
  //   result: string;
  //   setResult: (result: string) => void;
  //   error: string;
  //   setError: (error: string) => void;
}

export const UiContext = createContext<UiContextType>({
  inputValue: "",
  setInputValue: () => {},
  fromFormat: "binary",
  setFromFormat: () => {},
  toFormat: "decimal",
  setToFormat: () => {},
  //   result: "",
  //   setResult: () => {},
  //   error: "",
  //   setError: () => {},
});

export function userUIContext() {
  const hold = useContext(UiContext);
  if (!hold) {
    throw new Error("useUIContext must be used within a UiProvider");
  }
  return hold;
}
