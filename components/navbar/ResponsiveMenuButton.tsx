"use client";
import { Icon } from "@iconify/react";
import { IconButton } from "@mui/material";
import withAuth from "../authentication/withAuth";
import { useNavDrawer } from "../context/NavDrawerProvider";

const ResponsiveMenuButton = () => {
  const { handleDrawerToggle } = useNavDrawer();
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ mr: 2, display: { sm: "none" } }}
    >
      <Icon icon="material-symbols:menu" width="24" height="24" color="black" />
    </IconButton>
  );
};

export default withAuth(ResponsiveMenuButton);
