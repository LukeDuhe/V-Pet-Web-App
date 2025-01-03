import React from 'react';

function Home() {
    const getTime = () => {
        document.getElementById('time').innerText = new Date().toLocaleTimeString();
    };

    return (
        <div>
            <h1>Personal Web Application</h1>
            <p>Click the button below to get the current time.</p>
            <button onClick={getTime}>Get Time</button>
            <p id="time"></p>
        </div>
    );
}

export default Home;