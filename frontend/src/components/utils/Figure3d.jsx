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
    luzFigura2,
    luzFigura3,
    luzFigura4,
    typeLight,
    typeLight2,
    typeLight3,
    typeLight4
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
            <HelperLight3d
                   castShadow={false} 
                   position={(luzFigura2?.position) || [0, -10, 0]} 
                   intensity={(luzFigura2?.intensity) || 0.1}
                   typeLight={typeLight2 || 0}
            />
             <HelperLight3d
                   castShadow={false} 
                   position={(luzFigura3?.position) || [0, -10, 0]} 
                   intensity={(luzFigura3?.intensity) || 0.1}
                   typeLight={typeLight3 || 0}
            />
             <HelperLight3d
                   castShadow={false} 
                   position={(luzFigura4?.position) || [0, -10, 0]} 
                   intensity={(luzFigura4?.intensity) || 0.1}
                   typeLight={typeLight4 || 0}
            />
            <ambientLight intensity={0.5} />
            {
                React.cloneElement(Children_3d, { onClick: hadlePopUp })
            }
        </>
    )

}


export default Figure3d;