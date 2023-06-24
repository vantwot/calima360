//importar Librerias
import React, {useState} from 'react'
import Experience from '../model3d/Experence'
import Header from '../Home/Header'
import PopupGeneral from '../utils/PopupGeneral'
import Cultura3D from '../model3d/Cultura'
import { 
    usePathtLocation,
    RenderContentFigure3D
} from '../utils/ArrowLeft'
import Verificate from '../utils/verificate'


//informacion de la seccion
function RenderContentPopup() {
    return (
    <>
        <h1>Los Ornamentos dentro de la cultura Calima</h1>

        <p>Los Calima eran conocidos por su habilidad en la metalurgia, y sus ornamentos eran principalmente elaborados en oro y tumbaga, una aleación de oro con cobre. Estos ornamentos incluían collares, pectorales, brazaletes, anillos y diademas, entre otros.</p>

        <p>Los diseños de los ornamentos Calima eran muy detallados y reflejaban la influencia de la fauna y la flora de la región. Muchos de los ornamentos representaban animales como serpientes, aves, felinos y caimanes, así como plantas y elementos abstractos estilizados.</p>

        <p>Los Calima también utilizaban otros materiales en la creación de ornamentos, como conchas marinas, piedras semipreciosas y cerámica. Estos materiales eran combinados en diseños complejos y coloridos, creando piezas de gran belleza y valor cultural.</p>

        <p>Los ornamentos Calima no solo eran utilizados como adornos personales, sino que eran utilizados en rituales y ceremonias, y se cree que representaban estatus, poder y conexión con lo divino.</p>

        <p>Hoy en día, los ornamentos de la cultura Calima son considerados verdaderas obras de arte y son apreciados tanto por su belleza estética como por su importancia histórica y cultural.</p>
    </>)
}


/**
 * @description Pinta una figura 3d en la pagina
 * @returns Componente de la pagina de model3d
*/
const CultureFigure = (props) => {

    //variables
    const path_ = usePathtLocation();
    const [ pathLocation , setPathLocation ] = useState(path_);
    const [showIn, setShowIn] = useState(false);
    console.log(pathLocation);
    //funciones
    const handleModalIn = () => setShowIn(true);
    const handleCloseIn = () => setShowIn(false);

    // el poderisimo useEffect
    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);

    React.useEffect(() => {
        console.log(path_,pathLocation);
    },[pathLocation]);

    //renderizar componente
    return (
        <>
            <Verificate target={"/cultura-figura"} />
            <Header login={true} />
            <div className='_container_primary_profile'>
                <RenderContentFigure3D path={pathLocation} />
                <Experience 
                    title={'Cultura'} 
                    handleModalIn={handleModalIn}
                    luzFigura={{
                        intensity: 70,
                        position: [-1, 2.5, 1],
                    }}
                    typeLight={0}
                    luzFigura2={{
                        intensity: 70,
                        position: [1, 2.5, 1],
                    }}
                    typeLight2={0}
                    luzFigura3={{
                        intensity: 50,
                        position: [1, -4.5, -1],
                    }}
                    typeLight3={0}
                    luzFigura4={{
                        intensity: 50,
                        position: [-1, -4.5, -1],
                    }}
                    typeLight4={0}
                    children_= {<Cultura3D scale="6" position={[0, -2, 0]} rotation-x={- Math.PI * 0.4} rotation-z={- Math.PI * 0.15} />}
                />
                {showIn && <PopupGeneral handleCloseIn={handleCloseIn} children_={<RenderContentPopup />} />}
            </div>
        </>
    )
}

export default CultureFigure;