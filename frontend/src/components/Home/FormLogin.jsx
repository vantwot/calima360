import React from "react";
import { useNavigate } from 'react-router-dom';
import axiosRequestLogin from './axiosRequest';


/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const FormLogin = () => {

    const history =  useNavigate();

    //evitar el recargo de la pagina
    const HandleOnSubmit = (e) => {
            e.preventDefault();

            //capturar los datos del formulario
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(email, password)
            axiosRequestLogin({ email: email , password: password});
    }

    const handleSingIn = () => {
        history('/singIn');
    }

    return (
        <div className="_container_form">
           <form onSubmit={HandleOnSubmit}>
               <h2>Login</h2>
               <label htmlFor="email">Correo</label>
               <input type="email" name="email" id="email" />
               <label htmlFor="password" className="_label">Contraseña</label>
               <input type="password" name="password" id="password" />
               <div className="_container_a">
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

export default FormLogin;
