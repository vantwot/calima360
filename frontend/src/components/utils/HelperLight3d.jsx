import React from 'react';


//luces
const HelperLight3d = ({
    typeLight,
    position,
    intensity,
    castShadow
})  => {

    const [ litghts , setLights ] = React.useState([ 
        <directionalLight 
            castShadow={castShadow}
            position={position}
            intensity={intensity}
        />,
        //esta luz no tiene sombra
        <hemisphereLight 
            castShadow={false}
            position={position}
            intensity={intensity}
        />,
        <pointLight 
            castShadow={castShadow}
            position={position}
            intensity={intensity}
        />,
        <rectAreaLight 
            castShadow={false}
            position={position}
            intensity={intensity} 
        />,
        <spotLight 
            castShadow={castShadow}
            position={position}
            intensity={intensity} 
        />
    ]);

    React.useEffect(() => {
        console.log('typeLight', typeLight);
    }, [typeLight]);

    return (
        <>
            {litghts[typeLight]}
        </>
    )

}


export default HelperLight3d;