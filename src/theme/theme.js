import { createTheme } from "@mui/material/styles";
import { Tokens } from "../../.mirrorful/theme";

export const theme = createTheme({
  palette: {
    bgColor: {
      main: "#1F2125",
    },
    text: {
      ...Tokens.colors.text,
    },
    background: {
      ...Tokens.colors.background,
    },
    grey: {
      ...Tokens.colors.grey,
    },
    skyblue: {
      ...Tokens.colors.skyblue,
    },
    tag: {
      ...Tokens.colors.tag,
    },
    milky: {
      ...Tokens.colors.milky,
    },
    error: {
      ...Tokens.colors.error,
    },
    success: {
      ...Tokens.colors.success,
    },
    fontWeights: {
      ...Tokens.fontWeights,
    },
  },
  typography: {
    fontFamily: "Public Sans,sans-serif",
  },
});
