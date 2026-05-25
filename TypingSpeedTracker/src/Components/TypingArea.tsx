import { Box, Paper, TextField, Typography } from "@mui/material";

import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { type ChangeEvent } from "react";
import { useTimer, useUserInput } from "../Context/TimerData";

const TypingArea = () => {
  const { Type, quote, setType } = useUserInput();
  const { Timer, setStartTest } = useTimer();

  const handleType = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const typedText = e.target.value;

    setType(typedText);

    if (quote.length > 0 && typedText.length > 0 && Timer > 0) {
      setStartTest(true);
    }

    if (quote.length > 0 && typedText.length >= quote.length) {
      setStartTest(false);
    }
  };

  const isComplete = quote.length > 0 && Type.length >= quote.length;
  const helperText = isComplete
    ? "Test complete! Reset or change difficulty for a new quote."
    : "Complete the test to see your full results!";

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 3,
        p: 4,
        borderRadius: 4,
        border: "1px solid #e5e7eb",
      }}
    >
      <TextField
        fullWidth
        placeholder="Start typing here..."
        multiline
        value={Type}
        onChange={handleType}
        rows={3}
      />

      <Box mt={4} display="flex" justifyContent="center">
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{
            px: 4,
            py: 2,
            borderRadius: 3,
            bgcolor: "#eff6ff",
            color: "#2563eb",
          }}
        >
          <EmojiEventsOutlinedIcon />
          <Typography>{helperText}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default TypingArea;
