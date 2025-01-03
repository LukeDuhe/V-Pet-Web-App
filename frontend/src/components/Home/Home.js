import React, { useState } from 'react';
import styles from './Home.css';
import Login from '../Login/Login';

function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const getTime = () => {
        document.getElementById('time').innerText = new Date().toLocaleTimeString();
    };

    const handleLogin = (user) => {
        setIsLoggedIn(true);
        setUsername(user);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
    };

    if (!isLoggedIn) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Personal Web Application</h1>
                <div className={styles.userInfo}>
                    Welcome, {username}!
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <p className={styles.text}>Click the button below to get the current time.</p>
            <button className={styles.button} onClick={getTime}>Get Time</button>
            <p id="time" className={styles.time}></p>
        </div>
    );
}

export default Home;