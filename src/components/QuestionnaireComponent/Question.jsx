import React, { useState } from "react";
import "./Question.css"

const Question = (props) => {

    const [active, setActive] = useState(false);

    const toggleQuestion = () =>{
        setActive(active?false:true)
        props.toggleCols(props.col);
    }
    return(
        <div className="question-container" onClick={toggleQuestion}>
            <p>{props.text}</p>
            <i className={active?"fas fa-check":"far fa-square"}></i>
        </div>
    )
}

export default Question;