import React from 'react';
import styles from './Home.module.css';

function Home() {
    const getTime = () => {
        document.getElementById('time').innerText = new Date().toLocaleTimeString();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Personal Web Application</h1>
            <p className={styles.text}>Click the button below to get the current time.</p>
            <button className={styles.button} onClick={getTime}>Get Time</button>
            <p id="time" className={styles.time}></p>
        </div>
    );
}

export default Home;