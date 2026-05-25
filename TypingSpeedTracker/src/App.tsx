import { useMemo, useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import TypingTestPage from "./Components/TypingTestPage";
import TimerData, { FormulaData, UserTypeData } from "./Context/TimerData";
import type { StatFormula } from "./Context/TimerData";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [Timer, setTimer] = useState<number>(60);
  const [duration, setDuration] = useState<number>(60);
  const [startTest, setStartTest] = useState<boolean>(false);
  const [Type, setType] = useState<string>("");
  const [quote, setQuote] = useState<string>("");
  const [level, setLevel] = useState<number>(1);

  const formula: StatFormula = {
    wpm: (chars: number, time: number) =>
      time > 0 ? Math.round(chars / 5 / (time / 60)) : 0,
    accuracy: (correct: number, total: number) =>
      total > 0 ? Math.round((correct / total) * 100) : 100,
    characters: (chars: number) => chars,
    mistakes: (mistakes: number) => mistakes,
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode],
  );

  return (
    <FormulaData.Provider value={formula}>
    <UserTypeData.Provider
      value={{
        Type,
        setType,
        quote,
        setQuote,
        level,
        setLevel,
      }}
    >
      <TimerData.Provider
        value={{
          Timer,
          setTimer,
          duration,
          setDuration,
          startTest,
          setStartTest,
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TypingTestPage darkMode={darkMode} setDarkMode={setDarkMode} />
        </ThemeProvider>
      </TimerData.Provider>
    </UserTypeData.Provider>
    </FormulaData.Provider>
  );
};

export default App;
