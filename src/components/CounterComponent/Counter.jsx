import React, { useState } from "react";
import "./Counter.css"

const Counter = () => {
    const [num, setNum] = useState(0);

    const incrementCounter = () => {
        setNum(prev => prev+1)
    }

    const decrementCounter = () => {
        setNum(prev => prev-1);
    }
    return(
        <>
            <div className="Counter-container">
                <button className="button-up" onClick={incrementCounter}>Up</button>
                    <div className="number">{num}</div>
                <button className="buttown-down" onClick={num>0?decrementCounter:null}>Down</button>
            </div>
        </>
    );
}

export default Counter;