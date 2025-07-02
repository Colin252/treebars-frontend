import React from "react";
import "../styles/RutinasYouTube.css";
import fondoRutinas from "../assets/Youtube.png"; // ✅ imagen cinematográfica

function RutinasYouTube() {
    const videos = [
        { muscle: "Calves", src: "https://www.youtube.com/embed/iOhxlOgRjkc" },
        { muscle: "Muscle Ups", src: "https://www.youtube.com/embed/6v6IsZcvqCA" },
        { muscle: "Muscle Ups (Advanced)", src: "https://www.youtube.com/embed/OB-AFDYNXAc" },
        { muscle: "Functional Routine (Full Body)", src: "https://www.youtube.com/embed/rzHZ42LcI3Y" }
    ];

    return (
        <div
            className="rutinas-container"
            style={{
                backgroundImage: `url(${fondoRutinas})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                padding: "40px 20px",
                color: "white",
                textShadow: "1px 1px 5px black"
            }}
        >
            <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
                🎥 YouTube Workouts by Muscle Group
            </h2>

            <div className="botones-accion">
                <a
                    href="https://www.youtube.com/results?search_query=calisthenics+full+body+workout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boton verde"
                >
                    🔥 View Full Workouts
                </a>

                <a
                    href="https://www.youtube.com/@NoCopyrightSounds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boton azul"
                >
                    🎧 Listen to NCS Music
                </a>
            </div>

            {videos.map((v, i) => (
                <div key={i} className="video-item">
                    <h3>{v.muscle}</h3>
                    <iframe
                        width="100%"
                        height="315"
                        src={v.src}
                        title={v.muscle}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    );
}

export default RutinasYouTube;
