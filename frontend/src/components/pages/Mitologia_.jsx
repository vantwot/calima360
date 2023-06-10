//librerias
import React from 'react';
import Header from '../Home/Header';
import RenderSections from '../utils/RenderSections';
import Verificate from '../utils/verificate';

//Informacion de la seccion mitologia
const DATA_HISTORY = [
    {
        title: 'Mitología',
        img: 'mitologia_.svg',
        target: '/model-mitologia',
        disabled: true,
        pathBack: '/profile/leccion/mitologia'
    }
]


/**
 * @description Renderiza las opciones de la seccion mitologia
 * @returns Mitologia Component
*/
const Mitologia_ = () => {

    return (
        <>
            <Verificate target={"/profile/leccion/mitologia"} />
            <Header login={true} />
            <RenderSections content_section={DATA_HISTORY} title='Mitología' />
        </>
    );

};

export default Mitologia_;