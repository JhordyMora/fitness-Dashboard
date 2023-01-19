import React from 'react';
import Routine from './Routine';
import Weather from "./Weather";

import "../styles/dashboard.scss";

const Dashboard = () => {
    return (
        <main className="dashboard-container">
            <h1 className="main-title title-basic">Fitness Dashboard</h1>
            <Routine/>
            <Weather/>
        </main>

    )
}

export default Dashboard