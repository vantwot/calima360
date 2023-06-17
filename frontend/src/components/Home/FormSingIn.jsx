/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/

// Importar React desde la biblioteca 'react'
import React from 'react';

// Importar el hook useNavigate desde la biblioteca 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// Importar la función axiosRequestSingIn desde el archivo './axiosRegister'
import axiosRequestSingIn from './axiosRegister';

// Definición del componente funcional FormSingIn
const FormSingIn = () => {

    // Obtener la función de navegación de la biblioteca 'react-router-dom'
    const history =  useNavigate();

    // Manejar el evento de envío del formulario
    const HandleOnSubmit = async (e) => {
        e.preventDefault();

        // Capturar los datos del formulario
        const name = e.target.name.value;
        const lastname = e.target.lastname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, lastname, email, password);

        // Realizar una solicitud de registro utilizando la función axiosRequestSingIn
        await axiosRequestSingIn({ name, lastname, email, password })
        .then(res => {
            if (res !== -1) {
                window.confirm("Registro exitoso.");
                history('/')
            } else {
                window.confirm("No se pudo crear el usuario.");
            }
        });
    }

    // Renderizar el formulario de registro
    return (
        <div className='_container_singIn'>
             <form onSubmit={HandleOnSubmit}>
                    <h2>SIGN IN</h2>
                    <div className='_container_inputs'>

                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name="name" id="name" />
                        </div>

                        <div>
                            <label htmlFor="lastname">Apellido</label>
                            <input type="text" name="lastname" id="lastname" />
                        </div>

                        <div>
                            <label htmlFor="email">Correo</label>
                            <input type="email" name="email" id="email" />
                        </div>

                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" id="password" />
                        </div>

                    </div>
                    <div className="_container_a">
                        <a onClick={()=> { history('/') }}>¿Ya tienes cuenta? Inicia sesión</a>
                        <button type="submit">REGISTRARSE</button>
                    </div>
             </form>
        </div>
    );
};

// Exportar el componente FormSingIn como el valor predeterminado del módulo
export default FormSingIn;
