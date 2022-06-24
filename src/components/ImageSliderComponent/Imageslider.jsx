import React, { useState } from "react";
import "./Imageslider.css";
import { motion, AnimatePresence } from "framer-motion"

const images = ["first-slide.jpg","second-slide.jpg","third-slide.jpg","fourth-slide.jpg"];

const Imageslider = () => {

    const [currentImage, setCurrentImage] = useState(images[0]);

    const decrement = () => {
        if(images.indexOf(currentImage) !== 0){
            setCurrentImage(images[images.indexOf(currentImage)-1])
        }
        else{
            setCurrentImage(images[images.length-1]);
        }


    }

    const increment = () => {
        if(images.indexOf(currentImage) !== images.length-1){
            setCurrentImage(images[images.indexOf(currentImage)+1])
        }
        else{
            setCurrentImage(images[0]);
        }
        
    }

    return(
        <div className="slider-container">
            <button className="previous-button" onClick={decrement}><i className="fas fa-chevron-left"></i></button>
            <AnimatePresence>
                <motion.img 
                src={`\\${currentImage}`}
                alt="first"
                initial={{ opacity: 0, y: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                />
            </AnimatePresence>
            <button className="next-button" onClick={increment}><i className="fas fa-chevron-right"></i></button>
        </div>
    );
}

export default Imageslider;
