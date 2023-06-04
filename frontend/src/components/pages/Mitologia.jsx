//importar Librerias
import React, {useState} from 'react'
import Experience from '../model3d/Experence'
import Header from '../Home/Header'
import Navegator from '../profile/Navegator'
import { Canvas } from '@react-three/fiber'
import Mitologia3D from '../model3d/Mitologia3D';
import closeIcon from '../../assets/item_menu/close.svg';
import backArrrow from '../../assets/item_menu/backArrow.svg';
import {  
    useLocation ,
    useNavigate
} from 'react-router-dom';



/**
 * @description Encargado de mostrar la Figura 3D de la seccion Mitologia
 * @returns Mitologia Component Padre
 */
const Mitologia = () => {

    //variables
    const history =  useNavigate();
    const [showIn, setShowIn] = useState(false);


    //funciones
    const handleModalIn = () => setShowIn(true);
    const handleCloseIn = () => setShowIn(false);

    //logica para el pathBack
    const location = useLocation();
    const pathBack = location.state?.pathBack;

    const handlePathBack = () => {
        history(pathBack);
    }

    // el poderisimo useEffect
    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);

    //renderizar componente
    return (
        <>
            <Header login={true} />
            <div className='_container_primary_profile'>
            <div className='_arrow_left_back'>
                    <a onClick={handlePathBack}>
                        <img src={backArrrow} alt="back" />
                    </a>
            </div>
            <div className='_text_left_back'>
                    <strong>Dar click a la figura!!!</strong>
            </div>
            <Navegator />
                <Experience title={'Mitologia'}>
                    <div className='canvas_3d'>
                        <Canvas
                            camera={ {
                                fov: 45,
                                near: 0.1,
                                far: 200,
                                position: [ -4, 30, 7 ]
                            } }
                        >
                          <Mitologia3D
                                handleModalIn={handleModalIn}
                                handleCloseIn={handleCloseIn}
                          /> 
                          </Canvas>
                        {showIn &&
                        <div className='_popup_3d_'>
                            <div className='_container_popup_3d'>
                                <a onClick={handleCloseIn} className='_close_popup_'>
                                    <img src={closeIcon} alt="close" />
                                </a>
                                <h1>Mitología de la Cultura Precolombina Calima</h1>
                                <p>La cultura precolombina Calima fue una antigua civilización que habitó en lo que hoy
                                    es la región suroccidental de Colombia. Esta cultura tenía una rica tradición mitológica
                                    que influía en su visión del mundo y en sus prácticas religiosas.
                                    A continuación, exploraremos algunos de los mitos más destacados de la cultura Calima.</p>
                                
                                <strong>Mito del origen del mundo</strong>
                                <p>Según la mitología Calima, el mundo fue creado por una deidad suprema conocida como "Chiminigagua".
                                    Se creía que Chiminigagua era el hacedor de todas las cosas y el dador de vida. Se decía que creó el 
                                    universo a partir de un huevo cósmico y que luego dio forma a los seres humanos y a los dioses.</p>
                                
                                <strong>Los dioses Calima</strong>
                                <p>La cultura Calima adoraba a varios dioses y diosas. 
                                    Uno de los dioses más venerados era "Nopialli", dios del sol y la fertilidad. 
                                    Se creía que Nopialli era responsable de la prosperidad de las cosechas y el ciclo de la vida.
                                    Otro dios importante era "Chibchacum", dios de la lluvia y el agua, quien controlaba los ríos y las fuentes de 
                                    agua.
                                </p>
                                
                                <strong>Mito de Bochica</strong>
                                <p>Un mito central de la cultura Calima es el de "Bochica", un dios benevolente que enseñó a los seres humanos 
                                    las artes de la civilización. Según el mito, Bochica enseñó a la humanidad la agricultura, 
                                    la medicina y las leyes. También se le atribuyó la creación de los cuerpos celestes y la organización
                                    del mundo natural.
                                </p>
  
                                <strong>El mundo de los espíritus</strong>
                                <p>Los Calima creían en la existencia de un mundo espiritual habitado por espíritus de la naturaleza y los ancestros. 
                                    Estos espíritus eran considerados protectores y guías, y se les ofrecían ofrendas y rituales para mantener 
                                    una buena relación con ellos. Los chamanes Calima eran los intermediarios entre el mundo humano y el mundo
                                    espiritual.
                                </p>
  
                                <strong>Conclusión</strong>
                                <p>La mitología de la cultura precolombina Calima refleja la conexión profunda que tenían 
                                    con la naturaleza y su búsqueda de comprender el mundo que los rodeaba. Estos mitos y creencias
                                    desempeñaron un papel fundamental en su vida cotidiana y en sus ceremonias religiosas, dejando un legado 
                                    duradero en la región.
                                </p>
                            </div>
                        </div>
                        }
                    </div>
                </Experience>
            </div>
        </>
    )
}
                   

export default Mitologia;