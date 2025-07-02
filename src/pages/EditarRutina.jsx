import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditarRutina() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [rutina, setRutina] = useState({
        name: "",
        dayOfWeek: "Monday",
        type: "",
        exercises: ""
    });

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!id) {
            alert("ID de rutina inválido.");
            navigate("/mostrar-rutinas");
            return;
        }

        axios.get("http://localhost:8080/api/routines", {
            headers: { Authorization: `Bearer ${token}` }
        }).then(response => {
            const encontrada = response.data.find(r => r.id === parseInt(id));
            if (encontrada) {
                setRutina({
                    name: encontrada.name || "",
                    dayOfWeek: encontrada.dayOfWeek || "Monday",
                    type: encontrada.type || "",
                    exercises: (encontrada.exercises || []).join(", ")
                });
            } else {
                alert("❌ Rutina no encontrada");
                navigate("/mostrar-rutinas");
            }
        }).catch(error => {
            console.error("❌ Error al cargar rutina:", error);
            navigate("/mostrar-rutinas");
        });
    }, [id, navigate, token]);

    const handleChange = (e) => {
        setRutina({ ...rutina, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const rutinaActualizada = {
            name: rutina.name,
            dayOfWeek: rutina.dayOfWeek,
            type: rutina.type,
            exercises: rutina.exercises.split(",").map(e => e.trim())
        };

        axios.put(`http://localhost:8080/api/routines/${id}`, rutinaActualizada, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(() => {
            alert("✅ Rutina actualizada correctamente");
            navigate("/mostrar-rutinas");
        }).catch(error => {
            console.error("❌ Error al actualizar rutina:", error);
            alert("Error al actualizar rutina");
        });
    };

    return (
        <div style={{
            maxWidth: "500px",
            margin: "auto",
            backgroundColor: "#1e1e1e",
            color: "#fff",
            padding: "2rem",
            borderRadius: "12px",
            marginTop: "2rem",
            boxShadow: "0 0 15px rgba(255, 0, 0, 0.4)"
        }}>
            <h2 style={{ textAlign: "center", color: "#FF4C4C" }}>Editar Rutina</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={rutina.name}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "10px", borderRadius: "6px" }}
                    />
                </div>

                <div>
                    <label>Día de la semana:</label>
                    <select
                        name="dayOfWeek"
                        value={rutina.dayOfWeek}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "10px", borderRadius: "6px" }}
                    >
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                </div>

                <div>
                    <label>Tipo:</label>
                    <select
                        name="type"
                        value={rutina.type}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "10px", borderRadius: "6px" }}
                    >
                        <option value="">Seleccioná un tipo</option>
                        <option value="Fuerza">Fuerza</option>
                        <option value="Cardio">Cardio</option>
                        <option value="Movilidad">Movilidad</option>
                    </select>
                </div>

                <div>
                    <label>Ejercicios (separados por coma):</label>
                    <input
                        type="text"
                        name="exercises"
                        value={rutina.exercises}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "10px", borderRadius: "6px" }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        padding: "12px",
                        borderRadius: "8px",
                        backgroundColor: "#FF4C4C",
                        color: "white",
                        fontWeight: "bold",
                        cursor: "pointer"
                    }}
                >
                    Guardar Cambios
                </button>
            </form>
        </div>
    );
}

export default EditarRutina;
