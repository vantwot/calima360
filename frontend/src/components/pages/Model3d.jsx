import React from 'react'
import Experience from '../model3d/Experence'
import Header from '../Home/Header'
import icon_profile from '../../assets/logo/profile_default.svg';
import Navegator from '../profile/Navegator'
import { Canvas } from '@react-three/fiber'
import Model3D from '../model3d/Model3D';

const Model3d = () => {

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
                          <Model3D />   
                        </Canvas>
                    </div>
                </Experience>
            </div>
        </>
    )

}

export default Model3d