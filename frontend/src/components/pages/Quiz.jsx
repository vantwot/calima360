import React, { useEffect } from "react";
import Header from "../Home/Header";
import RenderSections from "../utils/RenderSections";
import PopQuiz from "../utils/PopQuiz";
import PopupGeneral from "../utils/PopupGeneral";
import axios from 'axios';
import Verificate from "../utils/verificate";

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


const DATA_QUIZ = [
    {
        title: 'ORFEBRERÍA',
        description: '¿Cuál de las siguientes afirmaciones es verdadera acerca de la orfebrería de los calimas?',
        text_a: 'Los calimas eran expertos en la fabricación de armas y herramientas de metal.',
        text_b: 'Los calimas no practicaban la orfebrería y se enfocaban en otras formas de arte.',
        text_c: 'La orfebrería calima se caracterizaba por el uso exclusivo de oro como material.',
        text_d: 'Los calimas no tenían conocimientos sobre el trabajo con metales y no practicaban la orfebrería.',
        answer: 'C'
    },
    {
        title: 'HISTORIA',
        description: '¿Cuál de las siguientes afirmaciones es verdadera acerca de la historia de los calimas?',
        text_a: 'Los calimas fueron una cultura que se desarrolló en la región de la Amazonia.',
        text_b: 'Los calimas eran una civilización contemporánea de los antiguos egipcios.',
        text_c: 'Los calimas eran conocidos por sus habilidades náuticas y navegaban por el océano Atlántico.',
        text_d: 'Los calimas fueron una cultura precolombina que habitó en la región del Valle del Cauca, Colombia.',
        answer: 'D'
    },
    {
        title: 'MITOLOGÍA',
        description: '¿Cuál de las siguientes afirmaciones es verdadera acerca de la mitología de los calimas?',
        text_a: 'Los calimas adoraban a una deidad principal conocida como "Calima", considerada la diosa de la naturaleza.',
        text_b: 'La mitología calima estaba centrada en la adoración de seres mitológicos marinos, como sirenas y tritones.',
        text_c: 'Los calimas creían en la existencia de un mundo subterráneo habitado por espíritus malignos y serpientes gigantes.',
        text_d: 'Ninguna de las anteriores.',
        answer: 'D'
    }
]

function RenderContentPopup({
    title,
    description,
    text_a,
    text_b,
    text_c,
    text_d,
    set_data_answer,
    select_answer,
    selectedOption, 
    setSelectedOption,
    options_all
}) {

    const [ data , setData ] = React.useState({
        title: title,
        description: description,
        text_a: text_a,
        text_b: text_b,
        text_c: text_c,
        text_d: text_d,
    });

    const handleAnswer = (e) => {
        console.log(e.target.value, 'value');
        set_data_answer([e.target.value]);
        setSelectedOption({
            selectedOptionA: 'A' === e.target.value,
            selectedOptionB: 'B' === e.target.value,
            selectedOptionC: 'C' === e.target.value,
            selectedOptionD: 'D' === e.target.value,
        });
    }

    React.useEffect(() => {

        setData({
            title: title,
            description: description,
            text_a: text_a,
            text_b: text_b,
            text_c: text_c,
            text_d: text_d,
        }) 

    }, [description, text_a, text_b, text_c, text_d, title])

    return (
    <>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        {
        options_all?
        <ol style={{
            listStyle: 'upper-latin'
        }}>
         {
            options_all.map((item, index) => {
                const options_ = ['A', 'B', 'C', 'D'];
                return (
                    <li key={index}> <input 
                            checked={selectedOption[`selectedOption${options_[index]}}`]}
                            onChange={handleAnswer} 
                            value={options_[index]} 
                            type="radio" 
                            name="opcion" />{item}</li>
                )
            })
         }
        </ol>
        :
        <ol style={{
            listStyle: 'upper-latin'
        }}>
            <li> <input 
                    checked={selectedOption.selectedOptionA}
                    onChange={handleAnswer} 
                    value={'A'} 
                    type="radio" 
                    name="opcion" />{data.text_a}</li>
            <li> <input 
                    checked={selectedOption.selectedOptionB}
                    onChange={handleAnswer} 
                    value={'B'} 
                    type="radio" 
                    name="opcion" />{data.text_b}</li>
            <li> <input 
                    checked={selectedOption.selectedOptionC}
                    onChange={handleAnswer} 
                    value={'C'} 
                    type="radio" 
                    name="opcion"  />{data.text_c}</li>
            <li> <input checked={selectedOption.selectedOptionD} 
                    onChange={handleAnswer} 
                    value={'D'} 
                    type="radio" 
                    name="opcion"  />{data.text_d}</li>
        </ol>
        }
    </>)
}

function RenderContentPopup_({
    handleCloseIn,
    reset_quiz
}) {
    return (
    <>
        <div className="_container_close_quiz">
            <h1>Cierre De Quiz</h1>
            <p>
                Estas seguro de cerrar el quiz? <br />
                Perderas tu progreso.
            </p>
            <div className="container_btns_quiz">
                <button onClick={reset_quiz} className="btn_quiz">Si</button>
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
        total: total.length
    });
    
    return (
        <>
            <div className="_container_close_quiz">
                <h1>Resultado</h1>
                <p>
                    Tu Puntuacion Es: <br />
                    {data.result} / {data.total} <br />
                    {data.result >= 3 ? 'Felicidades' : 'Sigue Intentando'}
                </p>
                <div className="container_btns_quiz">
                    <button onClick={reset_quiz} className="btn_quiz">Intentar De Nuevo</button>
                    <button onClick={handleCloseIn} className="btn_quiz">Salir</button>
                </div>
            </div>
        </>
    )

}

/**
 * @description Componente
 * @returns Componente Quiz
 */
const Quiz = () => {

    //variables
    const [ index__ , setIndex__ ] = React.useState(0);
    const [ active_quiz, setActiveQuiz ] = React.useState(false);
    const [ active_quiz_, setActiveQuiz_ ] = React.useState(false);
    const [ result_quiz_, setResultQuiz_ ] = React.useState(false);
    const [ data_answer, setDataAnswer ] = React.useState(DATA_QUIZ[index__]);
    const [ select_answer, setSelectAnswer ] = React.useState([]);
    const [ select_answer_aux, setSelectAnswer_aux ] = React.useState([]);
    const [ visibleArrow , setVisibleArrow ] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState({
        selectedOptionA: false,
        selectedOptionB: false,
        selectedOptionC: false,
        selectedOptionD: false,
    });
    const [ options_all , setOptionsAll ] = React.useState(null);

    //funciones
    const handleClose_quiz = () => {
        setActiveQuiz(!active_quiz);
        setActiveQuiz_(!active_quiz_);
    }

    const reset_quiz = () => {
        setActiveQuiz_(!active_quiz_);
    }

    const handleNext = () => {
        setSelectAnswer([...select_answer, ...select_answer_aux]);
        setSelectAnswer_aux([]);
        setVisibleArrow(false);
        setSelectedOption({
            selectedOptionA: false,
            selectedOptionB: false,
            selectedOptionC: false,
            selectedOptionD: false,
        });

        setIndex__(index__ + 1);

        if ((index__+ 1) > DATA_QUIZ.length - 1) {
            setIndex__(0);
            setDataAnswer(DATA_QUIZ[0]);
            setResultQuiz_(true);
            setActiveQuiz(false);
            setActiveQuiz_(false);

        } else {
            setDataAnswer(DATA_QUIZ[(index__+ 1)]);
        }

    }

    const handleCloseResult = () => {
        setResultQuiz_(false);
        setSelectAnswer([]);
    }

    const handleAgainQuiz = () => {
        handleCloseResult();
        setActiveQuiz(true);
        setSelectAnswer([]);
    }

    React.useEffect( () => {
        const URL = 'http://44.205.85.243:5000/cuestionario';

        const data = async () => {
            const response = await axios.get(URL)
            const { data }  = (response);
            console.log(data[0]);
            //setOptionsAll(data[0].opciones);
            //return data;
        }

        //data()

    }, [])

    React.useEffect(() => {
        
        if (select_answer_aux.length > 0) {
            setVisibleArrow(true);
        }
    }, [select_answer_aux])


    //render component
    return (
        <>
            <Verificate target={"/profile/quiz"} />
            <Header login={true} />
            <RenderSections state_use={{ 
                                         get: active_quiz ,  
                                         set: setActiveQuiz
                            }} 
                            title="CUESTONARIO" 
                            content_section={DATA_HISTORY} />
            {active_quiz &&  
               <PopQuiz 
                   visibleClose={true} 
                   visible={visibleArrow} 
                   handleCloseIn={handleClose_quiz} 
                   handleNext={handleNext}
                   children_={<RenderContentPopup 
                                title={data_answer.title}
                                description={data_answer.description}
                                text_a={data_answer.text_a}
                                text_b={data_answer.text_b}
                                text_c={data_answer.text_c}
                                text_d={data_answer.text_d}
                                set_data_answer={setSelectAnswer_aux}
                                select_answer={select_answer_aux}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                                options_all={options_all}
                   />} 
                   class=""
                />}
            { active_quiz_ && 
               <PopQuiz 
                 visibleClose={false} 
                 visible={false} 
                 handleCloseIn={handleClose_quiz} 
                 children_={<RenderContentPopup_    
                         handleCloseIn={handleClose_quiz}
                         reset_quiz={reset_quiz}
                 />} 
                 class_="_container_close_quiz"
              /> 
            }
            { result_quiz_ && 
               <PopQuiz 
                 visibleClose={false} 
                 visible={false} 
                 handleCloseIn={handleCloseResult} 
                 children_={<RenderResultPopup_    
                         handleCloseIn={handleCloseResult}
                         reset_quiz={handleAgainQuiz}
                         result={select_answer}
                         total={DATA_QUIZ}
                 />} 
                 class_="_container_result_quiz"
              /> 
            }
        </>
    );

}

export default Quiz;