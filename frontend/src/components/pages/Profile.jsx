//importar Librerias
import React from 'react';
import Header from '../Home/Header';
import icon_profile from '../../assets/logo/profile_default.svg';
import ContainerProfile from '../profile/ContainerProfile';
import { useNavigate } from 'react-router-dom';

/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const Profile = () => {

    //redireccionar componente
    return (
        <>
            <Header login={true} />
            <ContainerProfile />
        </>
    )

};

export default Profile;