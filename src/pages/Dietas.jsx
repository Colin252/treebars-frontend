import React, { useEffect, useState } from "react";
import DietasImg from "../assets/Dietas.png"; // ✅ Asegúrate que la imagen esté en src/assets

function Dietas() {
    const [dietas, setDietas] = useState([]);
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [notas, setNotas] = useState("");

    useEffect(() => {
        const dataGuardada = localStorage.getItem("dietas");
        if (dataGuardada) {
            setDietas(JSON.parse(dataGuardada));
        }
    }, []);

    const guardarEnLocalStorage = (nuevasDietas) => {
        localStorage.setItem("dietas", JSON.stringify(nuevasDietas));
    };

    const agregarDieta = (e) => {
        e.preventDefault();
        const nueva = { nombre, tipo, notas };
        const actualizadas = [...dietas, nueva];
        setDietas(actualizadas);
        guardarEnLocalStorage(actualizadas);
        setNombre("");
        setTipo("");
        setNotas("");
    };

    const eliminarDieta = (index) => {
        const actualizadas = dietas.filter((_, i) => i !== index);
        setDietas(actualizadas);
        guardarEnLocalStorage(actualizadas);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${DietasImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                padding: "2rem",
                color: "white",
                textShadow: "1px 1px 2px black",
            }}
        >
            <h2 style={{ fontSize: "2.5rem", textAlign: "center" }}>Meal Strategy</h2>

            <form onSubmit={agregarDieta} style={{ maxWidth: "600px", margin: "0 auto" }}>
                <input
                    type="text"
                    placeholder="Diet name"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
                />
                <input
                    type="text"
                    placeholder="Goal (Cutting, Bulking...)"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    required
                    style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
                />
                <textarea
                    placeholder="Notes or Observations"
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                    required
                    rows={4}
                    style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
                />
                <button type="submit" style={{ padding: "10px 20px", fontWeight: "bold" }}>
                    Add Diet
                </button>
            </form>

            <hr style={{ margin: "40px 0", borderColor: "#fff" }} />

            <h3 style={{ textAlign: "center" }}>My Diets</h3>
            {dietas.length === 0 ? (
                <p style={{ textAlign: "center" }}>No registered diets yet.</p>
            ) : (
                <ul style={{ maxWidth: "600px", margin: "0 auto" }}>
                    {dietas.map((dieta, index) => (
                        <li key={index} style={{ marginBottom: "20px", backgroundColor: "rgba(0,0,0,0.5)", padding: "10px", borderRadius: "8px" }}>
                            <strong>{dieta.nombre}</strong> - {dieta.tipo}
                            <br />
                            <em>{dieta.notas}</em>
                            <br />
                            <button
                                onClick={() => eliminarDieta(index)}
                                style={{ marginTop: "10px", backgroundColor: "#ff4d4d", color: "white", padding: "5px 10px", border: "none", cursor: "pointer" }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dietas;
