import { CircularProgress, Stack } from "@mui/material";

const Spinner = () => {
  return (
    <Stack
      sx={{ color: "grey.500", width: "100%", height: "100vh" }}
      spacing={2}
      direction="row"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgress color="success" />
    </Stack>
  );
};

export default Spinner;
