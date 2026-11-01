import { Box, Typography, Button } from "@mui/material";

// Íconos locales con ruta correcta
import iconSection1 from "../../assets/images/icons/TablerSun.svg";
import iconSection2 from "../../assets/images/icons/ImportantStar.svg";
import iconSection3 from "../../assets/images/icons/CheckCircle.svg";
import iconSection4 from "../../assets/images/icons/BxCalendar.svg";

type MainHeaderProps = {
  title: string;
};

const iconMap: Record<string, string> = {
  "Hoy": iconSection1,
  "Destacados": iconSection2,
  "Todas las tareas": iconSection3,
  "Calendario": iconSection4,
};

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
  const fecha = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const icon = iconMap[title] || iconSection1;

  return (
    <Box
      component="header"
      className="main-header"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
        py: 2,
        borderRadius: "12px",
        color: "var(--primary)",
      }}
    >
      {/* Izquierda: ícono + título */}
      <Box display="flex" alignItems="center" gap={1.5}>
        <img src={icon} alt={title} style={{ width: 80, height: 80, filter: "var(--icon-filter-primary)" }} />
        <Box>
          <Typography variant="h1" sx={{ fontWeight: 900, fontSize: "3rem", color: "var(--text)" }}>
            {title}
          </Typography>
          <Typography variant="h2" sx={{ opacity: 0.9, fontSize: "1.1rem" }}>
            {fecha}
          </Typography>
        </Box>
      </Box>

      {/* Derecha: botones */}
      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          sx={{
            background: "#ffffff10",
            WebkitBackdropFilter: "blur(24px)",
            backdropFilter: "blur(24px)",
            borderRadius: "12px",
            boxShadow: "var(--shadow)",
            color: "var(--text)",
            textTransform: "none",
          }}
        >
          Cambiar Vista
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "#ffffff10",
            WebkitBackdropFilter: "blur(24px)",
            backdropFilter: "blur(24px)",
            borderRadius: "12px",
            boxShadow: "var(--shadow)",
            color: "var(--text)",
            textTransform: "none",
          }}
        >
          Próximo
        </Button>
      </Box>
    </Box>
  );
};

export default MainHeader;
