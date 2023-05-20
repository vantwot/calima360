//librerias
import React from 'react';
import Header from '../Home/Header';
import Navegator from '../profile/Navegator';
import icon_profile from '../../assets/logo/profile_default.svg';
import Section from '../history/Section';

const DATA_HISTORY = [
    {
        title: 'Vida',
        img: 'vida.svg'
    },
    {
        title: 'Religion',
        img: 'religion.svg'
    }
]


const History = () => {

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
                <Section title='Historia' >
                    {
                        DATA_HISTORY.map((item, index) => {
                            return (
                                <div key={index} className='_container_history_section'>
                                    <img src={require(`../../assets/item_menu/${item.img}`)} alt="icon" />
                                    <p>{item.title}</p>
                                </div>
                            )
                        })

                    }
                </Section>
            </div>
        </>
    );

};

export default History;