import { createTheme } from "@mui/material/styles";

// Función que lee el tema activo desde body[data-theme]
export const getTheme = () => {
  const themeName = document.body.getAttribute("data-theme") || "orangeTheme";

  // Mapeo de tus variables CSS a la paleta de MUI
  const colors: Record<string, string> = {
    orangeTheme: "var(--orangeTheme)",
    blueTheme: "var(--blueTheme)",
    greenTheme: "var(--greenTheme)",
    redTheme: "var(--redTheme)",
    yellowTheme: "var(--yellowTheme)",
  };

  return createTheme({
    palette: {
      primary: { main: colors[themeName] },
      secondary: { main: "var(--important)" },
      success: { main: "var(--complete)" },
      error: { main: "var(--remove)" },
      warning: { main: "var(--important)" },
      background: {
        default: "var(--surface)",
        paper: "var(--surface-2)",
      },
      text: {
        primary: "var(--text)",
        secondary: "var(--muted)",
      },
    },
    typography: {
      fontFamily: "Inter, Roboto, sans-serif",
    },
    shape: {
      borderRadius: 12,
    },
  });
};
