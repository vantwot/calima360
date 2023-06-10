import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Object_3d from '../../assets/3D/mitologia.glb'

//
const Mito3D = (props)  => {

        const { nodes, materials } = useGLTF(Object_3d);
        return (
            <group {...props} dispose={null}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials.Material}
              />
            </group>
          );
        }

useGLTF.preload(Object_3d);


export default Mito3D;
