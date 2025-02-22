import { CircularProgress, Stack } from "@mui/material";

const Loading = () => {
  return (
    <Stack
      sx={{ color: "grey.500", width: "100%", height: "80vh" }}
      spacing={2}
      direction="row"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgress color="success" />
    </Stack>
  );
};

export default Loading;
