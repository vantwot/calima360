/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/

// Importar React desde la biblioteca 'react'
import React from "react";

// Importar el hook useNavigate desde la biblioteca 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// Importar la función axiosRequestLogin desde el archivo './axiosRequest'
import axiosRequestLogin from "./axiosRequest";

// Definición del componente funcional FormLogin
const FormLogin = () => {
    // Obtener la función de navegación de la biblioteca 'react-router-dom'
    const history =  useNavigate();

    // Manejar el evento de envío del formulario
    const HandleOnSubmit = async (e) => {
        e.preventDefault();

        // Capturar los datos del formulario
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Realizar una solicitud de inicio de sesión utilizando la función axiosRequestLogin
        await axiosRequestLogin({ email: email , password: password})
        .then(res => {
            if (res !== -1) {
                sessionStorage.setItem('token', res);
                setTimeout(() => { console.log("Ingresando"); }, "1000");
                history("/profile");
            } else {
                window.confirm('Error al ingresar, por favor verifique sus datos.');
            }
        });
    }

    // Manejar el evento de registro
    const handleSingIn = () => {
        history('/singIn');
    }

    // Renderizar el formulario de inicio de sesión
    return (
        <div className="_container_form">
           <form onSubmit={HandleOnSubmit}>
               <h2>Login</h2>
               <label htmlFor="email">Correo</label>
               <input type="email" name="email" id="email" />
               <label htmlFor="password" className="_label">Contraseña</label>
               <input type="password" name="password" id="password" />
               <div className="_container_a">
               <br />
                    <a onClick={()=> { history('/oldPassword') }}>¿Olvidaste tu contraseña?</a>
                    <br />
                    <a onClick={handleSingIn} >¿No tienes cuenta? Registrate</a>
               </div>
               <button 
                    type="submit"
               >
                    INGRESAR
               </button>
           </form>
        </div>
    );
};

// Exportar el componente FormLogin como el valor predeterminado del módulo
export default FormLogin;
