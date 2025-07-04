// src/utils/utils.js

// Nombres válidos de músculos en inglés y español
const MUSCLE_MAP = {
    chest: "pecho",
    pecho: "pecho",
    legs: "piernas",
    piernas: "piernas",
    shoulders: "hombros",
    hombros: "hombros",
    glutes: "gluteos",
    glúteos: "gluteos",
    gluteos: "gluteos",
    abs: "abdomen",
    abdomen: "abdomen",
    back: "espalda",
    espalda: "espalda",
    biceps: "biceps",
    bíceps: "biceps",
    triceps: "triceps",
    tríceps: "triceps",
};

export function getActivatedZones(rutinas = []) {
    const zonas = new Set();

    rutinas.forEach((rutina) => {
        rutina.ejercicios?.forEach((ejercicio) => {
            const musculo = ejercicio.musculo?.toLowerCase()?.trim();

            if (musculo && MUSCLE_MAP[musculo]) {
                zonas.add(MUSCLE_MAP[musculo]);
            } else {
                console.warn(`⚠️ Músculo no reconocido: "${musculo}"`);
            }
        });
    });

    return Array.from(zonas);
}
