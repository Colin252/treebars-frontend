import React, { useState } from "react";

function Calculadora() {
    const [peso, setPeso] = useState("");
    const [tipo, setTipo] = useState("");
    const [resultado, setResultado] = useState("");

    const calcularDesgaste = (e) => {
        e.preventDefault();

        let desgaste = 0;

        if (tipo.toLowerCase() === "fuerza") {
            desgaste = peso * 1.3;
        } else if (tipo.toLowerCase() === "cardio") {
            desgaste = peso * 0.9;
        } else {
            desgaste = peso;
        }

        let mensaje = "";

        if (desgaste < 50) {
            mensaje = "Desgaste bajo 💪 - ¡Podés entrenar más!";
        } else if (desgaste < 80) {
            mensaje = "Desgaste moderado 🔥 - ¡Buen ritmo!";
        } else {
            mensaje = "Desgaste alto 🧠 - Considerá descansar.";
        }

        setResultado(`Nivel de desgaste estimado: ${desgaste.toFixed(1)}\n${mensaje}`);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Calculadora de Desgaste Físico</h2>
            <form onSubmit={calcularDesgaste}>
                <input
                    type="number"
                    placeholder="Peso corporal (kg)"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Tipo de rutina (Fuerza, Cardio...)"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    required
                />
                <button type="submit">Calcular</button>
            </form>

            {resultado && (
                <div style={{ marginTop: "20px", whiteSpace: "pre-line" }}>
                    <strong>{resultado}</strong>
                </div>
            )}
        </div>
    );
}

export default Calculadora;
