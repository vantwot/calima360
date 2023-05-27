import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Object_3d from '../../assets/3D/casa.glb'

export default function Model(props) {
  const { nodes, materials } = useGLTF(Object_3d);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.002"]}
        position={[0.05, -8.33, 0.07]}
        scale={4.95}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={materials["Material.001"]}
        position={[0.01, 7, -0.02]}
        scale={[5.5, 5.53, 5.5]}
      />
    </group>
  );
}

useGLTF.preload("/casa.glb");