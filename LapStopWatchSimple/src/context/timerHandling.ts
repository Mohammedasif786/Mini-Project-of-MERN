const [elapsed, setElapsed] = useState<number>(0);

const [isRunning, setIsRunning] = useState<boolean>(false);

const [laps, setLaps] = useState<LapEntry[]>([]);

const [startTime, setStartTime] = useState<number | null>(null);

const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);