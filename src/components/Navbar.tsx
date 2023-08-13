import {
  Box,
  InputBase,
  Typography,
  Toolbar,
  AppBar,
  styled,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          HOÀNG CUTE
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <SearchIcon
            fontSize="small"
            htmlColor="black"
            sx={{
              cursor: "pointer",
            }}
          />
          <InputBase placeholder="Search...." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 40, height: 40 }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
            src="https://i.pinimg.com/736x/7f/13/2b/7f132b0fff3efc24e94e63bd5e31f4d5.jpg"
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 40, height: 40 }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
            src="https://i.pinimg.com/736x/7f/13/2b/7f132b0fff3efc24e94e63bd5e31f4d5.jpg"
          />
          <Typography variant="subtitle1">Ai Haibara</Typography>
        </UserBox>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            top: "8px"
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
