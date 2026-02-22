// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";
import { Today, Important, AllTasks, Calendar } from "../components/main/Main";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Index />}>
            <Route index element={<Navigate to="today" replace/>}/>
            <Route path="today" element={<Today />} />
            <Route path="important" element={<Important />} />
            <Route path="tasks" element={<AllTasks />} />
            <Route path="calendar" element={<Calendar />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default AppRoutes;
