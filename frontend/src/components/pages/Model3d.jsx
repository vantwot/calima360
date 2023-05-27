import React, {useState} from 'react'
import Experience from '../model3d/Experence'
import Header from '../Home/Header'
import icon_profile from '../../assets/logo/profile_default.svg';
import Navegator from '../profile/Navegator'
import { Canvas } from '@react-three/fiber'
import Model3D from '../model3d/Model3D';
import ReligionWindow from '../window/ReligionWindow';
import closeIcon from '../../assets/item_menu/close.svg';
import {  
    useLocation ,
    useNavigate
} from 'react-router-dom';

const Model3d = (props) => {

    const history =  useNavigate();
    const [showIn, setShowIn] = useState(false);
    const handleModalIn = () => setShowIn(true);
    const handleCloseIn = () => setShowIn(false);

    const location = useLocation();
    const pathBack = location.state?.pathBack;

    const handleCerrarSesion = () => {
        history(pathBack);
    }

    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);

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
                    <a onClick={handleCerrarSesion}>
                        atras
                    </a>
                </div>
                <Navegator />
                <Experience title={'Religión'}>
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
                          <Model3D 
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
                                <p>Religión</p>
                                <img src={icon_profile} alt="profile" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus perferendis
                                    dicta exercitationem doloremque soluta et eligendi excepturi explicabo dolor sit, 
                                    commodi repudiandae esse possimus nam suscipit, fugit, tempore corporis temporibus.
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

export default Model3d