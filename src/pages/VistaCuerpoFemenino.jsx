import React, { useEffect, useState } from "react";
import "../styles/VistaCuerpo.css";
import CuerpoImg from "../assets/VistaCuerpoFemenino.png";
import { getActivatedZones } from "../utils/utils";

// ✅ Simulación de rutina con todos los músculos clave
const rutinaSimulada = [
    {
        dia: "Monday",
        ejercicios: [
            { nombre: "Push Ups", musculo: "chest", porcentaje: 60 },
            { nombre: "Shoulder Press", musculo: "shoulders", porcentaje: 50 },
            { nombre: "Squats", musculo: "legs", porcentaje: 80 },
            { nombre: "Hip Thrust", musculo: "gluteos", porcentaje: 55 },
            { nombre: "Crunches", musculo: "abdomen", porcentaje: 45 },
            { nombre: "Pull Ups", musculo: "espalda", porcentaje: 60 },
            { nombre: "Bicep Curls", musculo: "biceps", porcentaje: 50 },
            { nombre: "Tricep Dips", musculo: "triceps", porcentaje: 50 }
        ],
    },
];

// ✅ Mapeo para mostrar etiquetas y porcentajes
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
        const zonas = getActivatedZones(rutinaSimulada);
        setZonasActivas(zonas);
    }, []);

    return (
        <div className="body-impact-view">
            <h2 className="title">Full Body Impact View 💪</h2>

            <div className="image-container">
                <img src={CuerpoImg} alt="Female Body Diagram" className="body-image" />
                {zonasActivas.map((zona, index) => (
                    <React.Fragment key={index}>
                        <div className={`zona zona-${zona}`} />
                        {zonaLabels[`zona-${zona}`] && (
                            <div
                                className="zona-label"
                                style={{
                                    top: zonaLabels[`zona-${zona}`].top,
                                    left: zonaLabels[`zona-${zona}`].left,
                                }}
                            >
                                ⬅️ {zonaLabels[`zona-${zona}`].text} - {zonaLabels[`zona-${zona}`].porcentaje}%
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <p className="description">
                This visual represents the muscle areas activated by your workouts.
                Analyze your weekly impact and remember: recovery is part of progress.
            </p>
        </div>
    );
}

export default VistaCuerpoFemenino;
