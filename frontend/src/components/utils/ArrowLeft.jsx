//import libraries
import React from 'react';
import backArrrow from '../../assets/item_menu/backArrow.svg';
import Navegator from '../profile/Navegator'
import {  
    useLocation,
    useNavigate
} from 'react-router-dom';

const ArrowLeft = ({
    path,
}) => {

    //variables
    const history =  useNavigate();

    //funciones
    const handlePathBack = () => {
        history(path);
    }

    //render component
    return (
        <>
            <div className='_arrow_left_back'>
                    <a onClick={handlePathBack}>
                        <img src={backArrrow} alt="back" />
                    </a>
            </div>

        </>
    )

}

const usePathtLocation = () => {
    //logica para el pathBack
    const location = useLocation();
    return location.state?.pathBack;
}

const RenderTextClick = () => {
    return (
        <div className='_text_left_back'>
            <strong>Dar click a la figura!!!</strong>
        </div>
    )
}

const RenderContentFigure3D = ({ path }) => {
    return (
        <>
            <ArrowLeft path={path} />
            <RenderTextClick />
            <Navegator />
        </>
    )
}


export {
    usePathtLocation,
    ArrowLeft,
    RenderTextClick,
    RenderContentFigure3D
}