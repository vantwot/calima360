import React from 'react';
import axios from 'axios';
import { decodeToken } from 'react-jwt';


const ProgresQuestion = ({
    state_,
    name,
    type
}) => {


     //variables
     const [porcentaje_, setPorcentaje] = React.useState(0);
     const [state, setState] = React.useState(true);
     const [name_, setName] = React.useState('');

     let userId = 0
     //variables
     if ('token' in sessionStorage) {
        const token = sessionStorage.token;
        const decodedToken = decodeToken(token);
        userId = decodedToken.userId;
     }

     const handleMayor = (objeto) => {

        if (objeto?.length === 0) {
            return 0;
        }
    
        const objetoMayor = objeto.reduce((mayor, objeto) => {
            if (objeto.estado > mayor.estado) {
              return objeto;
            } else {
              return mayor;
            }
          });
    
        return objetoMayor;
     }

     const fetchData = async () => {
        try {
            
            if (name_ !== "") {

            const url_cuestionario = `http://44.205.85.243:5000/usuario_cuestionario/`
            const response_cuestionario = await axios.get(url_cuestionario);
            
            
            const data___ = {
                'orfebrería': 33,
                'historia': 34,
                'mitología': 35,
            }
            
           
            const filtroUsuario = response_cuestionario?.data?.filter((item) => item.id_usuario === userId);
            const porcentaje_orfebreria = filtroUsuario?.filter((item) => item.id_cuestionario === data___[name_]);
           
            
            const porcentaje = handleMayor(porcentaje_orfebreria);
            setPorcentaje(porcentaje?.estado);
            }
            
         
        } catch (error) {
            console.log(error);
        }
    };
    
    React.useEffect(() => {
        if(state_ !== null || state_ !== undefined) {
            setState(state_);
        }
    }, [state_]);

    React.useEffect(() => {
        
        if (name !== null || name !== undefined) {
            if (type === 1) {
                setName( (name.toLowerCase()) );
                fetchData();
            }

            if (type === 2) {

                if (('countClick' in sessionStorage)) {
                    const countClick =  JSON.parse(sessionStorage.getItem('countClick'))
                    let porcentaje_aux = 0
                    let count_aux = 0

                 
                    Object.entries(countClick[(name.toLowerCase())])?.map( (element,index) => {
                        count_aux++;
                       
                        if (element[1] === 1) {
                            porcentaje_aux++
                        }

                    })
                    
                    setPorcentaje( ((porcentaje_aux/count_aux)) * 100 )
                  

                }
            }

        }

    }, [name_]);

    React.useEffect(() => {
        
        if (type == 1) {
            fetchData();
        }

        if (type === 2) {

            if (('countClick' in sessionStorage) && name_ !== '') {
                const countClick =  JSON.parse(sessionStorage.getItem('countClick'))
            }
        }
      
    }, []);

     return (
         <>
            {
            state &&
                <div className='_container_progress_item _container_lection'>
                    <span 
                        style={{
                            background: `${(porcentaje_ > 0)? `linear-gradient(90deg, #FFAE17 ${porcentaje_}%, #F5EFD7 ${100 - porcentaje_}%)` : 'transparent'}`,
                            border: `2px solid #FFAE17`
                        }}
                        className='_progress_'></span>
                    <span className='_porcentaje'>{(porcentaje_ > 0)? porcentaje_ : 0}%</span>
                </div>
            }
         </>
     )
}

export default ProgresQuestion;