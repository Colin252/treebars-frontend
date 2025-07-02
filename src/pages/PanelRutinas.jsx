import React, { useEffect, useState } from "react";
import { obtenerRutinas, eliminarRutina } from "../services/api";
import { useNavigate } from "react-router-dom";

function PanelRutinas() {
    const [rutinas, setRutinas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        cargarRutinas();
    }, []);

    const cargarRutinas = async () => {
        try {
            const data = await obtenerRutinas();
            setRutinas(data);
        } catch (error) {
            console.error("Error al cargar rutinas:", error);
        }
    };

    const editarRutina = (id) => {
        navigate(`/editar-rutina/${id}`);
    };

    const handleEliminar = async (id) => {
        try {
            await eliminarRutina(id);
            setRutinas(rutinas.filter((r) => r.id !== id));
        } catch (error) {
            console.error("Error al eliminar rutina:", error);
        }
    };

    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    const normalizar = (texto) => {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim()
            .toLowerCase();
    };

    const rutinasPorDia = diasSemana.reduce((acc, dia) => {
        const diaNormalizado = normalizar(dia);
        acc[dia] = rutinas.filter((r) => normalizar(r.dayOfWeek || "") === diaNormalizado);
        return acc;
    }, {});

    return (
        <div style={{ padding: "20px" }}>
            <h2>Panel Semanal de Rutinas</h2>
            {diasSemana.map((dia) => (
                <div key={dia} style={{ marginBottom: "20px" }}>
                    <h3>{dia}</h3>
                    {rutinasPorDia[dia].length === 0 ? (
                        <p>No hay rutinas asignadas.</p>
                    ) : (
                        rutinasPorDia[dia].map((rutina) => (
                            <div key={rutina.id} style={{
                                border: "1px solid #ccc",
                                padding: "10px",
                                borderRadius: "8px",
                                marginBottom: "10px"
                            }}>
                                <strong>{rutina.name}</strong> - {rutina.type || "Sin tipo"}
                                <br />
                                <button onClick={() => editarRutina(rutina.id)} style={{ marginRight: "10px" }}>
                                    Editar
                                </button>
                                <button onClick={() => handleEliminar(rutina.id)}>Eliminar</button>
                            </div>
                        ))
                    )}
                </div>
            ))}
        </div>
    );
}

export default PanelRutinas;
