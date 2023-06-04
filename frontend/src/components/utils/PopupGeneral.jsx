//import libraries
import React from 'react';
import closeIcon from '../../assets/item_menu/close.svg';

/**
 * @description Renderiza el popup general
 * @returns Componente PopupGeneral
 */
const PopupGeneral = ({
    handleCloseIn,
    children_
}) => {
      
      return (
            <>
              <div className='_popup_3d_'>
                   <div className='_container_popup_3d'>
                        <a onClick={handleCloseIn} className='_close_popup_'>
                                    <img src={closeIcon} alt="close" />
                        </a>
                        {children_}
                    </div>
              </div>
            </>
      )

}

export default PopupGeneral;