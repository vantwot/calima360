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
    const handleCerrarSesion = ({target , pathBack , state , whoami , title}) => {

        countClikLeccion({
            item_click: title
        })

        if(state) {
            state_use.set(!state_use.get)
            state_use.all({ name: whoami });
            return;
        }
        console.log(pathBack);
        history(target, {  state: { pathBack } });
    }

    const countClikLeccion = ({
        item_click,
        max_click
    }) => {

        try {

            if ('countClick' in sessionStorage) {

                const countClick = JSON.parse(sessionStorage.getItem('countClick'))

                Object.entries(countClick).forEach( (element,index) => {

                    Object.entries(element[1]).map( (element_) => {
                        
                        if (element_[0] === (item_click).toLowerCase()) {
                            (countClick[element[0]])[element_[0]] = 1
                        }

                    })

                   

                });

                sessionStorage.setItem('countClick' , JSON.stringify(countClick))

            }
            else {

                sessionStorage.setItem('countClick' , JSON.parse({
                    'orfebrería': {
                        'arte': 0,
                        'cultura': 0
                    },
                    'historia': {
                        'vida': 0,
                        'religión': 0
                    },
                    'mitología': {
                        'mitología': 0
                    },
                }))

            }

        }
        catch (error) {
            console.log('error', error)
        }

    }


    //el todo poderoso useEffect
    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');

        if (!('countClick' in sessionStorage)) {

            sessionStorage.setItem('countClick' , JSON.stringify({
                'orfebrería': {
                    'arte': 0,
                    'cultura': 0
                },
                'historia': {
                    'vida': 0,
                    'religión': 0
                },
                'mitología': {
                    'mitología': 0
                },
            }))

        }

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
                                                     state_={item?.stateQuestion || false} 
                                                     type={item?.type || 1}
                                                     />
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