import { useState } from "react";
import ConverterCard from "./Components/ConverterCard";
import { UiContext } from "./context/UiContext";
import type { FormatType } from "./types/format";

// Hold global state
// Pass props to child components
// Connect UI with logic

function App() {
  const [inputValue, setInputValue] = useState("");
  const [fromFormat, setFromFormat] = useState<FormatType>("binary");
  const [toFormat, setToFormat] = useState<FormatType>("decimal");
  // const [result, setResult] = useState("");
  // const [error, setError] = useState("");

  return (
    <UiContext.Provider
      value={{
        fromFormat,
        setFromFormat,
        toFormat,
        setToFormat,
        inputValue,
        setInputValue,
      }}
    >
      <div className="grid h-252.2 place-items-center bg-linear-to-r from- to-green-400">
        <ConverterCard />
      </div>
    </UiContext.Provider>
  );
}

export default App;
