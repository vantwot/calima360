//import Librerias
import React, {useState} from 'react'
import Experience from '../model3d/Experence'
import Header from '../Home/Header'
import Arte3D from '../model3d/Arte'
import PopupGeneral from '../utils/PopupGeneral'
import { 
    usePathtLocation,
    RenderContentFigure3D
} from '../utils/ArrowLeft'
import Verificate from '../utils/verificate'


function RenderContentPopup() {
    return (
    <>
        <h1>Arte en la cultura Calima</h1>
        <p>El arte de la cultura Calima, que floreció en la región del suroeste de Colombia entre los siglos IV a.C. y VII d.C., se distingue por sus hermosas vasijas de barro.</p>
        <p>Las vasijas de barro calimas son una expresión artística y cultural muy importante de esta antigua civilización, estás vasijas eran utilizadas tanto para fines utilitarios como ceremoniales. Los calimas crearon una amplia variedad de formas y tamaños de vasijas, que van desde pequeñas copas y platos hasta grandes urnas y estatuillas antropomorfas.</p>
        <p>El estilo artístico de las vasijas calimas es altamente distintivo. Las piezas suelen ser de forma globular con cuellos estrechos y se decoran con una variedad de motivos geométricos y figurativos. Los calimas desarrollaron una técnica cerámica única, conocida como "engobe negativo", que consiste en aplicar un recubrimiento de arcilla blanca en la superficie de la vasija y luego raspar o grabar diseños para revelar el color oscuro de la arcilla subyacente. Este contraste entre el engobe blanco y el fondo oscuro crea un efecto visual muy llamativo.</p>
        <p>Los motivos decorativos de las vasijas calimas son variados y representan elementos de la naturaleza, como aves, peces, serpientes, felinos y figuras humanas. Estos diseños suelen ser estilizados y abstractos, con una fuerte influencia geométrica. Algunas vasijas también presentan escenas narrativas, como cacerías o rituales, que brindan información sobre las actividades y creencias de la cultura Calima.</p>
    </>)
}


/**
 * @description Funcion que retorna el componente de la pagina de model3d
 * @returns Componente de la pagina de model3d
 */
const ArteFigure = () => {

    //variables
    const path_ = usePathtLocation();
    const [ pathLocation , setPathLocation ] = useState(path_);
    const [showIn, setShowIn] = useState(false);

    //funciones
    const handleModalIn = () => setShowIn(true);
    const handleCloseIn = () => setShowIn(false);

    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);


    return (
        <>
            <Verificate target={"/arte-figura"}/>
            <Header login={true} />
            <div className='_container_primary_profile'>
                <RenderContentFigure3D  path={pathLocation} />
                <Experience 
                        canvasAttr={{
                                fov:  45,
                                near:  0.3,
                                far: 200,
                                position: [ -3, 10, 7 ]
                        }}
                        title={'Arte'} 
                        handleModalIn={handleModalIn}
                        children_={<Arte3D scale="6" position={[10, -220, 0]} rotation-z={- Math.PI * 0.30}/>}
                />
                {showIn && <PopupGeneral handleCloseIn={handleCloseIn} children_={<RenderContentPopup />} />}
            </div>
        </>
    )
}

export default ArteFigure;