import { View } from "@react-three/drei";
import React from "react";
const images_content = require.context("../../assets/avatar/", true);

//component
const Editar = ({
    open_,
    SetEdit
}) => {

    const [ IsOpen , SetOpen ] = React.useState(true)
    const [ IsView , SetView ] = React.useState(false)
    const [ data_ , setData ] = React.useState({
        nombre: '',
        apellido: '',
        avatar: ''
    })
    const data_img = [0,1,2,3,4,5,6,7,8,9]

    //handles
    const onSubmit = (e) => {
        e.preventdefault()
        alert('hola')
    }

    const onChange1 = (e) => {
        console.log(e.target.value , data_)
        setData({
            ...data_,
            nombre: `${e.target.value}`
        })

        if (data_.apellido !== '' && data_.avatar !== '' &&
            (e.target.value).length > 0) {
            SetOpen(false)
        }
        else {
            SetOpen(true)
        }


    }

    const onChange2 = (e) => {
        console.log(e.target.value,data_)
        setData({
            ...data_,
            apellido: `${e.target.value}`
        })

        if (data_.nombre !== '' && data_.avatar !== ''&&
            (e.target.value).length > 0) {
            SetOpen(false)
        }
        else {
            SetOpen(true)
        }

    }

    const onClosee = () => {
        SetEdit(false)
    }

    const onViewOption = () => {
        console.log('a4')
        SetView(!IsView)
    }

    const onLeaveMouse = () => {
        SetView(false)
    }

    const onClickAvatar = (tap) => {
        setData({
            ...data_,
            avatar: `${tap}`
        })
        SetView(false)

        if (data_.nombre !== '' && data_.apellido !== '') {
            SetOpen(false)
        }
        else {
            SetOpen(true)
        }
    }

    return (
        <>
           {
            (<div className="_container_edit">
                <div onClick={onClosee} className="_container_black" />
                <section className="_container_old_password _aux_editar">
                        <form  onSubmit={onSubmit}  className="email_p">
                        <label>Nombre</label>
                        <input 
                            placeholder="Nombre"
                            type="text"
                            onChange={onChange1}
                        />
                        <label>Apellido</label>
                        <input 
                            placeholder="Apellido"
                            type="text"
                            onChange={onChange2}
                        />
                        <label>Avatar</label>
                        <div className="container_select">
                            <div onClick={onViewOption} className="_view_option_more">
                            <option> { (data_?.avatar !== '')? 'Avatar Selecionado' : 'Selecione un Avatar'}</option>
                            {
                                IsView &&
                                <div onMouseLeave={onLeaveMouse}  className="container_aux__">
                                        {data_img?.map( (element,index) => (
                                            <div onClick={ () => {onClickAvatar(element)}} className="option_select" key={index}>
                                                <img src={images_content(`./${element}.png`)} />
                                            </div>
                                        ))}
                                </div>
                            }
                            </div>
                        </div>
                        <button className={`${IsOpen? 'disabled_': ''}`} disabled={IsOpen} type="submit"> Editar </button>
                        </form>
                </section>
           </div>)
            }
        </>
     )
}

export default Editar;