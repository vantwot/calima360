//import libraries
import React from 'react';
import menu from '../../assets/item_menu/menuu.svg';
import close from '../../assets/item_menu/close.svg';
import Navegator from '../profile/Navegator';

const Hamburger = () => {

    const [ active_hamburger, setActiveHamburger ] = React.useState(false);

    const handleHamburger = () => {
        setActiveHamburger(!active_hamburger);
    }

     return (
        <>
            <div className='_hamburger_container'>
                <a onClick={handleHamburger}>
                    <img src={menu} />
                </a>
                {
                active_hamburger &&
                <div className='_hamburger_full_height'>
                    <Navegator />
                    <a onClick={handleHamburger}>
                        <img src={close} />
                    </a>
                </div>
                }
            </div>
        </>
     )
};

export default Hamburger;