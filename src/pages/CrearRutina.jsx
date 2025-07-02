import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/CrearRutina.css";
import CrearImg from "../assets/Crear.png";

function CrearRutina() {
    const [name, setName] = useState("");
    const [dayOfWeek, setDayOfWeek] = useState("Monday");
    const [type, setType] = useState("");
    const [exercises, setExercises] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("⚠️ You must be logged in to create a routine.");
            navigate("/login");
        }

        const audio = new Audio("/rutina-epica.mp3");
        audio.volume = 0.5;
        audio.play().catch((e) => console.log("Autoplay blocked:", e));
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if (!token) {
            alert("Token not found. Please log in again.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/api/routines",
                {
                    name,
                    dayOfWeek,
                    type,
                    exercises: exercises.split(",").map(e => e.trim())
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            console.log("✅ Routine created:", response.data);
            alert("✅ Routine created successfully!");
            navigate("/mostrar-rutinas");
        } catch (error) {
            console.error("❌ Error creating routine:", error.response?.data || error.message);
            alert("❌ Failed to create routine. Check console for details.");
        }
    };

    return (
        <div
            className="crear-rutina-container"
            style={{
                backgroundImage: `url(${CrearImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                padding: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <form className="formulario" onSubmit={handleSubmit}>
                <h2>Create a New Routine</h2>

                <div>
                    <label>Name:</label><br />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div>
                    <label>Day of the Week:</label><br />
                    <select value={dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)}>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                </div>

                <div>
                    <label>Type:</label><br />
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
                </div>

                <div>
                    <label>Exercises (comma-separated):</label><br />
                    <input type="text" value={exercises} onChange={(e) => setExercises(e.target.value)} required />
                </div>

                <button type="submit">Create Routine</button>
            </form>
        </div>
    );
}

export default CrearRutina;
