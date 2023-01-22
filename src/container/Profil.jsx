import React, { useState, useEffect } from 'react';
import Age from "../components/Age";
import Height from '../components/Height';
import Weight from '../components/Weight';
import Gender from '../components/Gender';
import Bmi from "../components/Bmi";
import Time from "../components/Time";
import "../styles/profil.scss";
import useGetInfoUser from '../hooks/useGetInfoUser';

const API = "https://dummyjson.com/users/";

const Profil = () => {

    const persona = useGetInfoUser(API);

    return (
        <aside className="profil-container">
        <h1 className="title-profi title-basic">
            Personal Information
        </h1>
        <img className="image-profil" src={persona.image} alt="user" />
        <div className="info-profil">
            <p className="name-user">{persona.firstName} {persona.lastName}</p>
            <Age persona = {persona}/>
            <Height persona = {persona}/>
            <Weight persona = {persona}/>
            <Gender persona = {persona}/>
            <Bmi persona = {persona}/>
            <Time/>
        </div>

        </aside>
    )
}

export default Profil