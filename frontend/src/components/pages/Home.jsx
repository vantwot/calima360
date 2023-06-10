//importar Librerias
import React from 'react';
import Header from '../Home/Header';
import FormLogin from '../Home/FormLogin';
import Verificate from '../utils/verificate';

/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const Home = () => {

    return (
        <>
          <Verificate target={"/profile"} />
          <Header />
          <FormLogin />
        </>
    );

};

export default Home;
