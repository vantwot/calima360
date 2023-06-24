import React ,  {useState} from 'react';
import { Canvas } from '@react-three/fiber'
import Figure3d from '../utils/Figure3d';

const Experience = (props) => {

    const { 
        title, 
        canvasAttr,
        children_,
        handleModalIn,
        luzFigura,
        typeLight,
        children
    } = props;
    
    //renderizar componente
    return (
          <div className="_container_section">
          <h2>{title}</h2>
          <div className="section__content">

            <div className='canvas_3d'>
                <Canvas
                    camera={ {
                        fov:  (canvasAttr?.fov) || 45,
                        near: (canvasAttr?.near) || 0.1,
                        far:  (canvasAttr?.far) || 200,
                        position: (canvasAttr?.position) || [ -4, 30, 7 ]
                    } }
                >
                        <Figure3d 
                              handleModalIn={handleModalIn} 
                              Children_3d={children_}
                              luzFigura={luzFigura}
                              typeLight={typeLight}
                        />

                </Canvas>

            </div>
            {children}
          </div>
      </div>
    )
};

export default Experience;