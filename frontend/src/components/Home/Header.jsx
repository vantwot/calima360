/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/

// Importar React desde la biblioteca 'react'
import React from 'react';

// Importar el logo desde el archivo '../../assets/logo/LOGO.png'
import logo_ from '../../assets/logo/LOGO.png';
import Hamburger from '../utils/Hamburger';
// Importar el logo desde el archivo '../../assets/logo/profile_default.svg'
import icon_profile from '../../assets/logo/profile_default.svg';

//importar useNavigate para redireccionar a otra ruta
import { useNavigate } from 'react-router-dom';


// Definición del componente funcional Header
const Header = (props) => {

    // Desestructurar las propiedades recibidas
    const {
        children,
        login,
    } = props;

    const login_ = login? login : false;

    //navigate para redireccionar a otra ruta
    const history =  useNavigate();

    //variabless de estado
    const [ active_profile, setActiveProfile ] = React.useState(false);
    const [ active_hamburger, setActiveHamburger ] = React.useState(false);

    //funciones 
    const handleProfile = () => {
        setActiveProfile(!active_profile);
    }

    const handleCerrar = (target) => {
        sessionStorage.removeItem('token');
        document.getElementById('root').classList.remove('remove_gap');
        history(target);
    }

    React.useEffect(() => {

        //sacar el
        //si el ancho de la pantalla es menor o 
        //igual a 768px entonces activa el hamburger
        if (window.innerWidth <= 768) {
            setActiveHamburger(true);
        }

        //si el ancho de la pantalla es mayor a 768px entonces
        //desactiva el hamburger
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                setActiveHamburger(true);
            } else {
                setActiveHamburger(false);
            }
        })

    }, [])


    // Renderizar el encabezado
    return (
        <>
           <header className="_header_container">
                <div className='_container_mobile_menu'>
                    { login_ && active_hamburger && <Hamburger />}
                    <img src={logo_} alt="logo" />
                </div>
                {children}
                {
                    //si login es true entonces renderiza el componente
                    (login_) &&
                    <div className='_container_profile'>

                        <a onClick={handleProfile}>
                            <img src={icon_profile} alt="profile" />                        
                        </a>
                        { active_profile &&
                            <div className='_container_options'>
                                    <a onClick={ () => { handleCerrar('/') }}>Cerrar Sesion</a>
                            </div>
                        }

                 </div>
                }
           </header>
        </>
    );
}

// Exportar el componente Header como el valor predeterminado del módulo
export default Header;
