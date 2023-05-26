import axios from 'axios';




//variables globales
const URL = 'http://calima360.cyydty3tfbz4.us-east-1.rds.amazonaws.com';
const PORT = 3000;


const axiosRequestLogin = async ({ email , password}) => {
    try {

        const DATA = Object.freeze({
            email: email,
            contraseña: password
        });

        const response = await axios.post(`${URL}:${PORT}/login` , DATA);
        console.log(response.data);

    } catch (error) {
        console.error(error);
    }

};

const axiosRequestSingIn = async ({ 
    name, 
    lastname, 
    email, 
    password}) => {

    try {

        axios.post(`${URL}:${PORT}/registro`, {
            nombre: name,
            apellido: lastname,
            email: email, 
            contraseña: password
        });

    } catch (error) {
        console.error(error);
    }



}


export default axiosRequestLogin ;
export { axiosRequestSingIn };