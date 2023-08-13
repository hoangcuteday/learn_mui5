import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightBar from "./components/Rightbar";

import { theme } from "./theme.ts";

import { Box, Stack, ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"}>
        <Navbar />
        <Stack direction={"row"} justifyContent={"space-between"} spacing={2}>
          <Sidebar />
          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
