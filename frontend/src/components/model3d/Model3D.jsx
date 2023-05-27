import React from 'react';
import { OrbitControls, useHelper } from '@react-three/drei';
import Religion3D from './Religion3D';
import { useRef } from 'react'

const Model3D = (props) => {
    const directionalLightRef1 = useRef();
    const directionalLightRef2 = useRef();

    // const {
    //     handleModalIn,
    //     handleCloseIn
    // } = props;

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

    const hadlePopUp = () => {
        props.handleModalIn();
    }

    return (
        <>
            <OrbitControls makeDefault minDistance={20} maxDistance={30} />
            <directionalLight ref={directionalLightRef1} castShadow={true} position={[0, 20, 0]} intensity={0.3} />
            <directionalLight ref={directionalLightRef2} castShadow={true} position={[0, -10, 0]} intensity={0.1} />
            <ambientLight intensity={0.5} />

            <Religion3D scale="3.9" position={[0, 0, 0]} onClick={hadlePopUp} />
        </>
    );
};

export default Model3D;
