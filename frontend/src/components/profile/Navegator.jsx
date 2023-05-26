//importar Librerias
import React from 'react';
import { useNavigate } from 'react-router-dom';
const images_content = require.context("../../assets/item_menu/", true);


const ICONS_NAV = [
    {
        icon: 'carnet.svg',
        target: '/profile'
    },
    {
        icon: 'house.svg',
        target: '/profile/leccion'
    }
    // 'quiz.svg',
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
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Navegator