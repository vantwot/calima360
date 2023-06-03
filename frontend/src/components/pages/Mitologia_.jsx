//librerias
import React from 'react';
import Header from '../Home/Header';
import Navegator from '../profile/Navegator';
import icon_profile from '../../assets/logo/profile_default.svg';
import Section from '../history/Section';
import { useNavigate } from 'react-router-dom';

const DATA_HISTORY = [
    {
        title: 'Mitología',
        img: 'mitologia_.svg',
        target: '/model-mitologia',
        disabled: true,
        pathBack: '/profile/leccion/mitologia'
    }
]


const Mitologia_ = () => {

    const history =  useNavigate();
    const [ active_profile, setActiveProfile ] = React.useState(false);

    const handleProfile = () => {
        setActiveProfile(!active_profile);
    }

    const handleCerrarSesion = (target,pathBack) => {
        history(target, {  state: { pathBack } });
    }

    const handleCerrar = (target) => {
        document.getElementById('root').classList.remove('remove_gap');
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
                        { active_profile &&
                          <div className='_container_options'>
                                <a onClick={ () => { handleCerrar('/') }}>Cerrar Sesion</a>
                          </div>
                        }
                    </a>
                 </div>
            </Header>
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