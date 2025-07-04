// src/pages/VistaCuerpoFemenino.jsx
import React, { useEffect, useState } from "react";
import "../styles/VistaCuerpo.css";
import CuerpoImg from "../assets/VistaCuerpoFemenino.png";
import { getActivatedZones } from "../utils/utils";
import { obtenerRutinas } from "../services/api";

// Mapeo para etiquetas y posiciones
const zonaLabels = {
    "zona-pecho": { text: "Chest", top: "34%", left: "58%", porcentaje: 60 },
    "zona-hombros": { text: "Shoulders", top: "26%", left: "58%", porcentaje: 50 },
    "zona-piernas": { text: "Legs", top: "72%", left: "58%", porcentaje: 80 },
    "zona-gluteos": { text: "Glutes", top: "82%", left: "58%", porcentaje: 55 },
    "zona-abdomen": { text: "Lower Abs", top: "50%", left: "58%", porcentaje: 45 },
    "zona-espalda": { text: "Back", top: "38%", left: "38%", porcentaje: 60 },
    "zona-biceps": { text: "Biceps", top: "30%", left: "38%", porcentaje: 50 },
    "zona-triceps": { text: "Triceps", top: "30%", left: "68%", porcentaje: 50 },
};

function VistaCuerpoFemenino() {
    const [zonasActivas, setZonasActivas] = useState([]);

    useEffect(() => {
        const cargarZonas = async () => {
            try {
                const rutinas = await obtenerRutinas();
                const zonas = getActivatedZones(rutinas);
                setZonasActivas(zonas);
            } catch (error) {
                console.error("❌ Error al cargar zonas:", error);
            }
        };

        cargarZonas();
    }, []);

    return (
        <div className="body-impact-view">
            <h2 className="title">Full Body Impact View 💪</h2>

            <div className="image-container">
                <img src={CuerpoImg} alt="Female Body Diagram" className="body-image" />
                {zonasActivas.map((zona, index) => {
                    const label = zonaLabels[`zona-${zona}`];
                    return (
                        <React.Fragment key={index}>
                            <div className={`zona zona-${zona}`} />
                            {label && (
                                <div
                                    className="zona-label"
                                    style={{ top: label.top, left: label.left }}
                                >
                                    ⬅️ {label.text} - {label.porcentaje}%
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            <p className="description">
                This visual represents the muscle areas activated by your workouts.
                Analyze your weekly impact and remember: recovery is part of progress.
            </p>
        </div>
    );
}

export default VistaCuerpoFemenino;
