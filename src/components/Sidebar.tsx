import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Home,
  Article,
  People,
  Storefront,
  Person,
  Settings,
  AccountBox,
  ModeNight,
} from "@mui/icons-material";

function Sidebar({ setMode }: { setMode: () => void }) {
  return (
    <Box flex="1" p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List sx={{ color: "gray" }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText>Homepage</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText>Pages</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText>Groups</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText>Marketplace</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText>Friends</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onClick={setMode} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
