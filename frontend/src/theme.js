import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#001845",
      light: "#001233",
      dark: "#001233",
      contrastText: "#979DAC",
    },
    secondary: {
      main: "#979DAC",
      light: "#979DAC",
      dark: "#7D8597",
      contrastText: "#001233",
    },
    background: {
      default: "#979DAC",
      paper: "#979DAC",
    },
    text: {
      primary: "#001845",
      secondary: "#33415C",
    },
    divider: "#5C677D",
    error: {
      main: "#D32F2F",
    },
    warning: {
      main: "#F57C00",
    },
    info: {
      main: "#0466C8",
    },
    success: {
      main: "#388E3C",
    },
  },
  typography: {
    fontFamily: '"Georgia", "Garamond", serif',
    h1: {
      fontFamily: '"Georgia", "Garamond", serif',
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Georgia", "Garamond", serif',
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "24px",
      fontWeight: 600,
    },
    h5: {
      fontSize: "20px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "16px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "18px",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "16px",
      lineHeight: 1.6,
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
          backgroundColor: "#001233",
          color: "#979DAC",
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
          backgroundColor: "#0466C8",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#023E7D",
          },
        },
        outlined: {
          borderColor: "#5C677D",
          color: "#001233",
          "&:hover": {
            backgroundColor: "#979DAC",
            borderColor: "#33415C",
          },
        },
        text: {
          color: "#001233",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#979DAC",
          borderRadius: "8px",
          border: "1px solid #5C677D",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#5C677D",
            },
            "&:hover fieldset": {
              borderColor: "#33415C",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0466C8",
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