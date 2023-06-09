import React, { useState } from 'react';


const RenderContentPopup_ = ({
    handleCloseIn,
    reset_quiz
}) => {
    return (
    <>
        <div className="_container_close_quiz">
            <h1>Cierre De Quiz</h1>
            <p>
                ¿Estás seguro de cerrar el quiz? <br />
                Perderás tu progreso.
            </p>
            <div className="container_btns_quiz">
                <button onClick={reset_quiz} className="btn_quiz">Sí</button>
                <button onClick={handleCloseIn} className="btn_quiz">No</button>
            </div>
        </div>

    </>)
}

const RenderResultPopup_ = ({
    handleCloseIn,
    reset_quiz,
    result,
    total
}) => {

    const [ data , setData ] = React.useState({
        result: (result.filter((item,index) => item === total[index].answer)).length,
        total: total.length,
        percent: (result.filter((item,index) => item === total[index].answer)).length / total.length * 100
    });
  
    return (
        <>
            <div className="_container_close_quiz">
                <h1>Resultado</h1>
                <p>
                    Tu puntuación es: <br />
                    {data.result} / {data.total} <br />
                    {data.result >= 3 ? 'Felicidades' : 'Sigue Intentando'}
                </p>
                <div className="container_btns_quiz">
                    <button onClick={reset_quiz} className="btn_quiz">Intentar De Nuevo</button>
                    <button onClick={() => { handleCloseIn(data.percent) }} className="btn_quiz">Salir</button>
                </div>
            </div>
        </>
    )

}


export default RenderContentPopup_;
export { 
    RenderResultPopup_ 
};
