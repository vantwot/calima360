import React from "react";
import Header from "../Home/Header";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

//COMPONENTE
const OldPassword = () => {

    //variables
    const [ IsOpen , SetOpen ] = React.useState(true)
    const [ Form , SetForm ] = React.useState(true)
    const [ passwordNew , setPasswordNew ] = React.useState('')
    const [ passwordVer , setPasswordVer ] = React.useState('')

    const navigate = useNavigate()

    //hanlde subtmit
    const onSubmit = (e) => {
        // axios.post()
        e.preventDefault()
        SetForm(false)
        SetOpen(true)
        alert('hola')
    }

    const onSubmitChangePassword = (e) => {
        e.preventDefault()
        alert('password change')
    }

    const onChange = (e) => {

        const value = e.target.value;
        console.log('a', value , value.length)
        if (value.length > 2) {
            SetOpen(false)
        }
        else {
            SetOpen(true)
        }

    }

    const onChangePasswordNew = (e) => {
        setPasswordNew(e.target.value)
        
        if (e.target.value === passwordVer &&
            passwordVer !== '') {
            SetOpen(false)
        }
        else {
            SetOpen(true)
        }

    }

    const onChangePasswordVer = (e) => {
        setPasswordVer(e.target.value)

        if (e.target.value === passwordNew &&
            passwordNew !== '' ) {
            SetOpen(false)
        }
        else {
            SetOpen(true)
        }

    }

    React.useEffect( () => {
       const a = document.getElementById('newpassword')
       //a.setAttribute('vak')
    }, [])
     
    return (
        <>
          <Header />
          <section className="_container_old_password">
              {
                Form? 
                (<form  onSubmit={onSubmit}  className="email_p">
                   <label>Correo Electronico</label>
                   <input 
                      placeholder="Escriba aquí su correo electronico"
                      type="email"
                      onChange={onChange}
                   />
                   <button className={`${IsOpen? 'disabled_': ''}`} disabled={IsOpen} type="submit"> Verificar Email </button>
                 </form>) :
                (<form onSubmit={onSubmitChangePassword} className="email_p changePasword">
                    <label> Cotraseña Nueva </label>
                    <input 
                        placeholder="Contraseña nueva"
                        type="text"
                        onChange={onChangePasswordNew}
                        id="newpassword"
                    />
                    <label>Verificar Contraseña </label>
                    <input 
                        placeholder="Verificar Contraseña"
                        type="text"
                        onChange={onChangePasswordVer}
                        id="ver111"
                    />
                    <button className={`${IsOpen? 'disabled_': ''}`} 
                            disabled={IsOpen} 
                            type="submit"> Cambiar Contrasena </button>
                </form>)
              }  
          </section>
        </>
    )

}

export default OldPassword;