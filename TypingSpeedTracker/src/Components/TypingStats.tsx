import { Box, Grid, Paper, Typography } from "@mui/material";

import SpeedIcon from "@mui/icons-material/Speed";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTypingMetrics } from "../Context/TimerData";

const TypingStats = () => {
  const { wpmScore, accuracyScore, characterCount, mistakeCount } =
    useTypingMetrics();

  const stats = [
    {
      title: "WPM",
      value: wpmScore,
      subtitle: "Words per minute",
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      color: "#2563eb",
    },
    {
      title: "Accuracy",
      value: `${accuracyScore}%`,
      subtitle: "Correct typing",
      icon: <GpsFixedIcon sx={{ fontSize: 40 }} />,
      color: "#16a34a",
    },
    {
      title: "Characters",
      value: characterCount,
      subtitle: "Typed",
      icon: <KeyboardIcon sx={{ fontSize: 40 }} />,
      color: "#9333ea",
    },
    {
      title: "Mistakes",
      value: mistakeCount,
      subtitle: "Errors made",
      icon: <CancelIcon sx={{ fontSize: 40 }} />,
      color: "#ea580c",
    },
  ];
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid #e5e7eb",
      }}
    >
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.title}>
            <Box display="flex" alignItems="center" gap={2}>
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  bgcolor: `${stat.color}15`,
                  color: stat.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {stat.icon}
              </Box>

              <Box>
                <Typography variant="body1">{stat.title}</Typography>

                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ color: stat.color }}
                >
                  {stat.value}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {stat.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TypingStats;
