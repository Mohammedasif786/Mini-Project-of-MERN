import { Paper, Typography } from "@mui/material";

type TimerDisplayProps = {
  displayTime: string;
};

export default function TimerDisplay({ displayTime }: TimerDisplayProps) {
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
        {displayTime}
      </Typography>
    </Paper>
  );
}
