//importar Librerias
import React from 'react';
const images_content = require.context("../../assets/item_menu/", true);

const ICONS_NAV = [
    'house.svg',
    'carnet.svg',
    'quiz.svg',
]


/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const Navegator = () => {
    return (
        <div className='_container_navegator'>
            {
                ICONS_NAV.map((icon, index) => {

                    return (
                        <div key={index} className='_item_navegator'>
                            <a>
                                <img src={images_content(`./${icon}`)} alt="icon" />
                            </a>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Navegator