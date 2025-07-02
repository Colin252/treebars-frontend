import React, { useEffect, useRef, useState } from "react";
import "../styles/AudioController.css";

function AudioController() {
    const audioRef = useRef(new Audio("/Ascension.mp3")); // 🎯 mantener instancia única
    const [playing, setPlaying] = useState(true);

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;
        audio.volume = 0.4;

        audio
            .play()
            .then(() => setPlaying(true))
            .catch(() => {
                console.log("Autoplay bloqueado");
                setPlaying(false);
            });

        return () => {
            audio.pause();
        };
    }, []);

    const toggleAudio = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }
        setPlaying(!playing);
    };

    return (
        <button className="audio-toggle-button" onClick={toggleAudio}>
            {playing ? "🔊" : "🔇"}
        </button>
    );
}

export default AudioController;
