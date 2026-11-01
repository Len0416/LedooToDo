import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          color: "var(--text)",
          transition: "color 0.2s ease, background 0.2s ease, filter 0.2s ease",
          "& img": {
            width: "24px",
            height: "24px",
            filter: "var(--icon-filter-default)",
            transition: "filter 0.08s ease",
          },
          "&:hover": {
            backgroundColor: "var(--surface-2)",
            color: "var(--primary)",
            "& img": {
              filter: "var(--icon-filter-primary)",
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: "1px solid transparent",
          borderRadius: "8px",
          color: "var(--text)",
          transition: "background 0.2s ease, color 0.2s ease",
          "&:hover": {
            backgroundColor: "var(--surface-2)",
            color: "var(--primary)",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--border)",
        },
      },
    },
  },
});
