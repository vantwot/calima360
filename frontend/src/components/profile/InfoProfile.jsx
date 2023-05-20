//importar Librerias
import React from 'react';
const images_content = require.context("../../assets/profile/", true);

const DATA_PROFILE = [
    'HISTORIA',
    'ORFEBRERIA',
    'MITOLOGÍA',
]

/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const InfoProfile = (props) => {

    const {
        name,
        apellido,
        email,
        img_url
    } = props.content;
    console.log(props.content);
    return (

        <div className="_conatiner_info-profile">
            <div className='_container_photo_profile'>
                <img src={images_content(`./${img_url}`)} alt="profile" />
            </div>
            <div className='_conatiner_info_data'>
                  <div className='_item_info'>
                        <span>Nombre</span>
                        <h2>{name}</h2>
                  </div>
                  <div className='_item_info'>
                        <span>APELLIDO</span>
                        <h2>{apellido}</h2>
                  </div>
                  <div className='_item_info'>
                        <span>CORREO</span>
                        <h2>{email}</h2>
                  </div>

                  <div className='_container_progress'>

                        <div className='_container_progress_item'>
                                <span>PROGRESO: </span>
                        </div>
                        {
                            DATA_PROFILE.map((item, index) => {
                                return (
                                    <div key={index} className='_container_progress_item'>
                                        <span>{item}</span>
                                        <span className='_progress_'></span>
                                        <span className='_porcentaje'>50%</span>
                                    </div>
                                )
                            })
                        }

                  </div>
                  <a className='_edit_action'>EDITAR</a>
            </div>
        </div>
        
    )

}


export default InfoProfile;