import React, { useEffect, useState } from "react";
import "../styles/VistaCuerpo.css";
import CuerpoImg from "../assets/Cuerpo.png";
import { getActivatedZones } from "../utils/utils";
import { obtenerRutinas } from "../services/api";

const zonaLabels = {
    "zona-pecho": { text: "Chest", top: "34%", left: "58%" },
    "zona-hombros": { text: "Shoulders", top: "26%", left: "58%" },
    "zona-piernas": { text: "Legs", top: "72%", left: "58%" },
    "zona-gluteos": { text: "Glutes", top: "82%", left: "58%" },
    "zona-abdomen": { text: "Lower Abs", top: "50%", left: "58%" },
    "zona-espalda": { text: "Back", top: "38%", left: "38%" },
    "zona-biceps": { text: "Biceps", top: "30%", left: "38%" },
    "zona-triceps": { text: "Triceps", top: "30%", left: "68%" }
};

function VistaCuerpo() {
    const [zonasActivas, setZonasActivas] = useState([]);

    useEffect(() => {
        const cargarZonas = async () => {
            try {
                const rutinas = await obtenerRutinas();
                const zonas = getActivatedZones(rutinas);
                setZonasActivas(zonas);
            } catch (error) {
                console.error("❌ Error al cargar zonas activadas:", error);
            }
        };

        cargarZonas();
    }, []);

    return (
        <div className="body-impact-view">
            <h2 className="title">Full Body Impact View 💪</h2>

            <div className="image-container">
                <img src={CuerpoImg} alt="Body Diagram" className="body-image" />
                {zonasActivas.map((zona, index) => (
                    <React.Fragment key={index}>
                        <div className={`zona zona-${zona}`} />
                        {zonaLabels[`zona-${zona}`] && (
                            <div
                                className="zona-label"
                                style={{
                                    top: zonaLabels[`zona-${zona}`].top,
                                    left: zonaLabels[`zona-${zona}`].left
                                }}
                            >
                                ⬅️ {zonaLabels[`zona-${zona}`].text}
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

export default VistaCuerpo;
