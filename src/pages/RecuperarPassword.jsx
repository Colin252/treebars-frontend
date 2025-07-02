import React, { useState } from "react";

function RecuperarPassword() {
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === "") {
            setMensaje("Por favor, ingresa un correo válido.");
            return;
        }

        // Lógica simulada
        setMensaje("Si el correo está registrado, recibirás instrucciones para recuperar tu contraseña ✅");
        setEmail("");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Recuperar Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Correo registrado"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
                />
                <button type="submit" style={{ padding: "8px 16px" }}>
                    Recuperar
                </button>
            </form>
            {mensaje && <p style={{ marginTop: "15px" }}>{mensaje}</p>}
        </div>
    );
}

export default RecuperarPassword;
