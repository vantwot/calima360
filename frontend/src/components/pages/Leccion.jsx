import React from "react";
import Header from "../Home/Header";
import Navegator from '../profile/Navegator';
import Section from '../history/Section';
import { useNavigate } from 'react-router-dom';


const DATA_HISTORY = [
    // {
    //     title: 'ORFEBRERÍA',
    //     img: 'orfebreria.svg',
    //     target: '/profile/leccion/orfebreria',
    //     disabled: false
    // },
    {
        title: 'HISTORIA',
        img: 'historia.svg',
        target: '/profile/leccion/historia',
        disabled: true
    },
    {
        title: 'MITOLOGÍA',
        img: 'mitologia.svg',
        target: '/profile/leccion/mitologia',
        disabled: true
    }
]


/**
 * @description Componente 
 * @returns Componente Leccion
 */
const Leccion = () => {

    //navigate para redireccionar a otra ruta
    const history =  useNavigate();

    const handleCerrarSesion = (target) => {
        history(target);
    }


    //el todo poderoso useEffect
    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);

    return (
        <>
            {/* Header Component */}
            <Header login={true} />
            <div className='_container_primary_profile'>
                <Navegator />
                <Section title='LECCIONES' >
                    {
                        DATA_HISTORY.map((item, index) => {
                            return (
                                <div onClick={ () => { item.disabled && handleCerrarSesion(item.target) }} disabled={item.disabled} key={index} className='_container_history_section'>
                                    <img src={require(`../../assets/item_menu/${item.img}`)} alt="icon" />
                                    <p>{item.title}</p>
                                </div>
                            )
                        })

                    }
                </Section>
            </div>
        </>
    );

}

export default Leccion;