//import
import React from 'react';
import logo_ from '../../assets/logo/LOGO.png';

/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const Header = (props) => {

    const {
        children
    } = props;
    
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

export default Header;