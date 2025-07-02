// 2. Horario.jsx ✅ (requiere token)
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerRutinas } from "../services/api";

function Horario() {
    const [rutinasPorDia, setRutinasPorDia] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        const cargar = async () => {
            try {
                const data = await obtenerRutinas();
                const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
                const agrupadas = {};

                dias.forEach(dia => {
                    agrupadas[dia] = data.filter(r => normalizar(r.day) === normalizar(dia));
                });

                setRutinasPorDia(agrupadas);
            } catch (error) {
                console.error("Error al cargar rutinas en horario:", error);
            }
        };
        cargar();
    }, []);

    const normalizar = (texto) =>
        texto.normalize("NFD").replace(/\u0300-\u036f/g, "").toLowerCase().trim();

    return (
        <div style={{ padding: "20px" }}>
            <h2>Horario Semanal de Rutinas</h2>
            <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center" }}>
                <thead>
                <tr>
                    <th>Día</th>
                    <th>Rutinas</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(rutinasPorDia).map(([dia, rutinas]) => (
                    <tr key={dia}>
                        <td><strong>{dia}</strong></td>
                        <td>
                            {rutinas.length === 0 ? "—" : rutinas.map(r => r.name).join(", ")}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Horario;