import React from "react";
import Header from "../Home/Header";
import RenderSections from "../utils/RenderSections";
import PopupGeneral from "../utils/PopupGeneral";

//Informacion de la seccion Quiz
const DATA_HISTORY = [
    {
        title: 'ORFEBRERÍA',
        img: 'orfebreria.svg',
        target: '',
        disabled: false,
        state: true
    },
    {
        title: 'HISTORIA',
        img: 'historia.svg',
        target: '',
        disabled: true,
        state: true
    },
    {
        title: 'MITOLOGÍA',
        img: 'mitologia.svg',
        target: '',
        disabled: false,
        state: true
    }
]


function RenderContentPopup() {
    return (
    <>
        <h1>HISTORIA</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Nullam sed lectus elit. Donec sed magna mi. Nullam fermentum metus vitae risus  <br />
            feugiat curae; Sed euismod bibendum odio at semper.
        </p>
        <ol style={{
            listStyle: 'upper-latin'
        }}>
            <li> <input type="radio" name="opcion" />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li> <input type="radio" name="opcion" />Nullam sed lectus elit. Donec sed magna mi. Nullam fermentum metus vitae risus feugiat curae; Sed euismod bibendum odio at semper.</li>
            <li> <input type="radio" name="opcion"  />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li> <input type="radio" name="opcion"  />Nullam sed lectus elit. Donec sed magna mi. Nullam fermentum metus vitae risus feugiat curae; Sed euismod bibendum odio at semper.</li>
        </ol>
    </>)
}


/**
 * @description Componente
 * @returns Componente Quiz
 */
const Quiz = () => {

    //variables
    const [ active_quiz, setActiveQuiz ] = React.useState(false);

    //funciones
    const handleClose_quiz = () => {
        setActiveQuiz(!active_quiz);
    }

    //render component
    return (
        <>
            <Header login={true} />
            <RenderSections state_use={{ 
                                         get: active_quiz ,  
                                         set: setActiveQuiz
                            }} 
                            title="CUESTONARIO" 
                            content_section={DATA_HISTORY} />
            {active_quiz &&  <PopupGeneral handleCloseIn={handleClose_quiz} children_={<RenderContentPopup />} />}
        </>
    );

}

export default Quiz;