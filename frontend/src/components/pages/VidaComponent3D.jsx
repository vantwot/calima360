//import Librerias
import React, {useState} from 'react'
import Experience from '../model3d/Experence'
import Header from '../Home/Header'
import Model from '../model3d/Vida3D'
import PopupGeneral from '../utils/PopupGeneral'
import { 
    usePathtLocation,
    RenderContentFigure3D
} from '../utils/ArrowLeft'
import Verificate from '../utils/verificate'


function RenderContentPopup() {
    return (
    <>
        <h1>Vida de la cultura Calima</h1>
        <p>La cultura Calima, que floreció en la región suroeste de Colombia entre los siglos IV a.C. y VII d.C., tuvo una vida rica y compleja. Durante este período, la cultura Calima desarrolló una serie de características distintivas que los diferenciaron de otros grupos indígenas de la región.</p>
        <p>La vida de la cultura Calima estaba estrechamente vinculada a su entorno natural. Los calimas habitaban una región de valles y montañas, lo que les brindaba una variedad de recursos naturales para su subsistencia. Se dedicaban a la agricultura, cultivando maíz, frijoles, calabazas y algodón. También eran hábiles ceramistas y tejedores, creando hermosos objetos de barro y textiles que reflejaban su creatividad y destreza.</p>
        <p>Además de sus actividades económicas, la cultura Calima tenía una fuerte base religiosa y espiritual. Creían en la existencia de un mundo más allá de la vida terrenal y practicaban un culto funerario elaborado. Las tumbas calimas eran ricas en objetos preciosos, como máscaras de oro, pectorales y vasijas de barro. Estos objetos simbolizaban la importancia del viaje del difunto al más allá y su transformación en seres divinos.</p>
        <p>La sociedad calima también estaba organizada de manera jerárquica, con líderes políticos y religiosos que ejercían un gran poder. Los calimas participaban en rituales y ceremonias, donde se honraban a los dioses y se fortalecían los lazos comunitarios. La guerra también era parte de la vida calima, ya sea para defenderse de amenazas externas o para expandir su territorio.</p>
        <p>La cultura Calima dejó un legado significativo en la historia de Colombia. Sus obras de arte, su habilidad en la cerámica y su enfoque en el culto funerario son testimonios de una civilización rica y sofisticada. Aunque los calimas desaparecieron hace siglos, su legado perdura en los vestigios arqueológicos y en la memoria de la región suroeste de Colombia.</p>
    </>)
}


/**
 * @description Funcion que retorna el componente de la pagina de model3d
 * @returns Componente de la pagina de model3d
 */
const VidaComponent3D = () => {

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
            <Verificate target={"/model-vida"} />
            <Header login={true} />
            <div className='_container_primary_profile'>
                <RenderContentFigure3D  path={pathLocation} />
                <Experience 
                        title={'Vida'} 
                        handleModalIn={handleModalIn}
                        children_={<Model scale="2" position={[0, 0, 0]} rotation-x={- Math.PI * 0.38} rotation-z={- Math.PI * 0.15} />}
                />
                {showIn && <PopupGeneral handleCloseIn={handleCloseIn} children_={<RenderContentPopup />} />}
            </div>
        </>
    )
}
                   

export default VidaComponent3D