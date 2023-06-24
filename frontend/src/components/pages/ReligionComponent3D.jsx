//importar Librerias
import React, {useState} from 'react'
import Experience from '../model3d/Experence'
import Header from '../Home/Header'
import PopupGeneral from '../utils/PopupGeneral'
import Religion3D from '../model3d/Religion3D'
import { 
    usePathtLocation,
    RenderContentFigure3D
} from '../utils/ArrowLeft'
import Verificate from '../utils/verificate'


//informacion de la seccion
function RenderContentPopup() {
    return (
    <>
        <h1>Religión de la cultura Calima</h1>
        <p>Predominó el culto funerario, donde las personas creían en el más allá. Existieron un alto número de tumbas, de todos los períodos que tuvo la cultura, y que estaban acompañados con objetos hechos a base de oro y amas guerra, las cuales eran construidas en pozos,</p>
        <p>De igual manera, solían practicar el sacrificio como un ritual funerario y todo esto era parte de una filosofía el fallecido debe de emprender el viaje al otro mundo con los recursos necesarios y en compañía de los seres queridos. Por lo que se debe de analizar los siguientes elementos que solían estar en las tumbas:</p>
            <ol>
                <li>
                    <h3>Máscaras de oro</h3>
                    <p>Permitía saber que la persona que estaba era un dios.</p>
                </li>
                <li>
                    <h3>Pectorales</h3>
                    <p>Asociada con la sabiduría del alma que entablaría una guerra contra las tinieblas para llegar al más allá.</p>
                </li>
                <li>
                    <h3>Vasijas de barro</h3>
                    <p>Exponían el culto a los órganos sexuales femeninos.</p>
                </li>
                <li>
                    <h3>Alcazarra</h3>
                    <p>Representación al trabajo para lograr convertirse en un hombre solar y poder realizar magníficas obras.</p>
                </li>
            </ol>
    </>)
}


/**
 * @description Pinta una figura 3d en la pagina
 * @returns Componente de la pagina de model3d
*/
const ReligionComponent3D = (props) => {

    //variables
    const path_ = usePathtLocation();
    const [ pathLocation , setPathLocation ] = useState(path_);
    const [showIn, setShowIn] = useState(false);
    
    //funciones
    const handleModalIn = () => setShowIn(true);
    const handleCloseIn = () => setShowIn(false);

    //el poderisimo useEffect
    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);

    //renderizar componente
    return (
        <>
            <Verificate target={"/model-religion"} />
            <Header login={true} />
            <div className='_container_primary_profile'>
                <RenderContentFigure3D path={pathLocation} />
                <Experience 
                    title={'Religión'} 
                    handleModalIn={handleModalIn}
                    luzFigura={{
                        intensity: 0.3,
                        position: [0, 20, 0],
                    }}
                    typeLight={0}
                    children_= {<Religion3D scale="3.9" position={[0, 0, 0]} />}
                />
                {showIn && <PopupGeneral handleCloseIn={handleCloseIn} children_={<RenderContentPopup />} />}
            </div>
        </>
    )

}

export default ReligionComponent3D;