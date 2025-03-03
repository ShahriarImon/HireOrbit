import { radioClasses, RadioProps } from "@mui/material/Radio";
import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export function radio(theme: Theme) {
  return {
    // CHECKBOX, RADIO, SWITCH
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          ...theme.typography.body2,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: RadioProps }) => {
          const { color } = ownerState;

          return {
            color: "gray",
            "&.Mui-checked": {
              color: "#00A76F",
            },
            padding: theme.spacing(1),
            ...(color === "default" && {
              [`&.${radioClasses.checked}`]: {
                color: theme.palette.text.primary,
              },
            }),
            [`&.${radioClasses.disabled}`]: {
              color: theme.palette.action.disabled,
            },
          };
        },
      },
    },
  };
}
