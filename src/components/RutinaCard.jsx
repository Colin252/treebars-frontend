import React from "react";
import "../styles/RutinaCard.css";

function RutinaCard({ rutina }) {
    return (
        <div className="rutina-card">
            <h2>{rutina.name}</h2>
            <p><strong>Día:</strong> {rutina.dayOfWeek}</p>
            <p><strong>Tipo:</strong> {rutina.type}</p>
            {rutina.exercises && rutina.exercises.length > 0 ? (
                <ul>
                    {rutina.exercises.map((ejercicio, index) => (
                        <li key={index}>{ejercicio}</li>
                    ))}
                </ul>
            ) : (
                <p>Sin ejercicios</p>
            )}
        </div>
    );
}

export default RutinaCard;
