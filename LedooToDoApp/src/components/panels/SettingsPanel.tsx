// src/components/panels/SettingsPanel.tsx
import fondo1 from "../../assets/images/themes/Fondo1.webp";
import fondo2 from "../../assets/images/themes/Fondo2.webp";
import fondo3 from "../../assets/images/themes/Fondo3.webp";
import fondo4 from "../../assets/images/themes/Fondo4.webp";
import fondo5 from "../../assets/images/themes/Fondo5.webp";
import fondo6 from "../../assets/images/themes/Fondo6.webp";
import fondo7 from "../../assets/images/themes/Fondo7.webp";
import fondo8 from "../../assets/images/themes/Fondo8.webp";
import fondo9 from "../../assets/images/themes/Fondo9.webp";

import { useSettingsStore } from "../../store/useSettingsStore";
import { Box, Typography, IconButton } from "@mui/material";

type SettingsPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  onChangeWallpaper: (newWallpaper: string) => void;
};

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  isOpen,
  onClose,
  onChangeWallpaper,
}) => {
  const { theme, setTheme } = useSettingsStore();

  if (!isOpen) return null;

  const fondos = [fondo1, fondo2, fondo3, fondo4, fondo5, fondo6, fondo7, fondo8, fondo9];
  const themes = ["redTheme", "orangeTheme", "yellowTheme", "greenTheme", "blueTheme", "purpleTheme"];

  return (
    <Box
      component="aside"
      className={`settings-panel ${isOpen ? "active" : ""}`}
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        height: "100%",
        width: 320,
        bgcolor: "var(--surface)",
        borderLeft: "1px solid var(--border)",
        boxShadow: "-4px 0 12px rgba(0,0,0,0.3)",
        p: 2.5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 4,
        overflowY: "auto",
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" color="var(--text)">
          Ajustes
        </Typography>
        <IconButton
          className="close-settings"
          onClick={onClose}
          sx={{
            color: "var(--text)",
            "&:hover": { color: "var(--primary)" },
          }}
        >
          ✖
        </IconButton>
      </Box>

      {/* Fondos */}
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Fondos
      </Typography>
      <Box
        className="wallpaper-grid"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          mb: 3,
        }}
      >
        {fondos.map((fondo, index) => (
          <Box
            key={index}
            component="button"
            className="wallpaper-card"
            onClick={() => onChangeWallpaper(fondo)}
            sx={{
              border: "1px solid var(--border)",
              borderRadius: "6px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "scale(1.05)",
                borderColor: "var(--primary)",
                boxShadow: "0 0 0 2px var(--primary)",
              },
            }}
          >
            <img
              src={fondo}
              alt={`Fondo${index + 1}`}
              style={{ width: "100%", height: "60px", objectFit: "cover", display: "block" }}
            />
          </Box>
        ))}
      </Box>

      {/* Temas */}
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Temas
      </Typography>
      <Box
        className="themes-grid"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
        }}
      >
        {themes.map((t) => (
          <Box
            key={t}
            component="button"
            className={`theme-btn ${t} ${theme === t ? "active" : ""}`}
            onClick={() => {
              setTheme(t);
              document.body.setAttribute("data-theme", t);
              localStorage.setItem("ledoo_theme", t);
            }}
            sx={{
              aspectRatio: "1",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
              bgcolor: `var(--${t})`,
              "&:hover": {
                transform: "scale(1.05)",
                borderColor: "var(--primary)",
                boxShadow: "0 0 0 2px var(--primary)",
              },
              ...(theme === t && {
                borderColor: "var(--primary)",
                boxShadow: "0 0 0 2px var(--primary)",
              }),
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SettingsPanel;
