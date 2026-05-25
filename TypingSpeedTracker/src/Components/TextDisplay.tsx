import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { useTimer, useUserInput } from "../Context/TimerData";
import useQuotesGenerator from "../Api/QuotesType";

const TextDisplay = () => {
  const { Timer, duration } = useTimer();
  const progressValue = duration > 0 ? (Timer / duration) * 100 : 0;
  const minutes = Math.floor(Timer / 60);
  const seconds = Timer % 60;
  const timeLeft = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const { quotes, loading } = useQuotesGenerator();
  const hold = useUserInput();
  const { Type } = hold;

  const identifyColor =
    Type.length === 0 ? "" : quotes.slice(0, Type.length) === Type ? "#15803d" : "red";

  const typedText = quotes.slice(0, Type.length);
  const currentText = quotes[Type.length] ?? "";
  const remainingText = quotes.slice(Type.length + 1);

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 4,
        p: 4,
        borderRadius: 4,
        border: "1px solid #e5e7eb",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Time Left</Typography>
        <Typography variant="h5" fontWeight="bold">
          {timeLeft}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progressValue}
        sx={{
          height: 10,
          borderRadius: 10,
          mb: 4,
        }}
      />

      <Typography
        sx={{
          fontSize: {
            xs: "1.1rem",
            md: "1.5rem",
          },
          lineHeight: 2,
          fontFamily: "monospace",
          whiteSpace: "pre-wrap",
        }}
      >
        {loading ? (
          "Loading..."
        ) : (
          <>
            <span style={{ color: identifyColor }}>{typedText}</span>
            {currentText && (
              <span
                style={{
                  backgroundColor: "blueviolet",
                  color: "white",
                  borderRadius: 4,
                  display: "inline-block",
                  minWidth: "0.65ch",
                  textAlign: "center",
                }}
              >
                {currentText}
              </span>
            )}
            <span>{remainingText}</span>
          </>
        )}
      </Typography>
    </Paper>
  );
};

export default TextDisplay;
