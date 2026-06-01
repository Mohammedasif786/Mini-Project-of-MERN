import { Box, Button } from "@mui/material";
import { useDataHandler } from "../context/timerHandling";

type ControlBtnsProps = {
  buttons: string[];
  onAction?: (label: string) => void;
};

export default function ControlBtns({
  buttons,
  onAction = () => {},
}: ControlBtnsProps) {
  let dummy = { Hour: 0, Minute: 0, Second: 0, nanoSec: 0 };
  const {
    setIsRunning,
    setStartEngine,
    startEngine,
    startTime,
    setLaps,
    laps,
    setReset
  } = useDataHandler(dummy);
  const currentTime = {
    Hour: startTime?.Hour ?? 0,
    Minute: startTime?.Minute ?? 0,
    Second: startTime?.Second ?? 0,
    nanoSec: startTime?.nanoSec ?? 0,
  };

  const formatTime = (time: typeof currentTime) =>
    `${time.Hour.toString().padStart(2, "0")}:
${time.Minute.toString().padStart(2, "0")}:
${time.Second.toString().padStart(2, "0")}:
${time.nanoSec.toString().padStart(2, "0")}`.replace(/\s+/g, "");

  const parseTime = (timeString: string) => {
    const [Hour = "0", Minute = "0", Second = "0", nanoSec = "0"] =
      timeString.split(":");
    return {
      Hour: Number(Hour) || 0,
      Minute: Number(Minute) || 0,
      Second: Number(Second) || 0,
      nanoSec: Number(nanoSec) || 0,
    };
  };

  const toCentiseconds = ({
    Hour,
    Minute,
    Second,
    nanoSec,
  }: typeof currentTime) =>
    Hour * 360000 + Minute * 6000 + Second * 100 + nanoSec;

  const fromCentiseconds = (value: number): typeof currentTime => {
    const normalized = Math.max(0, value);
    const Hour = Math.floor(normalized / 360000);
    const remainder = normalized % 360000;
    const Minute = Math.floor(remainder / 6000);
    const remainder2 = remainder % 6000;
    const Second = Math.floor(remainder2 / 100);
    const nanoSec = remainder2 % 100;
    return { Hour, Minute, Second, nanoSec };
  };

  const totalTimeString = formatTime(currentTime);
  const previousTotalTimeString =
    laps.length > 0 ? laps[laps.length - 1].totalTime : "00:00:00:00";
  const lapTimeString = formatTime(
    fromCentiseconds(
      toCentiseconds(currentTime) -
        toCentiseconds(parseTime(previousTotalTimeString)),
    ),
  );

  const AllLabels = (lableN: number) => {
    switch (buttons[lableN]) {
      case "Start":
        setStartEngine(true);
        setIsRunning(true);
        setReset(false);
        break;

      case "Pause":
        setIsRunning((prev) => !prev);
        break;

      case "Lap":
        const id = laps.length;
        setLaps((prev) => [
          ...prev,
          {
            id: id + 1,
            label: `Label ${id}`,
            lapTime: lapTimeString,
            totalTime: totalTimeString,
          },
        ]);
        break;

      case "Reset":
        setLaps([]);
        setStartEngine(false);
        setIsRunning(false);
        setReset(true);
        break;

      default:
        break;
    }
  };
  return (
    <Box className="flex gap-2">
      {buttons.map((label, index) => (
        <Button
          key={label}
          variant="contained"
          disableElevation
          disabled={startEngine && label === "Start" ? true : false}
          onClick={() => {
            (AllLabels(index), onAction(label));
          }}
          sx={{
            flex: 1,
            bgcolor: "rgba(59, 130, 246, 0.88)",
            color: "#f8fafc",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 10px 25px rgba(15, 23, 42, 0.18)",
            "&:hover": { bgcolor: "#2563eb" },
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.85rem",
            borderRadius: "6px",
            py: 1,
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
}
