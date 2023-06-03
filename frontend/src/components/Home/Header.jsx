/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/

// Importar React desde la biblioteca 'react'
import React from 'react';

// Importar el logo desde el archivo '../../assets/logo/LOGO.png'
import logo_ from '../../assets/logo/LOGO.png';

// Definición del componente funcional Header
const Header = (props) => {

    // Desestructurar las propiedades recibidas
    const {
        children
    } = props;
    
    // Renderizar el encabezado
    return (
        <>
           <header className="_header_container">
                <div>
                    <img src={logo_} alt="logo" />
                </div>
                {children}
           </header>
        </>
    );
}

// Exportar el componente Header como el valor predeterminado del módulo
export default Header;
