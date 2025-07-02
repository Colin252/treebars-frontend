import React from "react";
import ParquesImg from "../assets/Parques.png"; // asegúrate que la imagen esté en src/assets

function Parques() {
    return (
        <div
            style={{
                backgroundImage: `url(${ParquesImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
                backdropFilter: "brightness(0.9)"
            }}
        >
            <h1
                style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    textShadow: "3px 3px 10px black",
                    marginBottom: "1rem"
                }}
            >
                DISCOVER THE STREETS WHERE LEGENDS TRAIN
            </h1>

            <h2
                style={{
                    fontSize: "2rem",
                    textShadow: "2px 2px 8px black",
                    marginBottom: "2rem"
                }}
            >
                Find your calisthenics park and master your body.
            </h2>

            <div style={{ width: "90%", maxWidth: "1000px" }}>
                <iframe
                    src="https://www.google.com/maps?q=parques+calistenia+cerca+de+mi&output=embed"
                    width="100%"
                    height="500"
                    style={{ border: 0, borderRadius: "10px", boxShadow: "0 0 20px black" }}
                    allowFullScreen
                    loading="lazy"
                    title="Calisthenics Parks"
                ></iframe>
            </div>
        </div>
    );
}

export default Parques;
