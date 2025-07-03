import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerRutinas, eliminarRutina } from "../services/api";
import "../styles/MostrarRutinas.css";
import RutinasImg from "../assets/Rutinas.png";

function MostrarRutinas() {
    const [rutinas, setRutinas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        const cargarRutinas = async () => {
            try {
                const data = await obtenerRutinas();
                console.log("✅ Rutinas obtenidas:", data);
                setRutinas(data || []);
            } catch (error) {
                console.error("❌ Error al obtener rutinas:", error);
            }
        };

        cargarRutinas();
    }, [navigate]);

    const handleEliminar = async (id) => {
        if (window.confirm("Are you sure you want to delete this routine?")) {
            try {
                await eliminarRutina(id);
                setRutinas((prev) => prev.filter((r) => r.id !== id));
                alert("✅ Routine deleted.");
            } catch (error) {
                console.error("❌ Error al eliminar rutina:", error);
                alert("❌ Failed to delete routine.");
            }
        }
    };

    const handleEditar = (rutina) => {
        navigate(`/editar-rutina/${rutina.id}`);
    };

    return (
        <div
            className="mostrar-rutinas-container"
            style={{
                backgroundImage: `url(${RutinasImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                padding: "2rem",
            }}
        >
            <h2 className="titulo-rutinas">Your Weekly Training Routines</h2>

            {rutinas.length === 0 ? (
                <p className="mensaje-vacio">No routines created yet.</p>
            ) : (
                <div className="tarjetas-rutinas">
                    {rutinas.map((rutina) => (
                        <div key={rutina.id} className="card-rutina">
                            <h3>Name: {rutina.name || "N/A"}</h3>
                            <p><strong>Day:</strong> {rutina.dayOfWeek || "N/A"}</p>
                            <p><strong>Type:</strong> {rutina.type || "N/A"}</p>
                            <p><strong>Exercises:</strong> {Array.isArray(rutina.exercises) ? rutina.exercises.join(", ") : "N/A"}</p>

                            <div className="botones-card">
                                <button className="btn-edit" onClick={() => handleEditar(rutina)}>✏️ Edit</button>
                                <button className="btn-delete" onClick={() => handleEliminar(rutina.id)}>🗑️ Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MostrarRutinas;
