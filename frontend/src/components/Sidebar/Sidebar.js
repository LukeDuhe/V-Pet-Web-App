import React from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';
import { Home, ExitToApp } from '@mui/icons-material';

function Sidebar({ open, onClose, onLogout, username }) {
    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <List sx={{ width: 250 }}>
                <ListItem>
                    <ListItemText primary={`Welcome, ${username}`} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
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