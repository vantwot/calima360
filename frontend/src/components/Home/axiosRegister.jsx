import axios from 'axios';



//variables globales
const URL = 'localhost';
const PORT = 5000;


const axiosRequestLogin = async ({ name, lastname, email, password}) => {
    try {

        const DATA = {
            "nombre": name, 
            "apellido": lastname,
            "email": email,
            "contraseña": password
        }

        const response = await axios.post(`${URL}:${PORT}/registro` , DATA);
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error(error);
        return -1;
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