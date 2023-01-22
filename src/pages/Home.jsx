import React from 'react';
import Dashboard from '../container/Dashboard';
import Profil from "../container/Profil";
import Fitness from '../container/Fitness';

const Home = () => {
    return (
        <Fitness>
            <Dashboard/>
            <Profil/>
        </Fitness>
    )
}

export default Home