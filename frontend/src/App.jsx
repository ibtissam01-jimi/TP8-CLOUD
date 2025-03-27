import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';

const App = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    return (
        <div>
            <h1>Gestion des Utilisateurs</h1>
            <UserForm refresh={() => setRefreshKey(prev => prev + 1)} />
            <UserList onUserSelect={setSelectedUser} refresh={refreshKey} />
            <UserDetails user={selectedUser} />
        </div>
    );
};

export default App;
