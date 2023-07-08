//importar Librerias
import React from 'react';
import Editar from '../utils/Editar';
const images_content = require.context("../../assets/avatar/", true);


const DATA_PROFILE = [
    {
        name: 'HISTORIA',
        whoami: 'historia',
    },
    {
        name: 'MITOLOGÍA',
        whoami: 'mitologia',
    },
    {
        name: 'ORFEBRERÍA',
        whoami: 'orfebreria',
    }
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
        img_url,
        cuestonario,
    } = props.content;
   
    const [porcentaje, setPorcentaje] = React.useState({
        'historia': 0,
        'mitologia': '0',
        'orfebreria': '0',
        cuestonario_active: false
    });

    const [isEdit , SetEdit] = React.useState(false)


    const onClick = () => {
        SetEdit(true)
    }


    React.useEffect(() => {

        if (cuestonario?.length > 0) {
            setPorcentaje(cuestonario[0]);
        }

    }, [cuestonario]);

    return (
        
        <div className="_conatiner_info-profile">
            <div className='_container_photo_profile'>
                <img src={images_content(`./${img_url}`)} alt="profile" />
            </div>
            <div className='_conatiner_info_data'>
                  <div className='_item_info'>
                        <span>NOMBRE</span>
                        <h2>{name}</h2>
                  </div>
                  <div className='_item_info'>
                        <span>APELLIDO</span>
                        <h2>{apellido}</h2>
                  </div>
                  <div className='_item_info'>
                        <span>CORREO</span>
                        <h1>{email}</h1>
                  </div>
            
                  <a onClick={onClick} className='_edit_action'>EDITAR</a>
            </div>
            {
                isEdit && <Editar open_={isEdit} SetEdit={SetEdit} />
            }
        </div>
        
    )

}


export default InfoProfile;