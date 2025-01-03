import { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../Login/Login';

function PetList() {
    const [pets, setPets] = useState([]);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setSidebarOpen(false);
    };

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/pets')
            .then(response => response.json())
            .then(data => setPets(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (


        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Personal Web Application
                    </Typography>
                </Toolbar>
            </AppBar>

            <Sidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                onLogout={handleLogout}
                username={username}
            />

            <div>
                <h2>My Pets</h2>
                {pets.map(pet => (
                    <div key={pet.id}>
                        <h3>{pet.name}</h3>
                        <p>Species: {pet.species}</p>
                        <p>Happiness: {pet.happiness}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PetList;
