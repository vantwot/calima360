//importar Librerias
import React, { useEffect } from 'react';
import Header from '../Home/Header';
import icon_profile from '../../assets/logo/profile_default.svg';
import ContainerProfile from '../profile/ContainerProfile';
import { useNavigate } from 'react-router-dom';
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