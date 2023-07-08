import React from "react";
import Header from "../Home/Header";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const URL = 'http://44.205.85.243:5000';

//COMPONENTE
const OldPassword = () => {

    //variables
    const [ IsOpen , SetOpen ] = React.useState(true)
    const [ Form , SetForm ] = React.useState(true)
    const [ passwordNew , setPasswordNew ] = React.useState('')
    const [ passwordVer , setPasswordVer ] = React.useState('')
    const [ id , setId ] = React.useState({ "id": 0 })
    const [ email , setEmail ] = React.useState({ "email": "" })
    const [ contraseña , setConstraseña ] = React.useState({ "contraseña": "" })

    const navigate = useNavigate()

    //hanlde subtmit
    const onSubmit = async (e) => {
        try{
            e.preventDefault()
            const usuario = await axios.post(`${URL}/verificar`, email)
            if(usuario.data.id){
                SetForm(false)
                SetOpen(true)
                setId({ "id": usuario.data.id })
            }
            else{
                alert('Este correo no se encuentra registrado.')
            }
        }
        catch{
            alert('Ocurrió un error al verificar tu correo.')
        }
    }

    const onSubmitChangePassword = async (e) => {
        try{
            e.preventDefault()
            const usuario = await axios.put(`${URL}/contrasena/` + String(id.id), contraseña)
            if(usuario.data.mensaje === 'Contraseña actualizada exitosamente'){
                alert('Contraseña cambiada con éxito.');
                navigate('/');
            } else{
                alert('Ocurrió un error al cambiar su contraseña.')
            }
        }
        catch {
            alert('Ocurrió un error al cambiar su contraseña.')
        }
    }

    const onChange = (e) => {

        const value = e.target.value;
        setEmail({ "email": value})
        // console.log('a', value , value.length)
        if (value.length > 2) {
            SetOpen(false)
        }
        else {
            SetOpen(true)
        }

    }

    const onChangePasswordNew = (e) => {
        setPasswordNew(e.target.value)
        setConstraseña({ "contraseña": e.target.value })
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
                        value={passwordNew}
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