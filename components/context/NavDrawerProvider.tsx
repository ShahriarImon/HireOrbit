"use client";
import React, { createContext, ReactNode, useContext } from "react";

interface NavDrawer {
  mobileOpen: boolean;
  isClosing: boolean;
  handleDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
  handleDrawerToggle: () => void;
}
export const NavDrawerContext = createContext<NavDrawer>({
  mobileOpen: false,
  isClosing: false,
  handleDrawerClose: () => {},
  handleDrawerTransitionEnd: () => {},
  handleDrawerToggle: () => {},
});

const NavDrawerProvider = ({ children }: { children: ReactNode }) => {
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const [isClosing, setIsClosing] = React.useState<boolean>(false);

  const handleDrawerClose = (): void => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = (): void => {
    setIsClosing(false);
  };

  const handleDrawerToggle = (): void => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <NavDrawerContext.Provider
      value={{
        mobileOpen,
        isClosing,
        handleDrawerClose,
        handleDrawerTransitionEnd,
        handleDrawerToggle,
      }}
    >
      {children}
    </NavDrawerContext.Provider>
  );
};

const useNavDrawer = () => {
  const NavDrawer = useContext(NavDrawerContext);
  return NavDrawer;
};

export { NavDrawerProvider, useNavDrawer };
