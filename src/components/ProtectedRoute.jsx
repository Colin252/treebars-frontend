import React from "react";
import { Navigate } from "react-router-dom";
import { isTokenValid } from "../utils/tokenUtils";

function ProtectedRoute({ children }) {
    const tokenValido = isTokenValid();

    if (!tokenValido) {
        localStorage.removeItem("token"); // 🔐 Limpia token vencido o inválido
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;
