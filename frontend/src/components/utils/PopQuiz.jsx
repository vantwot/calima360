//import libraries
import React, { Component } from "react";
import closeIcon from '../../assets/item_menu/close.svg';
import nextIcon from '../../assets/item_menu/next_.svg';

/**
 * @description Renderiza el popup general
 * @returns Componente PopupGeneral
*/
const PopQuiz = ({
    handleCloseIn,
    children_,
    handleNext,
    visible,
    visibleClose,
    class_
}) => {


    return (
        <>
            <div className='_popup_3d_'>
                   <div className={`_container_popup_3d _container_quiz ${class_}`}>
                        {visibleClose &&
                        <a onClick={handleCloseIn} className='_close_popup_'>
                                    <img src={closeIcon} alt="close" />
                        </a>
                        }
                        { visible && 
                          <a onClick={handleNext} className='_close_next_'>
                                    <img src={nextIcon} alt="close" />
                          </a>
                        }
                        {children_}
                    </div>
            </div>
        </>
    )

}


export default PopQuiz;