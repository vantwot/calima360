//import libraries
import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react'


/**
 * @description Renderiza la figura 3d
 * @returns Componente Figure3d
 */
const Figure3d = ({
    handleModalIn,
    Children_3d
}) => {

    const directionalLightRef1 = useRef();
    const directionalLightRef2 = useRef();

    const hadlePopUp = () => {
        console.log('handleModalIn', handleModalIn);
        handleModalIn();
    }

    return (
        <>
            <OrbitControls makeDefault minDistance={20} maxDistance={30} />
            <directionalLight ref={directionalLightRef1} castShadow={true} position={[0, 20, 0]} intensity={0.3} />
            <directionalLight ref={directionalLightRef2} castShadow={true} position={[0, -10, 0]} intensity={0.1} />
            <ambientLight intensity={0.5} />
            {
                React.cloneElement(Children_3d, { onClick: hadlePopUp })
            }
        </>
    )

}


export default Figure3d;