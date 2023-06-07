/*  
  *  @author <deiby.rodriguez@correounivalle.edu.co>  
  *  @version 0.0.1
**/
/*
  Este archivo contiene funciones relacionadas con las solicitudes HTTP utilizando la biblioteca Axios.
*/

import axios from 'axios';

// URL base para las solicitudes
const URL = 'http://44.205.85.243:5000';

/**
 * Realiza una solicitud de inicio de sesión a través de HTTP utilizando Axios.
 * @param {string} email - El correo electrónico del usuario.
 * @param {string} password - La contraseña del usuario.
 * @returns {Promise<string>} - Una promesa que se resuelve con el token de acceso si la solicitud es exitosa, de lo contrario, se resuelve con -1.
 */
const axiosRequestLogin = async ({ email, password }) => {
  try {
    const data = {
      email: email,
      contraseña: password
    };

    const response = await axios.post(`${URL}/login`, data);
    console.log(response.data);
    return response.data.token;
  } catch (error) {
    console.error(error);
    return -1;
  }
};

/**
 * Realiza una solicitud de registro a través de HTTP utilizando Axios.
 * @param {string} name - El nombre del usuario.
 * @param {string} lastname - El apellido del usuario.
 * @param {string} email - El correo electrónico del usuario.
 * @param {string} password - La contraseña del usuario.
 */
const axiosRequestSingIn = async ({ name, lastname, email, password }) => {
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
};

export default axiosRequestLogin;
export { axiosRequestSingIn };
