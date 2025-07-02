import React, { useEffect, useState } from "react";
import { obtenerRutinas } from "../services/api";
import "../styles/Calendario.css"; // Importamos el estilo desde styles

function Calendario() {
    const [rutinas, setRutinas] = useState([]);

    const diasSemana = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    const normalizar = (texto) =>
        texto?.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

    useEffect(() => {
        const cargar = async () => {
            try {
                const data = await obtenerRutinas();
                setRutinas(data);
            } catch (error) {
                console.error("Error fetching routines:", error);
            }
        };

        cargar();
    }, []);

    const obtenerRutinasDelDia = (dia) => {
        return rutinas.filter((r) => normalizar(r.dayOfWeek) === normalizar(dia));
    };

    return (
        <div className="calendar-container">
            <h2 className="calendar-title">Weekly Workout Calendar</h2>
            <div className="calendar-grid">
                {diasSemana.map((dia) => {
                    const rutinasDelDia = obtenerRutinasDelDia(dia);
                    return (
                        <div key={dia} className="calendar-day">
                            <h4>{dia}</h4>
                            {rutinasDelDia.length === 0 ? (
                                <p>—</p>
                            ) : (
                                rutinasDelDia.map((r, idx) => (
                                    <div key={idx}>{r.name}</div>
                                ))
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Calendario;
