import { Link } from "react-router-dom";
import { Today, Important, AllTasks, Calendar } from "./main/Main";
import { useListStore } from "../store/useListStore";
import iconSection1 from "../assets/images/icons/TablerSun.svg";
import iconSection2 from "../assets/images/icons/ImportantStar.svg";
import iconSection3 from "../assets/images/icons/CheckCircle.svg";
import iconSection4 from "../assets/images/icons/BxCalendar.svg";
import userIcon from "../assets/images/icons/TablerUser.svg";
import { useState } from "react";
import CreateListModal from "./modals/CreateListModal.tsx";
import EditListModal from "./modals/EditListModal.tsx";
import type { List as ListType } from "../types/List.ts";

import {
  Box,
  Typography,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItem,
} from "@mui/material";

const Sidebar: React.FC = () => {
  const sections = [
    { title: "Hoy", icon: iconSection1, path: "/today", component: Today },
    { title: "Destacados", icon: iconSection2, path: "/important", component: Important },
    { title: "Tareas", icon: iconSection3, path: "/tasks", component: AllTasks },
    { title: "Calendario", icon: iconSection4, path: "/calendar", component: Calendar },
  ];

  const { lists } = useListStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [selectedList, setSelectedList] = useState<ListType | null>(null);

  return (
    <Box
      component="aside"
      className="sidebar"
      sx={{
        bgcolor: "var(--surface)",
        borderRight: "1px solid var(--border)",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        minHeight: "100%",
        overflowY: "auto",
      }}
    >
      {/* Perfil de usuario */}
      <Box className="user-card" display="grid" gridTemplateColumns="48px 1fr" gap={1.5} alignItems="center">
        <Avatar src={userIcon} alt="Usuario" sx={{ width: 48, height: 48 }} />
        <Box>
          <Typography className="user-name" fontWeight={600}>Nombre de usuario</Typography>
          <Typography className="user-email" fontSize="0.9rem" color="var(--muted)">
            correousuario@gmail.com
          </Typography>
        </Box>
      </Box>

      {/* Secciones principales */}
      <Box className="nav-sections">
        <Typography variant="h2" sx={{ fontSize: "1rem", fontWeight: 600 }}>
          Principal
        </Typography>
        {sections.map((section, index) => (
          <ListItemButton
            key={index}
            component={Link}
            to={section.path}
            className="nav-item"
            sx={{
              height: 50,
              borderRadius: "10px",
              gap: "12px",
              px: 1.5,
              py: 1,
              color: "var(--text)",
              transition: "all 0.2s ease",
              "& img": {
                width: 24,
                height: 24,
                filter: "var(--icon-filter-default)",
                transition: "filter 0.08s ease",
              },
              "&:hover": {
                bgcolor: "var(--surface-2)",
                color: "var(--primary)",
                "& img": {
                  filter: "var(--icon-filter-primary)",
                },
              },
            }}
          >
            <ListItemIcon>
              <img src={section.icon} alt={"Sección: " + section.title} />
            </ListItemIcon>
            <ListItemText primary={section.title} />
          </ListItemButton>
        ))}
      </Box>

      {/* Mis listas */}
      <Box flex={1} className="lists">
        <Box className="lists-header" display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h2" sx={{ fontSize: "1rem", fontWeight: 600 }}>
            Listas
          </Typography>
          <IconButton
            size="small"
            sx={{
              border: "1px solid transparent",
              borderRadius: "8px",
              color: "var(--text)",
              "&:hover": {
                bgcolor: "var(--surface-2)",
                color: "var(--primary)",
              },
            }}
            onClick={() => setIsModalOpen(true)}
          >
            +
          </IconButton>
        </Box>
        <List className="list-group" sx={{ display: "grid", gap: "6px" }}>
          {lists.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                component={Link}
                to={`/listas/${item.name.toLowerCase()}`}
                className="list-item"
                sx={{
                  borderRadius: "8px",
                  color: "var(--text)",
                  border: "1px solid transparent",
                  "&:hover": {
                    bgcolor: "var(--surface-2)",
                  },
                }}
                onClick={() => {
                  setSelectedList(item);
                  setIsEditModal(true);
                }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Modales */}
      {isModalOpen && <CreateListModal onClose={() => setIsModalOpen(false)} />}
      {isEditModal && selectedList && (
        <EditListModal
          list={selectedList}
          onClose={() => {
            setIsEditModal(false);
            setSelectedList(null);
          }}
          onEdit={() => {
            setIsEditModal(false);
            setSelectedList(null);
          }}
        />
      )}
    </Box>
  );
};

export default Sidebar;
