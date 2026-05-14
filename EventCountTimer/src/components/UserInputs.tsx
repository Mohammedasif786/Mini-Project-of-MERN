import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useMemo, useState } from "react";
import { randomColorGenerator } from "../Tools/Tools";
import { type Category } from "../Context/AddItem";
import { useEventAdd } from "../Context/AddItem";

function UserInputs() {
  const context = useEventAdd();
  if (context instanceof Error) return null;

  const { addEvent } = context;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<Category>("Meeting");
  const [targetISO, setTargetISO] = useState("");

  const canAdd = useMemo(() => {
    return title.trim().length > 0 && targetISO.trim().length > 0;
  }, [title, targetISO]);

  return (
    <div className="grid place-content-center h-96 wrap-normal space-y-3">
      <p className="text-2xl font-bold text-green-700">
        Event CountDown Timer
      </p>

      <Stack direction={"column"} gap={2}>
        <TextField
          variant="outlined"
          label="Timer Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel id="category-label">Select a Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={category}
            label="Select a Category"
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            <MenuItem value={"Meeting"}>Meeting</MenuItem>
            <MenuItem value={"Interview"}>Interview</MenuItem>
            <MenuItem value={"Party"}>Party</MenuItem>
            <MenuItem value={"Others"}>Others</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Target Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={targetISO}
          onChange={(e) => setTargetISO(e.target.value)}
        />
      </Stack>

      <Button
        variant="contained"
        onClick={() => {
          if (!canAdd) return;
          addEvent({
            title: title.trim(),
            category,
            targetISO,
            color: randomColorGenerator(),
          });
          setTitle("");
          setTargetISO("");
          setCategory("Meeting");
        }}
        sx={{ margin: "10px" }}
        color="primary"
        disabled={!canAdd}
      >
        Add Event
      </Button>
    </div>
  );
}

export default UserInputs;

