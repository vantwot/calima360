//importar Librerias
import React from 'react';
import Navegator from './Navegator';
import InfoProfile from './InfoProfile';

const DATA = Object.freeze({
    name: 'Juan Sebastián',
    apellido: 'Diaz Casas',
    email: 'juan.diaz@correounivalle.edu.co',
    img_url: 'profile_default.svg',

})


/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const ContainerProfile = () => {

    React.useEffect(() => {
         document.getElementById('root').classList.add('remove_gap');
    }, []);

    return (
        <>
           <div className='_container_primary_profile'>
                <Navegator />
                <InfoProfile content={DATA} />
            </div>
        </>
    )
}

export default ContainerProfile;