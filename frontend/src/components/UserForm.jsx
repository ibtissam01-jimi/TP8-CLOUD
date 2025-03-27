import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ refresh }) => {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3010/users', formData)
            .then(() => {
                refresh();
                setFormData({ name: '', email: '' });
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Ajouter un Utilisateur</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nom"  value={formData.name}  onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                <input  type="email" placeholder="Email"  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}  required />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default UserForm;
