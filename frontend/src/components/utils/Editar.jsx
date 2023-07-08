import React from "react";

//component
const Editar = () => {

    const [ IsOpen , SetOpen ] = React.useState(true)

    //handles
    const onSubmit = (e) => {
        e.preventdefault()
        alert('hola')
    }

    const onChange = (e) => {
        console.log(e.target.value)
    }

     return (
        <>
           <div className="_container_black" />
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
                      <option>a</option>
                   </select>
                   <button className={`${IsOpen? 'disabled_': ''}`} disabled={IsOpen} type="submit"> Editar </button>
                 </form>
           </section>
        </>
     )
}

export default Editar;