//importar Librerias
import React from 'react';
import Header from '../Home/Header';
import FormSingIn from '../Home/FormSingIn';
import Verificate from '../utils/verificate';

/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const SignIn = () => {

    return (
        <>
            <Header />
            <FormSingIn />
        </>
    )

}

export default SignIn;