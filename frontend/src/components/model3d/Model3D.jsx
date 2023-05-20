import React from 'react';
import { 
    OrbitControls , 
    MeshReflectorMaterial 
} from '@react-three/drei'
import Religion3D from './Religion3D';




const Model3D = () => {

    return (
       <>
            <OrbitControls makeDefault />
            <directionalLight castShadow={true}  position={[1, 2, 1]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <Religion3D  scale="3.9" position={[0, 0, 0]} />
       </>
    )

}

export default Model3D;