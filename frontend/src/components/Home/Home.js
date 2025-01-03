import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../Login/Login';

function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogin = (user) => {
        setIsLoggedIn(true);
        setUsername(user);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setSidebarOpen(false);
    };

    if (!isLoggedIn) {
        return <Login onLogin={handleLogin} />;
    }

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

            <div style={{ padding: 20 }}>
                <p>Click the button below to get the current time.</p>
                <button onClick={() => {
                    document.getElementById('time').innerText = new Date().toLocaleTimeString();
                }}>
                    Get Time
                </button>
                <p id="time"></p>
            </div>
        </div>
    );
}

export default Home;