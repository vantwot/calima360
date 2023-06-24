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

    React.useEffect(() => {
        const fetchData = async () => {
            try {
             
                const url_cuestionario = `http://44.205.85.243:5000/usuario_cuestionario/`
                const response_cuestionario = await axios.get(url_cuestionario);
                console.log('response_cuestionario', response_cuestionario);
                const filtroUsuario = response_cuestionario?.data?.filter((item) => item.id_usuario === userId);
                console.log('filtroUsuario', filtroUsuario[filtroUsuario.length - 1]);
                handleInfoUser(filtroUsuario[filtroUsuario.length - 1].estado || 0);
             
            } catch (error) {
                console.log(error);
                handleInfoUser(0);
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