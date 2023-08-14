import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightBar from "./components/Rightbar";
import Add from "./components/Add.tsx";

import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"}>
        <Navbar />
        <Stack direction="row" justifyContent={"space-between"} spacing={2}>
          <Sidebar
            setMode={() => setMode(mode === "light" ? "dark" : "light")}
          />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
