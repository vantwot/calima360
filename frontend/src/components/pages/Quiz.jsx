import React from "react";
import Header from "../Home/Header";
import Navegator from '../profile/Navegator';
import icon_profile from '../../assets/logo/profile_default.svg';
import Section from '../history/Section';
import closeIcon from '../../assets/item_menu/close.svg';
import { useNavigate } from 'react-router-dom';


const DATA_HISTORY = [
    {
        title: 'ORFEBRERÍA',
        img: 'orfebreria.svg',
        target: '',
        disabled: false
    },
    {
        title: 'HISTORIA',
        img: 'historia.svg',
        target: '',
        disabled: true
    },
    {
        title: 'MITOLOGÍA',
        img: 'mitologia.svg',
        target: '',
        disabled: false
    }
]


const Quiz = () => {

    const history =  useNavigate();

    const [ active_profile, setActiveProfile ] = React.useState(false);
    const [ active_quiz, setActiveQuiz ] = React.useState(false);

    const handleProfile = () => {
        setActiveProfile(!active_profile);
    }

    const handleCerrarSesion = (target) => {
        history(target);
    }


    const handleCerrar = (target) => {
        document.getElementById('root').classList.remove('remove_gap');
        history(target);
    }

    const handleClose_quiz = () => {
        setActiveQuiz(!active_quiz);
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
                                <a onClick={ () => { handleCerrar('/') }}>Cerrar Sesion</a>
                          </div>
                    }
                 </div>
            </Header>
            <div className='_container_primary_profile'>
                <Navegator />
                <Section title='Cuestionario' >
                    {
                        DATA_HISTORY.map((item, index) => {
                            return (
                                <div onClick={ () => { item.disabled && handleClose_quiz() }} disabled={item.disabled} key={index} className='_container_history_section'>
                                    <img src={require(`../../assets/item_menu/${item.img}`)} alt="icon" />
                                    <p>{item.title}</p>
                                </div>
                            )
                        })

                    }
                    {active_quiz &&
                        <div className='_popup_3d_'>
                            <div className='_container_popup_3d'>
                                <a onClick={handleClose_quiz} className='_close_popup_'>
                                    <img src={closeIcon} alt="close" />
                                </a>
                                <h1>HISTORIA</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                    Nullam sed lectus elit. Donec sed magna mi. Nullam fermentum metus vitae risus  <br />
                                    feugiat curae; Sed euismod bibendum odio at semper.
                                </p>
                                <ol style={{
                                    listStyle: 'upper-latin'
                                }}>
                                    <li> <input type="radio" name="opcion" />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li> <input type="radio" name="opcion" />Nullam sed lectus elit. Donec sed magna mi. Nullam fermentum metus vitae risus feugiat curae; Sed euismod bibendum odio at semper.</li>
                                    <li> <input type="radio" name="opcion"  />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li> <input type="radio" name="opcion"  />Nullam sed lectus elit. Donec sed magna mi. Nullam fermentum metus vitae risus feugiat curae; Sed euismod bibendum odio at semper.</li>
                                </ol>
                            </div>
                        </div>
                        }
                </Section>
            </div>
        </>
    );

}

export default Quiz;