import React, {useState, useRef} from "react";
import "./Accordion.css"
import Chevron from "./Chevron";

const Accordion = (props) =>{

    const [active, setActive] = useState("");
    const [heightState, setHeightState] = useState("0px");
    const [rotate, setRotate] = useState("accordion__icon");

    const content = useRef(null);

    const toggleAccordion = () => {
        setActive(active===""?"active":"");
        setHeightState(active==="active"?"0px":`${content.current.scrollHeight}px`);
        setRotate(active==="active"?"accordion_icon":"accordion_icon rotate")
    }

    return(
        <div className="accordion__section">
            <button className={`accordion ${active}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.title}</p>
                <Chevron className={`${rotate}`} width={10} fill={'#777'} />
            </button>
            <div ref={content} style={{maxHeight: `${heightState}`}} className="accordion__content">
                <div className="accordion__text"  dangerouslySetInnerHTML={{__html: props.content}}/> 
            </div>
        </div>
    )
}

export default Accordion;