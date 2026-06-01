import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import { useDataHandler } from "../context/timerHandling";

type Lap = {
  id: number;
  label: string;
  lapTime: string;
  totalTime: string;
};

type LapTablesProps = {
  laps: Lap[];
  onAdd?: () => void;
  onEdit?: (lap: Lap) => void;
  onDelete?: (lap: Lap) => void;
};

export default function LapTables({
  laps,
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
}: LapTablesProps) {
  const dummy = {nanoSec: 0, Second: 0, Minute: 0, Hour: 0};
  const { setEdit} = useDataHandler(dummy);
  const EditLable =() => {
    setEdit(true);
  }
  return (
    <Box className="px-6 pb-6 bg-transparent">
      <Box className="flex items-center justify-between mt-3 mb-2">
        <Typography
          sx={{
            fontSize: "0.7rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#d1d5db",
          }}
        >
          Laps
        </Typography>
        <Tooltip title="Add manual lap">
          <IconButton size="small" onClick={onAdd} sx={{ color: "#3b82f6" }}>
            <Add fontSize="small" sx={{ fontSize: 15 }} />
          </IconButton>
        </Tooltip>
      </Box>

      <TableContainer sx={{ maxHeight: 260, overflowY: "auto" }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              {["Lap", "Time", "Total Time", ""].map((h) => (
                <TableCell
                  key={h}
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    backgroundColor: "rgba(255,255,255,0.14)",
                    color: "#e2e8f0",
                    borderBottom: "2px solid rgba(255,255,255,0.18)",
                    py: 1,
                  }}
                >
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {laps.map((lap) => (
              <TableRow
                key={lap.id}
                hover
                sx={{
                  "&:last-child td": { borderBottom: 0 },
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
              >
                <TableCell
                  sx={{ fontSize: "0.82rem", color: "#e2e8f0", py: 0.8 }}
                >
                  {lap.label}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "0.82rem",
                    fontFamily: "monospace",
                    color: "#e2e8f0",
                  }}
                >
                  {lap.lapTime}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "0.82rem",
                    fontFamily: "monospace",
                    color: "#e2e8f0",
                  }}
                >
                  {lap.totalTime}
                </TableCell>
                <TableCell align="right" sx={{ py: 0.5, pr: 0 }}>
                  <Tooltip title="Edit label">
                    <IconButton
                      size="small"
                      onClick={() => {onEdit(lap),EditLable()}}
                      sx={{ color: "#6b7280" }}
                    >
                      <Edit fontSize="small" sx={{ fontSize: 13 }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete lap">
                    <IconButton
                      size="small"
                      onClick={() => onDelete(lap)}
                      sx={{ color: "#ef4444" }}
                    >
                      <Delete fontSize="small" sx={{ fontSize: 13 }} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
