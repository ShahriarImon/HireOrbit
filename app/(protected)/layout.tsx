import DrawerComp from "@/components/drawer/DrawerComp";
import Navbar from "@/components/navbar/Navbar";
import Box from "@mui/material/Box";
import * as React from "react";
interface AuthLayoutProps {
  children: React.ReactNode;
}
const drawerWidth = 280;
function AuthLayout(props: AuthLayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />
      <DrawerComp drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: "64px",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default AuthLayout;
