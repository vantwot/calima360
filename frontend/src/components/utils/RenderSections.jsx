//import libraries
import React from 'react';
import Navegator from '../profile/Navegator';
import Section from '../history/Section';
import { useNavigate } from 'react-router-dom';
import ProgresQuestion from './ProgresQuestion';

/**
 * @description Render Sections
 * @param {*} object
 * @returns Component Section
 */
const RenderSections = ({ 
    content_section,
    title,
    state_use,
}) => {

    //navigate para redireccionar a otra ruta
    const history =  useNavigate();

    //funcion para redireccionar
    const handleCerrarSesion = ({target , pathBack , state , whoami}) => {

        if(state) {
            state_use.set(!state_use.get)
            state_use.all({ name: whoami });
            return;
        }
        console.log(pathBack);
        history(target, {  state: { pathBack } });
    }

    //el todo poderoso useEffect
    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);

    //render
    return (
        <>
            <div className='_container_primary_profile'>
                <Navegator />
                <Section title={title} >
                    {
                        content_section.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div onClick={ () => { item.disabled && handleCerrarSesion(item) }} disabled={item.disabled} className='_container_history_section'>
                                            <img src={require(`../../assets/item_menu/${item.img}`)} alt="icon" />
                                            <p>{item.title}</p>
                                    </div>
                                    <ProgresQuestion name={item.title} 
                                                     state_={item?.stateQuestion || false} />
                                </div>
                            )
                        })
                    }
                </Section>
            </div>
        </>
    )

}


export default RenderSections;