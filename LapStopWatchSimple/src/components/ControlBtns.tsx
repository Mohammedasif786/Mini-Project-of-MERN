import { Box, Button } from "@mui/material";

type ControlBtnsProps = {
  buttons: string[];
  onAction?: (label: string) => void;
};

export default function ControlBtns({
  buttons,
  onAction = () => {},
}: ControlBtnsProps) {
  return (
    <Box className="flex gap-2">
      {buttons.map((label) => (
        <Button
          key={label}
          variant="contained"
          disableElevation
          onClick={() => onAction(label)}
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
