import React, {useState} from 'react'
import Experience from '../model3d/Experence'
import Header from '../Home/Header'
import icon_profile from '../../assets/logo/profile_default.svg';
import Navegator from '../profile/Navegator'
import { Canvas } from '@react-three/fiber'
import ModelVida3D from '../model3d/ModelVida3D';
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
                          <ModelVida3D />   
                        </Canvas>
                    </div>
                </Experience>
            </div>
        </>
    )

}

export default Model3d