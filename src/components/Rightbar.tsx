import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from "@mui/material";

function RightBar() {
  return (
    <Box
      bgcolor="white"
      flex="2"
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={360}>
        <Typography variant="h6" sx={{ margin: "10px 0" }}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Edogawa Connan"
            src="https://antimatter.vn/wp-content/uploads/2022/06/hinh-anh-conan.jpg"
          />
          <Avatar
            alt="Doraemon"
            src="https://tophinhanhdep.com/wp-content/uploads/2021/10/Cute-Doraemon-Wallpapers.png"
          />
          <Avatar
            alt="Luffy"
            src="https://lh3.googleusercontent.com/Ryg5ih-fOWbpEGDpbJYJz5RTq3_28Tvo2h3JQRCdiz16lw5ghitDMN6hcWA57g0d6_8VOqQYcCemRBOfZGQA64ZKkFOn71zuF1LDsXwCh4ywF-_z6VqxbBqmbQvK_-PWfZcztxDd1WDTEEUHX6GdP60"
          />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" sx={{ margin: "10px 0" }}>
          Latest Photos
        </Typography>
        <ImageList cols={3} gap={8} rowHeight={140}>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1549388604-817d15aa0110?w=161&fit=crop&auto=format&dpr=2" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=161&fit=crop&auto=format&dpr=2" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=161&fit=crop&auto=format&dpr=2" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1525097487452-6278ff080c31?w=161&fit=crop&auto=format&dpr=2" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1549388604-817d15aa0110?w=161&fit=crop&auto=format&dpr=2" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?w=161&fit=crop&auto=format&dpr=2" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" sx={{ margin: "10px 0" }}>
          Lastest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", overflow: "auto", maxHeight: "200px" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default RightBar;
