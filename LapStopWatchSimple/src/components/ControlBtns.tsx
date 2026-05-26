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
  let dummy = {Hour: 0, Minute: 0, Second: 0, nanoSec: 0};
  const {setIsRunning, setStartEngine, startEngine} = useDataHandler(dummy);
  return (
    <Box className="flex gap-2">
      {buttons.map((label) => (
        <Button
          key={label}
          variant="contained"
          disableElevation
          disabled={(startEngine && label === "Start")? true : false}
          onClick={() => {
            if (label === "Pause") {
              setIsRunning((prev) => !prev);
            }
            if(label === "Start") {
              setStartEngine(true);
              setIsRunning(true);
            }
            onAction(label);
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
