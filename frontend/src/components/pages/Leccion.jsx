import React from "react";
import Header from "../Home/Header";
import Navegator from '../profile/Navegator';
import icon_profile from '../../assets/logo/profile_default.svg';
import Section from '../history/Section';
import { useNavigate } from 'react-router-dom';


const DATA_HISTORY = [
    {
        title: 'MITOLOGÍA',
        img: 'mitologia.svg',
        target: '/profile/leccion/mitologia',
        disabled: false
    },
    {
        title: 'ORFEBRERÍA',
        img: 'orfebreria.svg',
        target: '/profile/leccion/orfebreria',
        disabled: false
    },
    {
        title: 'HISTORIA',
        img: 'historia.svg',
        target: '/profile/leccion/historia',
        disabled: true
    }
]


const Leccion = () => {

    const history =  useNavigate();

    const [ active_profile, setActiveProfile ] = React.useState(false);

    const handleProfile = () => {
        setActiveProfile(!active_profile);
    }

    const handleCerrarSesion = (target) => {
        history(target);
    }



    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);

    return (
        <>
            <Header>
                <div className='_container_profile'>
                    <a onClick={handleProfile}>
                        <img src={icon_profile} alt="profile" />                        
                    </a>
                    { active_profile &&
                          <div className='_container_options'>
                                <a onClick={ () => { handleCerrarSesion('/') }}>Cerrar Sesion</a>
                          </div>
                    }
                 </div>
            </Header>
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