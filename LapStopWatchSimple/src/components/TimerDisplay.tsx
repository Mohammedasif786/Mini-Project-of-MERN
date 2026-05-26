import { useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import {
  useDataHandler,
  type TimeFomartDisplay,
} from "../context/timerHandling";

type TimerDisplayProps = {
  displayTime: TimeFomartDisplay;
};

export default function TimerDisplay({ displayTime }: TimerDisplayProps) {
  const { startTime, setStartTime, isRunning  } =
    useDataHandler(displayTime);
  const { Hour, Minute, Second, nanoSec } = startTime ?? displayTime;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStartTime((prev) => {
        const current = prev ?? displayTime;
        const { Hour, Minute, Second, nanoSec } = current;

        if (Hour === 59 && Minute === 59 && Second === 59 && nanoSec === 99) {
          return { Hour: 0, Minute: 0, Second: 0, nanoSec: 0 };
        }

        const nextNano = nanoSec + 1;
        const nextSecond = nextNano > 99 ? Second + 1 : Second;
        const nextMinute = nextSecond > 59 ? Minute + 1 : Minute;
        const nextHour = nextMinute > 59 ? Hour + 1 : Hour;

        if (!isRunning) {
          return { Hour, Minute, Second, nanoSec };
        }

        return {
          Hour: nextHour > 59 ? 0 : nextHour,
          Minute: nextMinute > 59 ? 0 : nextMinute,
          Second: nextSecond > 59 ? 0 : nextSecond,
          nanoSec: nextNano > 99 ? 0 : nextNano,
        };
      });
    }, 10);

    return () => window.clearInterval(interval);
  }, [displayTime, isRunning, setStartTime]);

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 3,
        border: "1px solid rgba(255, 255, 255, 0.45)",
        py: 2,
        textAlign: "center",
        mb: 3,
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Courier New', monospace",
          fontWeight: 700,
          fontSize: "2.4rem",
          color: "#f8fafc",
          letterSpacing: "0.1em",
        }}
      >
        {`${Hour.toString().padStart(2, "0")}:${Minute.toString().padStart(
          2,
          "0",
        )}:${Second.toString().padStart(2, "0")}:${nanoSec
          .toString()
          .padStart(2, "0")}`}
      </Typography>
    </Paper>
  );
}
