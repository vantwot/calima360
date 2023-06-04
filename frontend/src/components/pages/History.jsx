//librerias
import React from 'react';
import Header from '../Home/Header';
import Navegator from '../profile/Navegator';
import Section from '../history/Section';
import { useNavigate } from 'react-router-dom';


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
    //variable para redireccionar
    const history =  useNavigate();

    //funcion para redireccionar
    const handleCerrarSesion = (target,pathBack) => {
        history(target, {  state: { pathBack } });
    }

    //el poderosisimo useEffect
    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);


    //retorna el componente
    return (
        <>
            <Header login={true} />
            <div className='_container_primary_profile'>
                <Navegator />
                <Section title='Historia' >
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

export default History;