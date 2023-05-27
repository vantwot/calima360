import React from 'react';
import { OrbitControls, useHelper } from '@react-three/drei';
import Model from './Vida3D';
import { useRef } from 'react'

const ModelVida3D = () => {
    const directionalLightRef1 = useRef();
    const directionalLightRef2 = useRef();

    const handleMouseClick = () => {
        const popupWindow = window.open('', '_blank', 'width=500,height=500,top=100,left=250');
        if (popupWindow) {
            popupWindow.document.write(`
                <html>
                <head>
                    <title>Pop-up Window</title>
                    <style>
                        /* Estilos CSS para la ventana emergente */
                    </style>
                </head>
                <body>
                    <h1>Contenido de la ventana emergente</h1>
                    <p>Este es el contenido de la ventana emergente.</p>
                </body>
                </html>
            `);
        }
    };

    return (
        <>
            <OrbitControls makeDefault minDistance={20} maxDistance={30} />
            <directionalLight ref={directionalLightRef1} castShadow={true} position={[0, 10, 0]} intensity={0.5} />
            <directionalLight ref={directionalLightRef2} castShadow={true} position={[0, -10, 0]} intensity={0.5} />
            <ambientLight intensity={0.5} />

            <Model scale="2" position={[0, 0, 0]} rotation-x={- Math.PI * 0.38} rotation-z={- Math.PI * 0.15} onClick={handleMouseClick} />
        </>
    );
};

export default ModelVida3D;
