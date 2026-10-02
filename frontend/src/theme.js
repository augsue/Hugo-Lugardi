import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000145",
      light: "#252422",
      dark: "#252422",
      contrastText: "#FFFCF2",
    },
    secondary: {
      main: "#8B6F47",
      light: "#CCC5B9",
      dark: "#403D39",
      contrastText: "#FFFCF2",
    },
    background: {
      default: "#FFFCF2",
      paper: "#F5F3F0",
    },
    text: {
      primary: "#252422",
      secondary: "#403D39",
    },
    divider: "#CCC5B9",
    error: {
      main: "#D32F2F",
    },
    warning: {
      main: "#F57C00",
    },
    info: {
      main: "#03045E",
    },
    success: {
      main: "#388E3C",
    },
  },
  typography: {
    fontFamily: '"Cinzel", serif',
    h1: {
      fontFamily: '"Cinzel", serif',
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#252422",
    },
    h2: {
      fontFamily: '"Cinzel", serif',
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: 1.3,
      color: "#252422",
    },
    h3: {
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: 1.4,
      color: "#252422",
    },
    h4: {
      fontSize: "24px",
      fontWeight: 600,
      color: "#252422",
    },
    h5: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#252422",
    },
    h6: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#252422",
    },
    body1: {
      fontSize: "18px",
      lineHeight: 1.5,
      color: "#403D39",
    },
    body2: {
      fontSize: "16px",
      lineHeight: 1.6,
      color: "#403D39",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFCF2",
          color: "#252422",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "4px",
          padding: "8px 16px",
          fontSize: "14px",
          fontWeight: 500,
        },
        contained: {
          backgroundColor: "#03045E",
          color: "#FFFCF2",
          "&:hover": {
            backgroundColor: "#252422",
          },
        },
        outlined: {
          borderColor: "#CCC5B9",
          color: "#252422",
          "&:hover": {
            backgroundColor: "#F5F3F0",
            borderColor: "#403D39",
          },
        },
        text: {
          color: "#252422",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFCF2",
          borderRadius: "8px",
          border: "1px solid #CCC5B9",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#CCC5B9",
            },
            "&:hover fieldset": {
              borderColor: "#403D39",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#03045E",
            },
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});
