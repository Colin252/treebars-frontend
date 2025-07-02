import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import ManosImg from "../assets/Manos.png";

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const botones = [
        { texto: "➕ Create Routine", ruta: "/crear-rutina" },
        { texto: "📋 Show Routines", ruta: "/mostrar-rutinas" },
        { texto: "📅 Calendar", ruta: "/calendario" },
        { texto: "📹 YouTube Routines", ruta: "/rutinas-youtube" },
        { texto: "🧠 Anatomy", ruta: "/anatomia" },
        { texto: "🥗 Diets", ruta: "/dietas" },
        { texto: "🏞️ Parks", ruta: "/parques" },
        { texto: "💪 Body View", ruta: "/vista-cuerpo" },
        { texto: "🙋‍♀️ Female Body View", ruta: "/vista-cuerpo-femenino" } // ✅ nuevo botón
    ];

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div
            className="dashboard-container"
            style={{
                backgroundImage: `url(${ManosImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px"
            }}
        >
            <h1 className="dashboard-title">Welcome to the TreeBars Control Panel 🏋️</h1>

            {botones.map((btn, index) => (
                <button
                    key={index}
                    onClick={() => navigate(btn.ruta)}
                    className="dashboard-button"
                >
                    {btn.texto}
                </button>
            ))}

            <button onClick={handleLogout} className="dashboard-button logout-button">
                🔒 Log Out
            </button>
        </div>
    );
}

export default Dashboard;
