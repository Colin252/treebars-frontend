import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ManosImg from "../assets/Manos.png";
import "../styles/Login.css"; // ✅ Importamos el CSS

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://treebars-backend-666.onrender.com/api/auth/login", {
                email,
                password,
            });

            const data = response.data;

            localStorage.setItem("token", data.token);
            localStorage.setItem("name", data.name);
            localStorage.setItem("role", data.role);

            setMensaje("Login successful ✅");

            setTimeout(() => {
                navigate("/intro");
            }, 1000);
        } catch (error) {
            console.error("Login error:", error);
            setMensaje("Incorrect credentials ❌");
        }
    };

    return (
        <div
            className="login-container"
            style={{
                backgroundImage: `url(${ManosImg})`
            }}
        >
            <h1 className="login-title">ONLY THE STRONG ENDURE</h1>

            <h2 style={{ color: "#fff", textShadow: "2px 2px 5px black" }}>Sign In</h2>

            <form className="login-form" onSubmit={handleLogin}>
                <label style={{ color: "#fff", marginBottom: "5px" }}>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label style={{ color: "#fff", marginBottom: "5px" }}>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Sign In</button>
            </form>

            {mensaje && (
                <p
                    className="login-message"
                    style={{ color: mensaje.includes("✅") ? "#00ff99" : "#ff4c4c" }}
                >
                    {mensaje}
                </p>
            )}

            <p className="login-register-link">
                Don't have an account?{" "}
                <a href="/register">Register here</a>
            </p>
        </div>
    );
}

export default Login;
