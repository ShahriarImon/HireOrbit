import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

import { forwardRef } from "react";
import { iconifyClasses } from "./classes";

// ----------------------------------------------------------------------

export type FlagIconProps = BoxProps & {
  code?: string;
};

/**
 * `FlagIcon` is a React component that displays a country flag icon based on the provided country code.
 *
 * @component
 * @param {FlagIconProps} props - The properties for the FlagIcon component.
 * @param {string} props.code - The country code for the flag to be displayed. It should be a valid ISO 3166-1 alpha-2 code.
 * @param {string} [props.className] - Additional class names to apply to the component.
 * @param {SxProps<Theme>} [props.sx] - Additional styles to apply to the component.
 * @param {React.Ref<HTMLSpanElement>} ref - The ref to be forwarded to the span element.
 * @returns {JSX.Element | null} The rendered FlagIcon component or null if no code is provided.
 */
export const FlagIcon = forwardRef<HTMLSpanElement, FlagIconProps>(
  ({ code, className, sx, ...other }, ref) => {
    const baseStyles: SxProps<Theme> = {
      width: 26,
      height: 20,
      flexShrink: 0,
      overflow: "hidden",
      borderRadius: "5px",
      alignItems: "center",
      display: "inline-flex",
      justifyContent: "center",
      bgcolor: "background.neutral",
    };

    if (!code) {
      return null;
    }

    return (
      <Box
        ref={ref}
        component="span"
        className={iconifyClasses.flag.concat(className ? ` ${className}` : "")}
        sx={{ ...baseStyles, ...sx }}
        {...other}
      >
        <Box
          component="img"
          loading="lazy"
          alt={code}
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${code?.toUpperCase()}.svg`}
          sx={{
            width: 1,
            height: 1,
            maxWidth: "unset",
            objectFit: "cover",
          }}
        />
      </Box>
    );
  }
);

FlagIcon.displayName = "FlagIcon";
