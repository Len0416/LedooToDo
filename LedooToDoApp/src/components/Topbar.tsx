import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import LedooIcon from "../assets/images/icons/svg/LedooIcon.svg";

const optionsNav = [
  { label: "Perfil", panel: "panel-perfil", isAccount: true },
  { label: "Secciones", panel: "panel-secciones-principales", isSections: true },
  { label: "Listas", panel: "panel-secciones-personales", isLists: true },
  { label: "Notas", panel: "notes-panel" },
  { label: "Ajustes", panel: "settings-panel", isSetting: true },
];

interface TopbarProps {
  onOpenSettings: () => void;
  onOpenAccount: () => void;
  onOpenSections: () => void;
  onOpenLists: () => void;
}

const Topbar = ({ onOpenSettings, onOpenAccount, onOpenSections, onOpenLists }: TopbarProps) => {
  return (
    <Box
      component="header"
      className="topbar"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        py: 1,
        borderBottom: "1px solid var(--border)",
        bgcolor: "var(--surface)",
      }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <Box
          component="img"
          src={LedooIcon}
          alt={"Ícono de Ledoo"}
          sx={{
            aspectRatio: "1 / 1",
            width: 40,
            borderRadius: "8px",
            fill: "var(--primary)",
              filter: "var(--icon-filter-primary)",
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 600 }} color="var(--primary)">
          Ledoo
        </Typography>
      </Box>

      <Stack direction="row" className="optionsNav">
        {optionsNav.map((option) => (
          <Button
            key={option.panel}
            variant="text"
            data-panel={option.panel}
            onClick={
              option.isSetting
                ? onOpenSettings
                : option.isAccount
                ? onOpenAccount
                : option.isSections
                ? onOpenSections
                : option.isLists
                ? onOpenLists
                : undefined
            }
            sx={{
              color: "var(--text)",
              borderRadius: "8px",
              fontSize: "0.7rem",
              textTransform: "none",
              transition: "color 0.2s ease, background 0.2s ease",
              "&:hover": {
                bgcolor: "var(--surface-2)",
                color: "var(--primary)",
              },
            }}
          >
            {option.label}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Topbar;
