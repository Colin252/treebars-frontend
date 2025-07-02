// src/utils/tokenUtils.js
export function getTokenData() {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload;
    } catch (error) {
        console.error("❌ Error al decodificar el token:", error);
        return null;
    }
}

export function isTokenValid() {
    const data = getTokenData();
    if (!data || !data.exp) return false;

    const currentTime = Math.floor(Date.now() / 1000); // en segundos
    return data.exp > currentTime;
}
