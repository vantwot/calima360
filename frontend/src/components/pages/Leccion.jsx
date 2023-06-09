import React from "react";
import Header from "../Home/Header";
import RenderSections from "../utils/RenderSections";
import Verificate from "../utils/verificate";


const DATA_HISTORY = [
    {
        title: 'ORFEBRERÍA',
        img: 'orfebreria.svg',
        target: '/profile/leccion/orfebreria',
        disabled: true,
        stateQuestion: true,
        type: 2
    },
    {
        title: 'HISTORIA',
        img: 'historia.svg',
        target: '/profile/leccion/historia',
        disabled: true,
        stateQuestion: true,
        type: 2
    },
    {
        title: 'MITOLOGÍA',
        img: 'mitologia.svg',
        target: '/profile/leccion/mitologia',
        disabled: true,
        stateQuestion: true,
        type: 2
    }
]


/**
 * @description Componente 
 * @returns Componente Leccion
 */
const Leccion = () => {
    //render component
    return (
        <>
            <Verificate target={"/profile/leccion"} />
            <Header login={true} />
            <RenderSections title="LECCIONES" content_section={DATA_HISTORY} />
        </>
    );

}

export default Leccion;