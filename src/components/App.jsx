import React from 'react';
import Dashboard from '../container/Dashboard';
import Profil from "../container/Profil";
import Fitness from '../container/Fitness';
import "../styles/global.scss";

const App = () => {
    return (
    <Fitness>
        <Dashboard></Dashboard>
        <Profil></Profil>
    </Fitness>
    )
}

export default App