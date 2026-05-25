import { Box } from "@mui/material";
import { useState } from "react";

import Header from "./Header";
import ControlPanel from "./ControlPanel";
import TypingStats from "./TypingStats";
import TextDisplay from "./TextDisplay";
import TypingArea from "./TypingArea";
import ResultModal from "./ResultModal";
import { useTimer, useTypingMetrics, useUserInput } from "../Context/TimerData";

interface TypingTestPageProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const TypingTestPage = ({ darkMode, setDarkMode }: TypingTestPageProps) => {
  const [closedResultKey, setClosedResultKey] = useState("");
  const { Timer } = useTimer();
  const { Type, quote } = useUserInput();
  const { wpmScore, accuracyScore, characterCount, mistakeCount } =
    useTypingMetrics();
  const completedQuote = quote.length > 0 && Type.length >= quote.length;
  const timeExpired = Timer === 0 && Type.length > 0;
  const resultReady = completedQuote || timeExpired;
  const resultKey = `${quote}-${Type.length}-${Timer}`;
  const openModal = resultReady && closedResultKey !== resultKey;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: darkMode ? "#111827" : "#f8fafc",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <Header
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          p: {
            xs: 2,
            md: 4,
          },
        }}
      >
        <ControlPanel />

        <TypingStats />

        <TextDisplay />

        <TypingArea />
      </Box>

      <ResultModal
        open={openModal}
        onClose={() => setClosedResultKey(resultKey)}
        wpmScore={wpmScore}
        accuracyScore={accuracyScore}
        characterCount={characterCount}
        mistakeCount={mistakeCount}
      />
    </Box>
  );
};

export default TypingTestPage;
