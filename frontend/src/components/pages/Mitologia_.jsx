//librerias
import React from 'react';
import Header from '../Home/Header';
import Navegator from '../profile/Navegator';
import icon_profile from '../../assets/logo/profile_default.svg';
import Section from '../history/Section';
import { useNavigate } from 'react-router-dom';

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

    const history =  useNavigate();

    const handleCerrarSesion = (target,pathBack) => {
        history(target, {  state: { pathBack } });
    }

    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);

    return (
        <>
            <Header login={true} />
            <div className='_container_primary_profile'>
                <Navegator />
                <Section title='Mitologia' >
                    {
                        DATA_HISTORY.map((item, index) => {
                            return (
                                <div onClick={ () => { item.disabled && handleCerrarSesion(item.target, item.pathBack) }}  key={index} className='_container_history_section'>
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

};

export default Mitologia_;