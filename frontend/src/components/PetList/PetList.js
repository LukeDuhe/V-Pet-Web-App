import { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Box, Card, CardMedia, CardContent, CircularProgress, Alert } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../Login/Login';

function PetList() {
    const [pets, setPets] = useState([]);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setSidebarOpen(false);
    };

    useEffect(() => {
        const fetchPets = async () => {
            try {
                setLoading(true);

                const response = await fetch('http://192.168.0.229:3001/api/v1/pets');
                console.log('API Response:', response); // Debug log
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                console.log('Pets data:', data); // Debug log
                setPets(data);
            } catch (err) {
                console.error('Fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPets();
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

            <Container sx={{
                py: 4,
                backgroundColor: 'primary.light',
                width: {
                    xs: '90%',    // wider on mobile
                    sm: '80%',    // tablet
                    md: '50%'     // desktop
                },
                mx: 'auto',      // center container
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography variant="h4" gutterBottom>
                    My Pets
                </Typography>

                {loading && <CircularProgress />}

                {error && (
                    <Alert severity="error">
                        Error loading pets: {error}
                    </Alert>
                )}

                {!loading && !error && pets.length === 0 && (
                    <Typography>No pets found</Typography>
                )}

                {!loading && !error && pets.map(pet => (
                    <Card key={pet.id} sx={{
                        mb: 2,
                        width: '100%',  // cards take full container width
                        minWidth: 280   // minimum width for readability
                    }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={pet.imageUrl || 'bear-pet.gif'}
                            alt={pet.name}
                            sx={{
                                objectFit: 'contain',
                                backgroundColor: 'background.paper'
                            }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'bear-pet.gif';
                            }}
                        />
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                {pet.name}
                            </Typography>
                            <Typography variant="body1">
                                Species: {pet.species}
                            </Typography>
                            <Typography variant="body1">
                                Happiness: {pet.happiness}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Container>
        </div>
    );
}

export default PetList;
