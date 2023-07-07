import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Object_3d from '../../assets/3D/casa.glb'

export default function Model(props) {
  const { nodes, materials } = useGLTF(Object_3d);
  return (
    <group {...props} dispose={null}>
      <group scale={[11.227, 4.402, 11.227]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={materials["Material.006"]}
        />
      </group>
    </group>
  );
}
useGLTF.preload("/casa.glb");