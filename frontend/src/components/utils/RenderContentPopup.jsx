import React from 'react';


const RenderContentPopup = ({
    title,
    description,
    set_data_answer,
    selectedOption, 
    setSelectedOption,
    options_all
}) => {
    //console.log(selectedOption, 'Estoy Cansado');
    const [ data , setData ] = React.useState({
        title: title,
        description: description,
        options_all: options_all
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
            options_all: options_all
        }) 

    }, [description, title, options_all])

    return (
    <>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <ol style={{
            listStyle: 'upper-latin'
        }}>
         {
            data.options_all?.map((item, index) => {
                const options_ = ['A', 'B', 'C', 'D'];
               
                return (
                    <li key={index}> 
                          <input 
                            checked={selectedOption[`selectedOption${options_[index]}`]}
                            onChange={handleAnswer} 
                            value={options_[index]} 
                            type="radio" 
                            name="opcion" />{item.opcion}</li>
                )
            })
         }
        </ol>
    </>)
}


export default RenderContentPopup;