//importar Librerias
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosRequestSingIn from './axiosRegister';

/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const FormSingIn = () => {

    const history =  useNavigate();

    //evitar el recargo de la pagina
    const HandleOnSubmit = (e) => {
        e.preventDefault();

        //capturar los datos del formulario
        const name = e.target.name.value;
        const lastname = e.target.lastname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, lastname, email, password)

        axiosRequestSingIn({ name, lastname, email, password });

    }

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
    )

};


export default FormSingIn;