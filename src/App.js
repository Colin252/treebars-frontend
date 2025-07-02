import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Outlet
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CrearRutina from "./pages/CrearRutina";
import MostrarRutinas from "./pages/MostrarRutinas";
import EditarRutina from "./pages/EditarRutina";
import Calendario from "./pages/Calendario";
import RutinasYouTube from "./pages/RutinasYouTube";
import Anatomia from "./pages/Anatomia";
import Dietas from "./pages/Dietas";
import Parques from "./pages/Parques";
import VistaCuerpo from "./pages/VistaCuerpo";
import VistaCuerpoFemenino from "./pages/VistaCuerpoFemenino"; // ✅ NUEVO
import RecuperarPassword from "./pages/RecuperarPassword";
import Intro from "./pages/Intro";

import AudioController from "./components/AudioController"; // 🎵

const RutaProtegida = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
    return (
        <Router>
            <AudioController />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recuperar-password" element={<RecuperarPassword />} />
                <Route path="/intro" element={<Intro />} />

                <Route element={<RutaProtegida />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/crear-rutina" element={<CrearRutina />} />
                    <Route path="/mostrar-rutinas" element={<MostrarRutinas />} />
                    <Route path="/editar-rutina/:id" element={<EditarRutina />} />
                    <Route path="/calendario" element={<Calendario />} />
                    <Route path="/rutinas-youtube" element={<RutinasYouTube />} />
                    <Route path="/anatomia" element={<Anatomia />} />
                    <Route path="/dietas" element={<Dietas />} />
                    <Route path="/parques" element={<Parques />} />
                    <Route path="/vista-cuerpo" element={<VistaCuerpo />} />
                    <Route path="/vista-cuerpo-femenino" element={<VistaCuerpoFemenino />} /> {/* ✅ NUEVA RUTA */}
                </Route>

                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
