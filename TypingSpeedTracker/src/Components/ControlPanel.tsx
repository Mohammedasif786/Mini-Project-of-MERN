import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useEffect, useState } from "react";
import { Pause } from "@mui/icons-material";
import { useTimer, useUserInput } from "../Context/TimerData";

const ControlPanel = () => {
  const [choiceImage, setChoiceImage] = useState<string>(
    "https://img.icons8.com/?size=100&id=12367&format=png&color=000000",
  );
  const { setTimer, duration, setDuration, startTest, setStartTest } =
    useTimer();
  const { setLevel, setType } = useUserInput();

  const resetTypingProgress = () => {
    setType("");
    setStartTest(false);
  };

  useEffect(() => {
    if (!startTest) {
      return;
    }

    const timerId = window.setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setStartTest(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, [setStartTest, setTimer, startTest]);

  const PlayAndPause = () => {
    if (startTest) return <Pause />;
    else return <PlayArrowIcon />;
  };
  const handleImage = (e: SelectChangeEvent) => {
    const hold = e.target.value;
    switch (hold) {
      case "easy":
        setChoiceImage(
          "https://img.icons8.com/?size=100&id=12334&format=png&color=000000",
        );
        setLevel(0);
        setTimer(duration);
        resetTypingProgress();
        break;

      case "medium":
        setChoiceImage(
          "https://img.icons8.com/?size=100&id=12367&format=png&color=000000",
        );
        setLevel(1);
        setTimer(duration);
        resetTypingProgress();
        break;

      case "hard":
        setChoiceImage(
          "https://img.icons8.com/?size=100&id=12225&format=png&color=000000",
        );
        setLevel(2);
        setTimer(duration);
        resetTypingProgress();
        break;

      default:
        console.error("Please Choice the Correct Level!");
        break;
    }
  };

  const handleDurationChange = (e: SelectChangeEvent<number>) => {
    const selectedDuration = Number(e.target.value);
    setDuration(selectedDuration);
    setTimer(selectedDuration);
    resetTypingProgress();
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <Box display="flex" flexWrap="wrap" gap={3}>
        <Box>
          <Typography mb={1}>Test Duration</Typography>
          <div className="border-2 flex justify-center rounded">
            <span className="self-center ml-3">
              <AccessTimeIcon />
            </span>

            <FormControl size="small" sx={{ minWidth: 180 }}>
              <Select
                value={duration}
                onChange={handleDurationChange}
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                }}
              >
                <MenuItem value={30}>30 Seconds</MenuItem>
                <MenuItem value={60}>60 Seconds</MenuItem>
                <MenuItem value={120}>120 Seconds</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>

        <Box>
          <Typography mb={1}>Difficulty</Typography>
          <div className="border-2 flex justify-center rounded">
            <span className="self-center ml-3">
              <img src={choiceImage} width={20} alt="" />
            </span>
            <FormControl
              size="small"
              sx={{
                minWidth: 180,
                boxShadow: "none",
              }}
            >
              <Select
                defaultValue="medium"
                onChange={handleImage}
                sx={{
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&:hover .MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                  "&.Mui-focused": { boxShadow: "none" },
                }}
              >
                <MenuItem value="easy">Easy</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="hard">Hard</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
      </Box>

      <Box display="flex" gap={2} flexWrap="wrap">
        <Button
          variant="contained"
          size="large"
          startIcon={PlayAndPause()}
          sx={{
            px: 4,
            py: 1.4,
            borderRadius: 3,
          }}
          color={startTest ? "warning" : "info"}
          onClick={() => setStartTest((prev) => !prev)}
        >
          {startTest ? "Pause Test" : "Start Test"}
        </Button>

        <Button
          variant="outlined"
          size="large"
          startIcon={<RestartAltIcon />}
          sx={{
            px: 4,
            py: 1.4,
            borderRadius: 3,
          }}
          onClick={() => {
            setStartTest(false);
            setTimer(duration);
            resetTypingProgress();
          }}
        >
          Reset
        </Button>
      </Box>
    </div>
  );
};

export default ControlPanel;
