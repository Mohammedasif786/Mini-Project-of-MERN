import { AppBar, Toolbar, Typography, Switch, Box } from "@mui/material";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header = ({ darkMode, onToggleDarkMode }: HeaderProps) => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          py: 1,
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <KeyboardAltOutlinedIcon sx={{ fontSize: 40, color: "#2563eb" }} />

          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
              },
              color: darkMode ? "#fff" : "#000",
            }}
          >
            Typing Speed Tester
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <Typography sx={{ color: darkMode ? "#fff" : "#000" }}>
            Dark Mode
          </Typography>
          <Switch checked={darkMode} onChange={onToggleDarkMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
