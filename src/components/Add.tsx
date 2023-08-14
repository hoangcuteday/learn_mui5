import {
  Tooltip,
  Fab,
  Modal,
  Box,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { useState } from "react";

const StyledMoal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Post"
        sx={{ position: "fixed", bottom: 20, left: 30 }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledMoal open={open} onClose={() => setOpen(false)}>
        <Box width={600} height={400} bgcolor={"white"} p={3} borderRadius={5}>
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://i.pinimg.com/736x/7f/13/2b/7f132b0fff3efc24e94e63bd5e31f4d5.jpg"
              sx={{ width: 40, height: 40 }}
            ></Avatar>
            <Typography>Ai Haibara</Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={4}
            defaultValue="What's on your mind?"
            variant="standard"
            sx={{ width: "100%" }}
          />
          <Stack direction={"row"} gap={2} mt={2} mb={3}>
            <EmojiEmotions
              color="primary"
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />
            <Image
              color="secondary"
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />
            <VideoCameraBack
              color="success"
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />
            <PersonAdd
              color="error"
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledMoal>
    </>
  );
};

export default Add;
