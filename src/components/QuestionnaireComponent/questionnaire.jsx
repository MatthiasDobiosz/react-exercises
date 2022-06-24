import React from "react";
import Question from "./Question";
import "./questionnaire.css"

const Questionnaire = () => {
    return(
        <>
        <div className="questionnaire-container">
            <h3>Please fill out following questions:</h3>
            <Question text="Are you single?"/>
            <Question text="Are you working?"/>
            <Question text="Are you confident?"/>
        </div>
        <div className="summary">
            <p> Hello </p>
        </div>
        </>
    );
}

export default Questionnaire;