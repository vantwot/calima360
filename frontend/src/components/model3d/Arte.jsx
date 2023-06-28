/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Object_3d from '../../assets/3D/arte.glb'

const Arte3D = (props)  => {
    const { nodes, materials } = useGLTF(Object_3d);
    return (
        <group {...props} dispose={null}>
        <group position={[0.651, 32.324, -32.324]} rotation={[0, 0, Math.PI]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.Material}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.Material}
            />
        </group>
        </group>
    );
    }

useGLTF.preload("/arte.glb");

export default Arte3D;