import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import TemporaryDrawer from "./TemporaryDrawer";

const DrawerComp = ({
  drawerWidth,
  window,
}: {
  drawerWidth: number;
  window?: () => Window;
}) => {
  const drawer = (
    <div style={{ marginLeft: "10px" }}>
      <div>
        <Image
          src={"/logo.svg"}
          width={48}
          height={48}
          alt=""
          style={{ marginLeft: "18px", marginTop: "24px" }}
        />
      </div>
      <div
        style={{
          color: "#919EAB",
          fontSize: "11px",
          marginLeft: "18px",
          marginTop: "25px",
          marginBottom: "3px",
          fontWeight: 700,
        }}
      >
        OVERVIEW
      </div>
      <List>
        {[
          { text: "Dashboard", link: "/dashboard.svg", href: "/dashboard" },
          { text: "Onboarding", link: "/onBoarding.svg", href: "/onboarding" },
        ].map((item) => (
          <Link
            key={item?.text}
            href={item?.href}
            style={{
              textDecoration: "none",
              color: "inherit", // optional if you also want to inherit text color
            }}
          >
            <ListItem key={item?.text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "36px" }}>
                  <Image src={item?.link} width={24} height={24} alt="" />
                </ListItemIcon>
                <ListItemText
                  primary={item?.text}
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "var(--text-secondary, rgba(99, 115, 129, 1))",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>{" "}
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <TemporaryDrawer
        drawer={drawer}
        drawerWidth={drawerWidth}
        window={window}
      />
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default DrawerComp;
