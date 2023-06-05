//librerias
import React from 'react';
import Header from '../Home/Header';
import RenderSections from '../utils/RenderSections';


//imformacion de las opciones de la seccion historia
const DATA_HISTORY = [
    {
        title: 'Vida',
        img: 'vida.svg',
        target: '/model-vida',
        disabled: true,
        pathBack: '/profile/leccion/historia'
    },
    {
        title: 'Religión',
        img: 'religion.svg',
        target: '/model-religion',
        disabled: true,
        pathBack: '/profile/leccion/historia'
    }
]

/**
 * @description Renderiza las opciones de la seccion historia
 * @returns History Component
 */
const History = () => {

    //retorna el componente
    return (
        <>
            <Header login={true} />
            <RenderSections title="Historia" content_section={DATA_HISTORY} />
        </>
    );

};

export default History;