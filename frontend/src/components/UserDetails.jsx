import React from 'react';

const UserDetails = ({ user }) => {
    if (!user) return <p>Sélectionnez un utilisateur pour voir les détails.</p>;

    return (
        <div>
            <h2>Détails de l'Utilisateur</h2>
            <p>Nom: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetails;
