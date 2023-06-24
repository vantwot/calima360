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

    const [userData, setUserData] = useState({
        name: '',
        apellido: '',
        email: '',
        img_url: 'profile_default.svg',
    });

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const token = sessionStorage.token;
                const decodedToken = decodeToken(token);
                const userId = decodedToken.userId;
                const url = 'http://44.205.85.243:5000/usuario/' + userId;
                const url_cuestionario = `http://44.205.85.243:5000/usuario_cuestionario/${userId}`
                const response = await axios.get(url);
                const response_cuestionario = await axios.get(url_cuestionario);
                //si existe la info del cuesionario
                const porcentaje = response_cuestionario?.data?.estado || 0;
                const { nombre, apellido, email } = response.data;
                setUserData((prevState) => ({
                    ...prevState,
                    name: nombre,
                    apellido: apellido,
                    email: email,
                    cuestonario: porcentaje
                }));
            } catch (error) {
                console.log(error);
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