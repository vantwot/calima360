//import libraries
import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react'
import HelperLight3d from './HelperLight3d';

/**
 * @description Renderiza la figura 3d
 * @returns Componente Figure3d
 */
const Figure3d = ({
    handleModalIn,
    Children_3d,
    luzFigura,
    typeLight
}) => {

    const hadlePopUp = () => {
        console.log('handleModalIn', handleModalIn);
        handleModalIn();
    }

    return (
        <>
            <OrbitControls makeDefault minDistance={20} maxDistance={30} />
            <HelperLight3d
                   castShadow={false} 
                   position={(luzFigura?.position) || [0, -10, 0]} 
                   intensity={(luzFigura?.intensity) || 0.1}
                   typeLight={typeLight || 0}
            />
            <ambientLight intensity={0.5} />
            {
                React.cloneElement(Children_3d, { onClick: hadlePopUp })
            }
        </>
    )

}


export default Figure3d;