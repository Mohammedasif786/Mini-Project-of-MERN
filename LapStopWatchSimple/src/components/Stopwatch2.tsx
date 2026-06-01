import {
  Box,
  Button,
  Paper,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ControlBtns from "./ControlBtns";
import LapTables from "./LapTables";
import TimerDisplay from "./TimerDisplay";
import { useDataHandler } from "../context/timerHandling";
import { useState } from "react";

// ─── Mock Data ────────────────────────────────────────────────────────────────

const displayTime = "00:00:00:00";
const emptyDisplay = { Hour: 0, Minute: 0, Second: 0, nanoSec: 0 };
const controlButtons = ["Start", "Pause", "Lap", "Reset"];

type mockLaps = {
  id: number;
  label: string;
  lapTime: string;
  totalTime: string;
};

const mockLaps: mockLaps[] = [
  { id: 1, label: "Lap 1", lapTime: "00:00:01.98", totalTime: "00:00:01.98" },
  { id: 2, label: "Lap 2", lapTime: "00:00:00.00", totalTime: "00:00:01.98" },
  { id: 3, label: "Lap 3", lapTime: "00:00:07.84", totalTime: "00:00:09.82" },
  { id: 4, label: "Lap 4", lapTime: "00:00:00.44", totalTime: "00:00:10.26" },
  { id: 5, label: "Lap 5", lapTime: "00:00:00.50", totalTime: "00:00:10.76" },
  { id: 6, label: "Lap 6", lapTime: "00:00:01.05", totalTime: "00:00:11.81" },
];

// ─── Blueprint ────────────────────────────────────────────────────────────────

export default function StopwatchBlueprint() {
  const initialTime = {
    nanoSec: Number(displayTime.split(":").at(3)),
    Second: Number(displayTime.split(":").at(2)),
    Minute: Number(displayTime.split(":").at(1)),
    Hour: Number(displayTime.split(":").at(0)),
  };

  const { startTime, startEngine, laps, setLaps, Edits, setEdit } =
    useDataHandler(initialTime);
  const [labelName, setLabelName] = useState("");
  const [editingLapId, setEditingLapId] = useState<number | null>(null);

  const handleClick = () => {
    if (editingLapId === null) return;

    setLaps((prev) =>
      prev.map((lap) =>
        lap.id === editingLapId ? { ...lap, label: labelName } : lap,
      ),
    );
    setEdit(false);
    setEditingLapId(null);
  };

  const onEdit = (lap: mockLaps) => {
    setEditingLapId(lap.id);
    setLabelName(lap.label);
    setEdit(true);
  };
  const onDelete = (lap: mockLaps) => {
    setLaps((prev) => prev.filter((l) => l.id !== lap.id));
  }
  const timerDisplayValue = startTime ?? initialTime;

  return (
    <Box
      className="min-h-screen flex items-center justify-center p-6"
      sx={{
        minHeight: "100vh",
        backgroundImage: "url(../flower.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0f172a",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          borderRadius: 4,
          width: "100%",
          maxWidth: 440,
          backgroundColor: "rgba(15, 23, 42, 0.72)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(18px)",
          boxShadow: "0 30px 80px rgba(15, 23, 42, 0.45)",
        }}
      >
        <Box className="px-6 pt-8 pb-4 bg-transparent">
          <TimerDisplay
            displayTime={startEngine ? timerDisplayValue : emptyDisplay}
          />
          <ControlBtns
            buttons={controlButtons}
          />
        </Box>

        <LapTables
          laps={laps}
          onAdd={() => console.log("Add lap")}
          onEdit={(lap) => {
            onEdit(lap);
          }}
          onDelete={(lap) => onDelete(lap)}
        />
      </Paper>

      {/* ── Edit Label Dialog (static/open for preview) ── */}
      <Dialog open={Edits} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: "1rem" }}>
          Edit Lap Label
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Label"
            value={labelName}
            size="small"
            onChange={(e) => setLabelName(e.target.value)}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="inherit"
            size="small"
            onClick={() => {
              setEdit(false);
              setEditingLapId(null);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ bgcolor: "#3b82f6" }}
            onClick={handleClick}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Add Manual Lap Dialog (static/open for preview) ── */}
      <Dialog open={false} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: "1rem" }}>
          Add Manual Lap
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          <TextField
            fullWidth
            label="Label"
            defaultValue="Lap 7"
            size="small"
            sx={{ mt: 1 }}
          />
          <TextField
            fullWidth
            label="Lap Time (HH:MM:SS:CS)"
            defaultValue="00:00:00:00"
            size="small"
            sx={{ mt: 1 }}
          />
          <TextField
            fullWidth
            label="Total Time (HH:MM:SS:CS)"
            defaultValue="00:00:00:00"
            size="small"
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button color="inherit" size="small">
            Cancel
          </Button>
          <Button variant="contained" size="small" sx={{ bgcolor: "#3b82f6" }}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
