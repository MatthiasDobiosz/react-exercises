import React, { useState } from "react";
import Question from "./Question";
import "./questionnaire.css";
import { useTheme } from "../ThemeContext";

const Questionnaire = () => {

    const [colors, setColors] = useState([]);

    const toggleCols = (color) => {
        setColors(colors.includes(color)?colors.filter(c => c !== color):[...colors, color]);
        console.log(colors)
    }

    const darkTheme = useTheme();
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC'
    }

    return(
        <>
        <div className="questionnaire-container" style={themeStyles}>
            <h3>Please fill out following questions:</h3>
            <Question text="Are you green?" toggleCols={toggleCols} col="green"/>
            <Question text="Are you blue?" toggleCols={toggleCols} col="blue"/>
            <Question text="Are you yellow?" toggleCols={toggleCols} col="yellow"/>
        </div>
        <div className="summary">
            <div>You are {colors.length===0?"":colors.map((col, index) => {
                return(
                    index===colors.length-1?"and "+col:col+" "
                )
            })}</div>
        </div>
        </>
    );
}

export default Questionnaire;