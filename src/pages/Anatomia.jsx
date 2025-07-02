import React, { useState } from "react";
import "../styles/Anatomia.css";
import FemeninoImg from "../assets/Femenino.png";
import MasculinoImg from "../assets/Masculino.png";

function Anatomia() {
    const [isFemaleView, setIsFemaleView] = useState(false);

    const toggleView = () => {
        setIsFemaleView(!isFemaleView);
    };

    return (
        <div className="anatomia-container">
            <h2>Anatomical View ({isFemaleView ? "Female" : "Male"})</h2>

            <button onClick={toggleView} className="boton-vista">
                Switch to {isFemaleView ? "Male View 👨🏻" : "Female View 👩🏻"}
            </button>

            <div className="cuerpo-wrapper">
                <div className="imagen-con-zonas">
                    <img
                        src={isFemaleView ? FemeninoImg : MasculinoImg}
                        alt={`${isFemaleView ? "Female" : "Male"} body`}
                        className="imagen-cuerpo"
                    />
                    <svg viewBox="0 0 200 500" className="cuerpo-svg">
                        <circle cx="100" cy="50" r="20" className="zona" id="head" />
                        <rect x="85" y="70" width="30" height="80" className="zona activa" id="torso" />
                        <rect x="85" y="150" width="10" height="60" className="zona" id="left-leg" />
                        <rect x="105" y="150" width="10" height="60" className="zona activa" id="right-leg" />
                        <rect x="65" y="80" width="15" height="50" className="zona activa" id="left-arm" />
                        <rect x="120" y="80" width="15" height="50" className="zona" id="right-arm" />
                    </svg>
                </div>
            </div>

            <p className="leyenda">
                Red zones indicate muscle groups activated by your workouts.
            </p>
        </div>
    );
}

export default Anatomia;
