//importar Librerias
import React, { useState } from 'react';
import Navegator from './Navegator';
import InfoProfile from './InfoProfile';
import axios from 'axios';
import { decodeToken } from 'react-jwt';

/*  
  *  @author <deiby.rodriguez@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
  //<Route path="/profile" element={<Profile />} /> <Route path="/profile" element={isAuthenticated ? (<Profile />) : redirect("/")}/>

const ContainerProfile = () => {

    //variables
    const token = sessionStorage.token;
    const decodedToken = decodeToken(token);
    const userId = decodedToken.userId;

    const [userData, setUserData] = useState({
        name: '',
        apellido: '',
        email: '',
        img_url: 'profile_default.svg',
    });

    const handleInfoUser = async (porcentaje) => {
        try {
            const url = 'http://44.205.85.243:5000/usuario/' + userId;
            const response = await axios.get(url);
            const { nombre, apellido, email } = response.data;
            setUserData((prevState) => ({
                ...prevState,
                name: nombre,
                apellido: apellido,
                email: email,
                cuestonario: porcentaje
            }));
        }
        catch (error) {
            console.log(error);
        }
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

    React.useEffect(() => {
        const fetchData = async () => {
            try {
             
                const url_cuestionario = `http://44.205.85.243:5000/usuario_cuestionario/`
                const response_cuestionario = await axios.get(url_cuestionario);
                
                const filtroUsuario = response_cuestionario?.data?.filter((item) => item.id_usuario === userId);
                const porcentaje_orfebreria = filtroUsuario?.filter((item) => item.id_cuestionario === 33);
                const porcentaje_historia = filtroUsuario?.filter((item) => item.id_cuestionario === 34);
                const porcentaje_mitologia = filtroUsuario?.filter((item) => item.id_cuestionario === 35);
                const sum_total = porcentaje_orfebreria?.length + porcentaje_historia?.length + porcentaje_mitologia?.length;
 
                //filtrar por el estado mas alto
                const porcentaje = {
                    'orfebreria': handleMayor(porcentaje_orfebreria),
                    'historia': handleMayor(porcentaje_historia),
                    'mitologia': handleMayor(porcentaje_mitologia),
                    cuestonario_active: sum_total > 0 
                }
                console.log('porcentaje', porcentaje);
                handleInfoUser([porcentaje]);
             
            } catch (error) {
                console.log(error);
                handleInfoUser([{
                    'orfebreria': 0,
                    'historia': 0,
                    'mitologia': 0,
                    cuestonario_active: false
                }]);
            }
        };

        fetchData();

        document.getElementById('root').classList.add('remove_gap');
    }, []);

    return (
        <>
           <div className='_container_primary_profile'>
                <Navegator />
                <InfoProfile content={userData} />
            </div>
        </>
    )
}

export default ContainerProfile;