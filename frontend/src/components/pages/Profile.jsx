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

    const history =  useNavigate();
    const [ active_profile, setActiveProfile ] = React.useState(false);

    const handleProfile = () => {
        setActiveProfile(!active_profile);
    }

    // //evento que cuando se de click por fuera del menu se cierre
    // React.useEffect(() => {

    //     document.addEventListener('click', (e) => {
    //         console.log(e.currentTarget.className !== '_container_options');
    //         // if(e.target.className !== '_container_options' && e.target.className !== '_container_profile'){
    //         //     setActiveProfile(false);
    //         // }
    //     });

    // }, []);

    const handleCerrarSesion = () => {
        document.getElementById('root').classList.remove('remove_gap');
        history('/');
    }

    return (
        <>
            <Header>
                <div className='_container_profile'>
                    <a onClick={handleProfile}>
                        <img src={icon_profile} alt="profile" />                        
                    </a>
                    { active_profile &&
                          <div className='_container_options'>
                                <a onClick={handleCerrarSesion}>Cerrar Sesion</a>
                          </div>
                    }
                 </div>
            </Header>
            <ContainerProfile />
        </>
    )

};

export default Profile;