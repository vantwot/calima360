import React from 'react';
import { OrbitControls} from '@react-three/drei';
import { PectoralOrnamental } from './PectoralOrnamental';
import { useRef } from 'react'

const Mitologia3D = (props) => {
    const directionalLightRef1 = useRef();
    const directionalLightRef2 = useRef();

    const hadlePopUp = () => {
        props.handleModalIn();
    }

    return (
        <>
            <OrbitControls makeDefault minDistance={20} maxDistance={30} />
            <directionalLight ref={directionalLightRef1} castShadow={true} position={[0, 20, 0]} intensity={0.3} />
            <directionalLight ref={directionalLightRef2} castShadow={true} position={[0, -10, 0]} intensity={0.1} />
            <ambientLight intensity={0.5} />

            <PectoralOrnamental scale="0.25"  onClick={hadlePopUp} />
        </>
    );
};

export default Mitologia3D;
