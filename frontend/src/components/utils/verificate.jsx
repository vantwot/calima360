import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

const Verificate = ({target}) => {
    const history =  useNavigate();
    useEffect(()=>{
        try{
        if('token' in sessionStorage){
            const token = sessionStorage.token;
            const decodedToken = decodeToken(token);
            const userId = decodedToken.userId;
            if(userId){
                history(target);
            } else {
                history("/");
                document.getElementById('root').classList.remove('remove_gap');
            }
        } else {
            history("/");
            document.getElementById('root').classList.remove('remove_gap');
        }
    }
    catch{
        console.log('Debe hacer el login primero');
        history("/");
    }}, [])
    return <></>
}

export default Verificate;