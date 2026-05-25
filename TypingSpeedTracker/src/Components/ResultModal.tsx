import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SpeedIcon from "@mui/icons-material/Speed";

interface ResultModalProps {
  open: boolean;
  onClose: () => void;
  wpmScore: number;
  accuracyScore: number;
  characterCount: number;
  mistakeCount: number;
}

const ResultModal = ({
  open,
  onClose,
  wpmScore,
  accuracyScore,
  characterCount,
  mistakeCount,
}: ResultModalProps) => {
  const performanceText =
    accuracyScore >= 95 && mistakeCount <= 2
      ? "Excellent rhythm and precision."
      : accuracyScore >= 85
        ? "Strong run. A little polish will make it sharper."
        : "Good finish. Slow down slightly and aim for cleaner strokes.";

  const results = [
    {
      label: "WPM",
      value: wpmScore,
      icon: <SpeedIcon />,
      color: "#2563eb",
      bg: "#eff6ff",
    },
    {
      label: "Accuracy",
      value: `${accuracyScore}%`,
      icon: <GpsFixedIcon />,
      color: "#16a34a",
      bg: "#f0fdf4",
    },
    {
      label: "Characters",
      value: characterCount,
      icon: <KeyboardIcon />,
      color: "#9333ea",
      bg: "#faf5ff",
    },
    {
      label: "Mistakes",
      value: mistakeCount,
      icon: <CancelIcon />,
      color: "#ea580c",
      bg: "#fff7ed",
    },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: "hidden",
        },
      }}
    >
      <Box
        sx={{
          bgcolor: "#111827",
          color: "#fff",
          px: 3,
          py: 3,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 58,
            height: 58,
            borderRadius: "50%",
            bgcolor: "#fbbf24",
            color: "#111827",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EmojiEventsIcon sx={{ fontSize: 34 }} />
        </Box>

        <Box>
          <DialogTitle sx={{ p: 0, fontWeight: 800 }}>
            Test Complete
          </DialogTitle>
          <Typography sx={{ color: "#d1d5db" }}>{performanceText}</Typography>
        </Box>
      </Box>

      <DialogContent>
        <Box textAlign="center" py={3}>
          <Typography variant="body2" color="text.secondary">
            Final Speed
          </Typography>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ color: "#2563eb", lineHeight: 1 }}
          >
            {wpmScore}
          </Typography>
          <Typography color="text.secondary">words per minute</Typography>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
          gap={2}
          mb={3}
        >
          {results.map((result) => (
            <Box
              key={result.label}
              sx={{
                p: 2,
                borderRadius: 3,
                bgcolor: result.bg,
                border: "1px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  bgcolor: "#fff",
                  color: result.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {result.icon}
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary">
                  {result.label}
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: result.color }}
                >
                  {result.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Divider />
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3, pt: 0 }}>
        <Button
          variant="contained"
          onClick={onClose}
          fullWidth
          sx={{ py: 1.2, borderRadius: 2, fontWeight: 700 }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResultModal;

