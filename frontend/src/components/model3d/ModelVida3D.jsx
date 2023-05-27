import React from 'react';
import { OrbitControls, useHelper } from '@react-three/drei';
import Model from './Vida3D';
import { useRef } from 'react'

const ModelVida3D = (props) => {
    const directionalLightRef1 = useRef();
    const directionalLightRef2 = useRef();

    const hadlePopUp = () => {
        props.handleModalIn();
    }

    return (
        <>
            <OrbitControls makeDefault minDistance={20} maxDistance={30} />
            <directionalLight ref={directionalLightRef1} castShadow={true} position={[0, 10, 0]} intensity={0.5} />
            <directionalLight ref={directionalLightRef2} castShadow={true} position={[0, -10, 0]} intensity={0.5} />
            <ambientLight intensity={0.5} />

            <Model scale="2" position={[0, 0, 0]} rotation-x={- Math.PI * 0.38} rotation-z={- Math.PI * 0.15} onClick={hadlePopUp} />
        </>
    );
};

export default ModelVida3D;
