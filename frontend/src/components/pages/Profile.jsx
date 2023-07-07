//importar Librerias
import React from 'react';
import Header from '../Home/Header';
import ContainerProfile from '../profile/ContainerProfile';
import Verificate from '../utils/verificate';

/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const Profile = () => {

    //redireccionar componente
    return (
        <> 
            <Verificate target={"/profile"} />
            <Header login={true} />
            <ContainerProfile />
        </>
    )

};

export default Profile;