import React from "react";
import { useNavigate } from "react-router-dom";
import FondoBoxeo from "../assets/Intro.png"; // ✅ imagen cinematográfica

function Intro() {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate("/dashboard");
    };

    return (
        <div
            style={{
                backgroundImage: `url(${FondoBoxeo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
                textAlign: "center",
                backdropFilter: "brightness(0.9)"
            }}
        >
            <h1 style={{
                color: "#FF0000",
                fontSize: "4rem",
                textShadow: "5px 5px 12px black",
                marginBottom: "20px",
                fontFamily: "'Impact', 'Segoe UI', sans-serif",
                letterSpacing: "3px"
            }}>
                BLOOD. SWEAT. RESPECT.
            </h1>

            <p style={{
                color: "#fff",
                fontSize: "1.4rem",
                maxWidth: "800px",
                textShadow: "2px 2px 6px black",
                marginBottom: "45px",
                lineHeight: "1.8"
            }}>
                This app is forged in pain and purpose. You don't just train — you transform.
                Welcome to your arena.
            </p>

            <button onClick={handleEnter} style={{
                padding: "15px 35px",
                backgroundColor: "#FF0000",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "1.3rem",
                cursor: "pointer",
                boxShadow: "3px 3px 10px black",
                fontWeight: "bold",
                transition: "transform 0.2s ease-in-out"
            }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
                ENTER TREEBARS
            </button>
        </div>
    );
}

export default Intro;
