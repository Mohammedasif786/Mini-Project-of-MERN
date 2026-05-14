import { Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import UserInputs from "./UserInputs";
import { useEventAdd, type EventItem } from "../Context/AddItem";
import { TimeFormat } from "../Tools/Tools";

type Remaining = { Day: number; Hour: number; Minute: number; Sec: number };

function computeRemaining(targetISO: string, now = new Date().getTime()): Remaining {
  const targetMs = new Date(targetISO).getTime();
  const diff = targetMs - now;

  if (!Number.isFinite(diff) || diff <= 0) {
    return { Day: 0, Hour: 0, Minute: 0, Sec: 0 };
  }

  return {
    Day: Math.floor(diff / TimeFormat.Day),
    Hour: Math.floor((diff % TimeFormat.Day) / TimeFormat.Hour),
    Minute: Math.floor((diff % TimeFormat.Hour) / TimeFormat.Minute),
    Sec: Math.floor((diff % TimeFormat.Minute) / TimeFormat.Sec),
  };
}

function CountDown() {
  const context = useEventAdd();
  if (context instanceof Error) return null;

  const { events, removeEvent } = context;
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 500);
    return () => window.clearInterval(id);
  }, []);

  const remainingById = useMemo(() => {
    const map = new Map<number, Remaining>();
    for (const e of events as EventItem[]) {
      map.set(e.id, computeRemaining(e.targetISO, now));
    }
    return map;
  }, [events, now]);

  return (
    <>
      <UserInputs />

      <div className="border-2 gap-6 flex-wrap flex overflow-x-auto justify-center-safe p-4">
        {events.map((e) => {
          const rem = remainingById.get(e.id) ?? { Day: 0, Hour: 0, Minute: 0, Sec: 0 };
          const isDone = rem.Day === 0 && rem.Hour === 0 && rem.Minute === 0 && rem.Sec === 0;

          return (
            <div
              key={e.id}
              className="flex flex-col gap-2 px-8 py-4 border-2 rounded"
              style={{ backgroundColor: e.color, color: "white" }}
            >
              <h1 className="text-2xl font-bold">{e.title}</h1>
              <h3 className="text-xl">{e.category}</h3>

              <div className="flex gap-6 p-4">
                <p className="border-2 p-2 rounded text-center">
                  {rem.Day}
                  <br />
                  day
                </p>
                <p className="border-2 p-2 rounded text-center">
                  {rem.Hour}
                  <br />
                  hours
                </p>
                <p className="border-2 p-2 rounded text-center">
                  {rem.Minute}
                  <br />
                  minutes
                </p>
                <p className="border-2 p-2 rounded text-center">
                  {rem.Sec}
                  <br />
                  seconds
                </p>
              </div>

              <Button
                variant="contained"
                color="warning"
                size="medium"
                fullWidth
                onClick={() => removeEvent(e.id)}
              >
                Remove
              </Button>

              {isDone ? (
                <div className="pt-2 text-center text-sm">Event time reached</div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CountDown;

