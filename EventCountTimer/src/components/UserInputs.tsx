import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { useEventAdd } from "../Context/AddItem";
import { useEffect, useState } from "react";

function UserInputs(this: any) {
  const [date] = useState(() => new Date()); // now Date!
  const context = useEventAdd();
  if (context instanceof Error) return null;
  const { userData, setUserDate, counter, setCounter, target, setTarget } = context;

  const TimeFormat: { Sec: number; Minute: number; Hour: number; Day: number } =
    {
      Sec: 1000,
      Minute: 1000 * 60,
      Hour: 1000 * 60 * 60,
      Day: 1000 * 60 * 60 * 24,
    };

    // console.log(userData.Target);
    // console.log(target);
  useEffect(() => {
    const Timeout = setInterval(() => {
      const Target = new Date(userData.Target);
      const diff = Target.getTime() - date.getTime();
      if (diff <= 0) clearInterval(Timeout);

      console.log({x: Math.floor(8923.2)});
      setTarget({
        Day: Math.floor(diff / TimeFormat.Day),
        Hour: Math.floor((diff % TimeFormat.Day) / TimeFormat.Hour),
        Minute: Math.floor((diff % TimeFormat.Hour) / TimeFormat.Minute),
        Sec: Math.floor((diff % TimeFormat.Minute) / TimeFormat.Sec),
      });
    }, 1000);
  }, []);

  return (
    <div className=" grid place-content-center h-96 wrap-normal space-y-3">
      <p className="text-2xl font-bold text-green-700">
        GeeksForGeeks CountDown Timer
      </p>
      <Stack direction={"column"} gap={2}>
        <TextField
          variant="outlined"
          onChange={(e) =>
            setUserDate((prev) => ({ ...prev, Title: e.target.value }))
          }
          label="Timer Title"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Select a Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userData.Category}
            label="Select a Category"
            // onChange={handleChange}
            onChange={(e) =>
              setUserDate((prev) => ({
                ...prev,
                Category: e.target.value as
                  | "Meeting"
                  | "Interview"
                  | "Party"
                  | "Others",
              }))
            }
          >
            <MenuItem value={"Meeting"}>Meeting</MenuItem>
            <MenuItem value={"Interview"}>Interview</MenuItem>
            <MenuItem value={"Party"}>Party</MenuItem>
            <MenuItem value={"Others"}>Others</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="--:--"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) =>
            setUserDate((prev) => ({ ...prev, Target: e.target.value }))
          }
        />
      </Stack>
      <Button
        variant="contained"
        onClick={() => setCounter((c) => [...c, 1])}
        sx={{ margin: "10px" }}
        color="primary"
      >
        Add Event [{counter.join(", ")}]
      </Button>
    </div>
  );
}

export default UserInputs;
