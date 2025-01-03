import { useNavigate } from 'react-router-dom';
import { Home, Pets, ExitToApp } from '@mui/icons-material';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';

function Sidebar({ open, onClose, onLogout, username }) {
    const navigate = useNavigate();

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <List sx={{ width: 250 }}>
                <ListItem>
                    <ListItemText primary={`Welcome, ${username}`} />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => {
                    navigate('/');
                    onClose();
                }}>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={() => {
                    navigate('/pets');
                    onClose();
                }}>
                    <ListItemIcon>
                        <Pets />
                    </ListItemIcon>
                    <ListItemText primary="My Pets" />
                </ListItem>
                <ListItem button onClick={onLogout}>
                    <ListItemIcon>
                        <ExitToApp />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default Sidebar;