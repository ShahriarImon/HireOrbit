// ----------------------------------------------------------------------

export function appBar() {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          // boxShadow: "none",
          backgroundColor: "white",
          borderBottom: `1px solid var(--grey-12, rgba(145, 158, 171, 0.12))`,

          boxShadow: `var(--z8x) var(--z8y) var(--z8blur) var(--z8spread) var(--shadow16) !important`,
        },
      },
    },
  };
}
