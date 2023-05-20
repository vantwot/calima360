//importar Librerias
import React from 'react';
import Header from '../Home/Header';
import icon_profile from '../../assets/logo/profile_default.svg';
import ContainerProfile from '../profile/ContainerProfile';

/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const Profile = () => {

    return (
        <>
            <Header>
                <div className='_container_profile'>
                    <a>
                        <img src={icon_profile} alt="profile" />
                    </a>
                 </div>
            </Header>
            <ContainerProfile />
        </>
    )

};

export default Profile;