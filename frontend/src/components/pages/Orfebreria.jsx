//import library
import Header from '../Home/Header';
import RenderSections from '../utils/RenderSections';
import Verificate from '../utils/verificate';
import React, { Component } from 'react';

//Informacion de la seccion mitologia
const DATA_HISTORY = [
    {
        title: 'ARTE',
        img: 'arte_.svg',
        target: '/arte-figura',
        disabled: true,
        pathBack: '/profile/leccion/orfebreria',
        progress: 0,
        countClick: true
    },
    {
        title: 'CULTURA',
        img: 'cultura_.svg',
        target: '/cultura-figura',
        disabled: true,
        pathBack: '/profile/leccion/orfebreria',
        progress: 0,
        countClick: true
    }
]

//import components
const Orfebreria = () => {

    return (
        <>
            <Verificate target={"/profile/leccion/orfebreria"} />
            <Header login={true} />
            <RenderSections content_section={DATA_HISTORY} title='orfebrería' />
        </>
    );

};

export default Orfebreria;