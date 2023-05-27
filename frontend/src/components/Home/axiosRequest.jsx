import axios from 'axios';



//variables globales
const URL = ' https://calima360.pages.dev';
//const PORT = 5000;


const axiosRequestLogin = async ({ email , password}) => {
    try {

        const DATA = {
            "email": email,
            "contraseña": password
        };

        const response = await axios.post(`${URL}/login` , DATA);
        console.log(response.data);
        return response.data.token;

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

        axios.post(`${URL}/registro`, {
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