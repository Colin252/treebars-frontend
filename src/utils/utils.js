// src/utils/utils.js

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

    // 🔥 Ejercicios mapeados directamente
    "push ups": "pecho",
    "pull ups": "espalda",
    "squats": "piernas",
    "lunges": "piernas",
    "shoulder press": "hombros",
    "bicep curls": "biceps",
    "tricep dips": "triceps",
    "sit ups": "abdomen",
    "crunches": "abdomen",
    "glute bridges": "gluteos",
    "muscle ups": "espalda",
};

export function getActivatedZones(rutinas = []) {
    const zonas = new Set();

    rutinas.forEach((rutina) => {
        rutina.exercises?.forEach((ejercicio) => {
            const key = ejercicio?.toLowerCase()?.trim();
            const zona = MUSCLE_MAP[key];
            if (zona) {
                zonas.add(zona);
            } else {
                console.warn(`⚠️ Ejercicio no reconocido: "${key}"`);
            }
        });
    });

    return Array.from(zonas);
}
