//import library
import React from "react";
import Header from '../Home/Header';
import RenderSections from '../utils/RenderSections';
import Verificate from '../utils/verificate';

//Informacion de la seccion mitologia
const DATA_HISTORY = [
    {
        title: 'ARTE',
        img: 'arte_.svg',
        target: '/arte-figura',
        disabled: true,
        pathBack: '/profile/leccion/orfebreria'
    },
    {
        title: 'CULTURA',
        img: 'cultura_.svg',
        target: '/cultura-figura',
        disabled: true,
        pathBack: '/profile/leccion/orfebreria'
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