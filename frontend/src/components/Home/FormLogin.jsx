import React from "react";

/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const FormLogin = () => {

    //evitar el recargo de la pagina
    const HandleOnSubmit = (e) => {
            e.preventDefault();
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
                   <a href="#">¿No tienes cuenta? Registrate</a>
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
