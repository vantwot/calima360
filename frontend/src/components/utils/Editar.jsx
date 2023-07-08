import React from "react";


//component
const Editar = ({
    open_,
    SetEdit
}) => {

    const [ IsOpen , SetOpen ] = React.useState(true)
    const data_img = [0,1,2,3,4,5,6,7,8,9]

    //handles
    const onSubmit = (e) => {
        e.preventdefault()
        alert('hola')
    }

    const onChange = (e) => {
        console.log(e.target.value)
    }

    const onClosee = () => {
        SetEdit(false)
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
                            onChange={onChange}
                        />
                        <label>Apellido</label>
                        <input 
                            placeholder="Apellido"
                            type="text"
                            onChange={onChange}
                        />
                        <label>Avatar</label>
                        <select>
                            <option defaultChecked disabled> Selecione un Avatar</option>
                            {
                                data_img?.map( (element,index) => (
                                    <option value={index} key={index}>
                                        {element}
                                    </option>
                                ))
                            }
                        </select>
                        <button className={`${IsOpen? 'disabled_': ''}`} disabled={IsOpen} type="submit"> Editar </button>
                        </form>
                </section>
           </div>)
            }
        </>
     )
}

export default Editar;