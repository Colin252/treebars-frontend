import React from 'react';
import { useNavigate } from 'react-router-dom';

function CerrarSesion() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // 🔐 Eliminar datos de sesión
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');

        // 🚪 Redirige al login
        navigate('/login');
    };

    return (
        <button
            onClick={handleLogout}
            style={{
                padding: '10px 20px',
                backgroundColor: '#e53935',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '20px',
                fontWeight: 'bold'
            }}
        >
            🔒 Cerrar sesión
        </button>
    );
}

export default CerrarSesion;
