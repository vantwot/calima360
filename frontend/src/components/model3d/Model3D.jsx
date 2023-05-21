import React from 'react';
import { OrbitControls, useHelper } from '@react-three/drei';
import Religion3D from './Religion3D';
import { useRef } from 'react'

const Model3D = () => {

    const directionalLightRef1 = useRef();
    const directionalLightRef2 = useRef();

  return (
    <>
      <OrbitControls makeDefault minDistance={20} maxDistance={30} />
      <directionalLight ref={directionalLightRef1} castShadow={true} position={[0, 20, 0]} intensity={0.3} />
      <directionalLight ref={directionalLightRef2} castShadow={true} position={[0, -10, 0]} intensity={0.1} />
      <ambientLight intensity={0.5} />

      <Religion3D scale="3.9" position={[0, 0, 0]} />
    </>
  );
};

export default Model3D;
