import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/Register.css";
import fondo from "../assets/Registrar.png"; // Imagen cinematográfica sin texto

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'USER'
    });

    const [mensaje, setMensaje] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje('');

        const { name, email, password, role } = formData;

        if (!name || !email || !password) {
            setMensaje('⚠️ Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post(
                'https://treebars-backend-666.onrender.com/api/auth/register',
                formData
            );

            if (response.status === 200 || response.status === 201) {
                setMensaje('✅ Registered successfully!');
                setTimeout(() => navigate('/login'), 1500);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setMensaje('❌ This email is already registered.');
            } else {
                setMensaje('❌ Registration failed.');
            }
        }
    };

    return (
        <div
            className="register-container"
            style={{
                backgroundImage: `url(${fondo})`,
            }}
        >
            <h2 className="register-title">Sign Up</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                </select>
                <button type="submit">Sign Up</button>
            </form>
            {mensaje && <p className="register-message">{mensaje}</p>}
        </div>
    );
}

export default Register;
