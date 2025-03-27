import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = ({ onUserSelect, refresh }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, [refresh]);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3010/users/${id}`)
            .then(() => refresh())
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Liste des Utilisateurs</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.name} - {user.email}
                        <button onClick={() => onUserSelect(user)}>Détails</button>
                        <button onClick={() => handleDelete(user._id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
