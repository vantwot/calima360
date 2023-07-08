import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import crisFigure from '../../assets/3D/crisFigure.glb'

export function PectoralOrnamental(props) {
  const { nodes, materials } = useGLTF(crisFigure);
  return (
    <group {...props} dispose={null}>
      <group
        position={[3.199, 3.039, 1.656]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.161}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 208.139, 160.357]}>
            <group
              position={[-34.729, 0, -148.069]}
              rotation={[-Math.PI, 1.557, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cubo_2_Mat_0.geometry}
                material={materials.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cubo_2_Mat_0001.geometry}
                material={materials.material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
} 
useGLTF.preload(crisFigure);