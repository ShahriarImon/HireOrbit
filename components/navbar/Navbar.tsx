import { AppBar, CssBaseline, Stack, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "./Avatar";
import ResponsiveMenuButton from "./ResponsiveMenuButton";
const Navbar = ({ drawerWidth }: { drawerWidth: number }) => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
            sx={{ width: "100%" }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={"flex-start"}
            >
              <ResponsiveMenuButton />
              <Typography variant="h6" noWrap component="div">
                Responsive drawer
              </Typography>
            </Stack>

            <Avatar />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
