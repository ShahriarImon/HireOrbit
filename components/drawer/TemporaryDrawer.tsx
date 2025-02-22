"use client";

import { Drawer } from "@mui/material";
import { ReactNode } from "react";
import { useNavDrawer } from "../context/NavDrawerProvider";

const TemporaryDrawer = ({
  drawer,
  drawerWidth,
  window,
}: {
  drawer: ReactNode;
  drawerWidth: number;
  window?: () => Window;
}) => {
  const { mobileOpen, handleDrawerClose, handleDrawerTransitionEnd } =
    useNavDrawer();
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onTransitionEnd={handleDrawerTransitionEnd}
      onClose={handleDrawerClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default TemporaryDrawer;
