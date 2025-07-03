import axios from "axios";

// 🌍 PRODUCCIÓN Render
const API_URL = "https://treebars-backend-666.onrender.com/api/"; // con / final


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

// ✅ Registro de usuario
export const registrarUsuario = async (usuario) => {
    try {
        const response = await api.post("/auth/register", usuario);
        return response.data;
    } catch (error) {
        console.error("❌ Error al registrar usuario:", error.response?.data || error.message);
        throw error;
    }
};

// ✅ Login de usuario
export const iniciarSesion = async (credenciales) => {
    try {
        const response = await api.post("/auth/login", credenciales);
        return response.data;
    } catch (error) {
        console.error("❌ Error al iniciar sesión:", error.response?.data || error.message);
        throw error;
    }
};

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
