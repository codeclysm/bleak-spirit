import { createTheme } from "@mui/material";

const beige = "#ece4d4";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Cambria",
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          backgroundColor: beige,
          borderColor: "#ffffff",
          borderWidth: 2,
          borderRadius: 0,
          boxShadow: `0px 0px 0px 3px ${beige}`,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontFamily: "Trajan Pro",
          fontWeight: "bold",
          textAlign: "center",
          borderBottom: "2px solid #ffffff",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: "small",
        variant: "standard",
        color: "primary",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          fontFamily: "Trajan Pro",
          fontWeight: "bold",
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
