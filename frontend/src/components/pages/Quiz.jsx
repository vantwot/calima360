import React from "react";
import Header from "../Home/Header";
import RenderSections from "../utils/RenderSections";
import PopQuiz from "../utils/PopQuiz";
import axios from 'axios';
import Verificate from "../utils/verificate";
import RenderContentPopup_ from "../utils/QuizComponent";
import { RenderResultPopup_ } from "../utils/QuizComponent";
import RenderContentPopup from "../utils/RenderContentPopup";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

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
    const [ data_answer, setDataAnswer ] = React.useState([]);
    const [ select_answer, setSelectAnswer ] = React.useState([]);
    const [ select_answer_aux, setSelectAnswer_aux ] = React.useState([]);
    const [ visibleArrow , setVisibleArrow ] = React.useState(false);
    const [ options_all , setOptionsAll ] = React.useState(null);
    const [ data_axios , setDataAxios ] = React.useState([]);
    const navigate = useNavigate();
    const answer___ = ['A', 'B', 'C', 'D']
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

        if ((index__+ 1) > data_axios.length - 1) {
            setIndex__(0);
            setDataAnswer(data_axios[0]);
            setResultQuiz_(true);
            setActiveQuiz(false);
            setActiveQuiz_(false);

        } else {
            setDataAnswer(data_axios[(index__+ 1)]);
        }

    }

    const handleCloseResult = async (porcentaje) => {

        try {

            const URL = 'http://44.205.85.243:5000/usuario_cuestionario'
            const token = sessionStorage.token;
            const decodedToken = decodeToken(token);
            const userId = decodedToken.userId;
            console.log('userId333', (porcentaje));
            
            //
            const data__ = {
                "id_usuario": userId,
                "id_cuestionario": 18,
                "estado":  parseInt(porcentaje)
            }

            //post
            const response = await axios.post(URL, data__)
            const { data: data_ } = response;
            console.log('data_', data_);
            console.log('porcentaje', porcentaje);
            setResultQuiz_(false);
            setSelectAnswer([]);
            navigate('/profile');

        } catch (error) {
            console.log('error', error);
        }   

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
            
            setOptionsAll(data[index__].opciones)
            console.log('data4444', data[index__].opciones, data);
            //convertir la respuesta a la hecha en la logica
            //costo n^2
            data?.map((item, index) => {

                (item.opciones).filter((item_, index_) => {
                    if (item_.value !== '-1') {
                        item.answer = answer___[index_]
                        return null
                    }
                })
            })
           
            setDataAnswer(data[index__])
            setDataAxios(data)
        }

        data();
        

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
                                title={'HISTORIA'}
                                description={data_answer.pregunta}
                                set_data_answer={setSelectAnswer_aux}
                                select_answer={select_answer_aux}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                                options_all={data_answer.opciones}
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
                        total={data_axios}
                />} 
                class_="_container_result_quiz"
            /> 
            }
        </>
    );

}

export default Quiz;