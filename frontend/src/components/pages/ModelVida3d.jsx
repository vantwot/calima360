import React, {useState} from 'react'
import Experience from '../model3d/Experence'
import Header from '../Home/Header'
import icon_profile from '../../assets/logo/profile_default.svg';
import Navegator from '../profile/Navegator'
import { Canvas } from '@react-three/fiber'
import ModelVida3D from '../model3d/ModelVida3D';
import closeIcon from '../../assets/item_menu/close.svg';
import backArrrow from '../../assets/item_menu/backArrow.svg';
import {  
    useLocation ,
    useNavigate
} from 'react-router-dom';


const Model3d = () => {

    const history =  useNavigate();
    const [showIn, setShowIn] = useState(false);
    const handleModalIn = () => setShowIn(true);
    const handleCloseIn = () => setShowIn(false);

    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);

    const location = useLocation();
    const pathBack = location.state?.pathBack;

    const handlePathBack = () => {
        history(pathBack);
    }

    return (
        <>
            <Header>
                <div className='_container_profile'>
                    <a>
                        <img src={icon_profile} alt="profile" />
                    </a>
                 </div>
            </Header>
            <div className='_container_primary_profile'>
            <div className='_arrow_left_back'>
                    <a onClick={handlePathBack}>
                        <img src={backArrrow} alt="back" />
                    </a>
            </div>
            <Navegator />
                <Experience title={'Vida'}>
                    <div className='canvas_3d'>
                        <Canvas
                            camera={ {
                                fov: 45,
                                near: 0.1,
                                far: 200,
                                position: [ -4, 30, 7 ]
                            } }
                            //maldita propiedad, 30m perdi de mi vida :3
                            shadows={true}
                        >
                          <ModelVida3D 
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
                                <h1>Vida de la cultura Calima</h1>
                                <p>La cultura Calima, que floreció en la región suroeste de Colombia entre los siglos IV a.C. y VII d.C., tuvo una vida rica y compleja. Durante este período, la cultura Calima desarrolló una serie de características distintivas que los diferenciaron de otros grupos indígenas de la región.</p>
                                <p>La vida de la cultura Calima estaba estrechamente vinculada a su entorno natural. Los calimas habitaban una región de valles y montañas, lo que les brindaba una variedad de recursos naturales para su subsistencia. Se dedicaban a la agricultura, cultivando maíz, frijoles, calabazas y algodón. También eran hábiles ceramistas y tejedores, creando hermosos objetos de barro y textiles que reflejaban su creatividad y destreza.</p>
                                <p>Además de sus actividades económicas, la cultura Calima tenía una fuerte base religiosa y espiritual. Creían en la existencia de un mundo más allá de la vida terrenal y practicaban un culto funerario elaborado. Las tumbas calimas eran ricas en objetos preciosos, como máscaras de oro, pectorales y vasijas de barro. Estos objetos simbolizaban la importancia del viaje del difunto al más allá y su transformación en seres divinos.</p>
                                <p>La sociedad calima también estaba organizada de manera jerárquica, con líderes políticos y religiosos que ejercían un gran poder. Los calimas participaban en rituales y ceremonias, donde se honraban a los dioses y se fortalecían los lazos comunitarios. La guerra también era parte de la vida calima, ya sea para defenderse de amenazas externas o para expandir su territorio.</p>
                                <p>La cultura Calima dejó un legado significativo en la historia de Colombia. Sus obras de arte, su habilidad en la cerámica y su enfoque en el culto funerario son testimonios de una civilización rica y sofisticada. Aunque los calimas desaparecieron hace siglos, su legado perdura en los vestigios arqueológicos y en la memoria de la región suroeste de Colombia.</p>
                            </div>
                        </div>
                        }
                    </div>
                </Experience>
            </div>
        </>
    )
}
                   

export default Model3d