// ✅ src/services/api.js
import axios from "axios";

// 🌍 PRODUCCIÓN Render
const API_URL = "https://treebars-backend-666.onrender.com/api"; // ⬅️ URL de tu backend en Render

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        config.headers["Content-Type"] = "application/json";
        return config;
    },
    (error) => Promise.reject(error)
);

// ✅ Obtener todas las rutinas
export const obtenerRutinas = async () => {
    try {
        const response = await api.get("/routines");
        return response.data;
    } catch (error) {
        console.error("❌ Error al obtener rutinas:", error.response?.data || error.message);
        return [];
    }
};

// ✅ Crear una rutina
export const crearRutina = async (rutina) => {
    try {
        const response = await api.post("/routines", rutina);
        return response.data;
    } catch (error) {
        console.error("❌ Error al crear rutina:", error.response?.data || error.message);
        alert("⚠️ Error creating routine: " + (error.response?.data?.message || error.message));
        throw error;
    }
};

// ✅ Eliminar una rutina
export const eliminarRutina = async (id) => {
    try {
        await api.delete(`/routines/${id}`);
    } catch (error) {
        console.error("❌ Error al eliminar rutina:", error.response?.data || error.message);
        throw error;
    }
};

// ✅ Actualizar una rutina
export const actualizarRutina = async (id, rutinaActualizada) => {
    try {
        const response = await api.put(`/routines/${id}`, rutinaActualizada);
        return response.data;
    } catch (error) {
        console.error("❌ Error al actualizar rutina:", error.response?.data || error.message);
        throw error;
    }
};

export default api;
