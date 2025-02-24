"use client";
import { Button, Popover, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "../authentication/AuthProvider";

const Avatar = () => {
  const authInfo = useAuth();
  const [anchorEl, setAnchorEl] = useState<HTMLImageElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    authInfo.setAuthInfo({ isAuthed: false, token: "" });
    localStorage.removeItem("token");
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={"center"}
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "100%",
        border: "1px solid #00A76F",

        marginRight: "8px",
      }}
    >
      <Image
        src={"/avatar.svg"}
        width={36}
        height={36}
        alt=""
        style={{ borderRadius: "100%", cursor: "pointer" }}
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 0.5,
              //  ml: -0.7
            }, // Moves the popover 30px down (since 1 mt = 8px, mt: 3 = 24px)
          },
        }}
      >
        <Button onClick={handleLogout}>Logout</Button>
      </Popover>
    </Stack>
  );
};

export default Avatar;
