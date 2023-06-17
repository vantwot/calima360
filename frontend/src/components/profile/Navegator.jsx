//importar Librerias
import React from 'react';
import { useNavigate } from 'react-router-dom';
const images_content = require.context("../../assets/item_menu/", true);


const ICONS_NAV = [
    {
        icon: 'carnet.svg',
        target: '/profile',
        title: 'Perfil'
    },
    {
        icon: 'house.svg',
        target: '/profile/leccion',
        title: 'Lecciones'
    },
    {
        icon: 'quiz.svg',
        target: '/profile/quiz',
        title: 'Quiz'
    }
]

/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const Navegator = () => {

    const history =  useNavigate();

    const handleNavagator = (target) => {
        history(target);
    }

    return (
        <div className='_container_navegator'>
            {
                ICONS_NAV.map((item, index) => {

                    return (
                        <div key={index} className='_item_navegator'>
                            <a onClick={() => { handleNavagator(item.target)}}>
                                <img src={images_content(`./${item.icon}`)} alt="icon" />
                            </a>
                            <div className='_text_hover_'>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Navegator