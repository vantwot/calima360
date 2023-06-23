import React from "react";
import Header from "../Home/Header";
import RenderSections from "../utils/RenderSections";
import PopQuiz from "../utils/PopQuiz";
import axios from 'axios';
import Verificate from "../utils/verificate";
import RenderContentPopup_ from "../utils/QuizComponent";
import { RenderResultPopup_ } from "../utils/QuizComponent";
import RenderContentPopup from "../utils/RenderContentPopup";

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
        title: 'HISTORIA',
        description: '¿Cuál de las siguientes afirmaciones es verdadera acerca de la orfebrería de los calimas?',
        questions: [
            {
                opcion: `Los calimas eran expertos en la fabricación de armas y herramientas de metal.`
            },
            {
                opcion: `Los calimas no practicaban la orfebrería y se enfocaban en otras formas de arte.`
            },
            {
                opcion: `La orfebrería calima se caracterizaba por el uso exclusivo de oro como material.`
            },
            {
                opcion: `Los calimas no tenían conocimientos sobre el trabajo con metales y no practicaban la orfebrería.`
            }
        ],
        answer: 'C'
    },
    {
        title: 'HISTORIA',
        description: '¿Cuál de las siguientes afirmaciones es verdadera acerca de la historia de los calimas?',
        questions: [
            {
                opcion: 'Los calimas fueron una cultura que se desarrolló en la región de la Amazonia.'
            },
            {
                opcion: 'Los calimas eran una civilización contemporánea de los antiguos egipcios.'
            },
            {
                opcion: 'Los calimas eran conocidos por sus habilidades náuticas y navegaban por el océano Atlántico.'
            },
            {
                opcion: 'Los calimas fueron una cultura precolombina que habitó en la región del Valle del Cauca, Colombia.'
            }
        ],
        answer: 'D'
    },
    {
        title: 'HISTORIA',
        description: '¿Cuál de las siguientes afirmaciones es verdadera acerca de la mitología de los calimas?',
        questions: [
            {
                opcion: 'Los calimas adoraban a una deidad principal conocida como "Calima", considerada la diosa de la naturaleza.'
            },
            {
                opcion: 'La mitología calima estaba centrada en la adoración de seres mitológicos marinos, como sirenas y tritones.'
            },
            {
                opcion: 'Los calimas creían en la existencia de un mundo subterráneo habitado por espíritus malignos y serpientes gigantes.'
            },
            {
                opcion: 'Ninguna de las anteriores.'
            }
        ],
        answer: 'D'
    }
];


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
    const [ options_all , setOptionsAll ] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState({
        selectedOptionA: false,
        selectedOptionB: false,
        selectedOptionC: false,
        selectedOptionD: false,
    });
    

    //funciones
    const handleClose_quiz = () => {
        setActiveQuiz(!active_quiz);
        setActiveQuiz_(!active_quiz_);
    }

    const reset_quiz = () => {
        setActiveQuiz_(!active_quiz_);
    }

    const handleNext = () => {
        console.log('select_answer_aux', select_answer_aux);
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
        }

        //data();
        setOptionsAll(DATA_QUIZ[index__].questions)

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