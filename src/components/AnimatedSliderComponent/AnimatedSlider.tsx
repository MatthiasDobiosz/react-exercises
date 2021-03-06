import React, {useState} from "react";
import {motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "./AnimatedSlider.css"

const images = ["first-slide.jpg","second-slide.jpg","third-slide.jpg","fourth-slide.jpg"];

const variants = {
    enter: (direction: number) => {
        return{
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return{
            zIndex: 0,
            x: direction < 0 ? 1000: -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset)*velocity;
};

export const AnimatedSlider = () => {

    const [[page, direction], setPage] = useState([0,0]);

    const imageIndex = wrap(0, images.length, page);

    const crement = (newDirection: number) => {
        setPage([page+newDirection, newDirection]);
    }

    return (
        <div className="slider-container">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    className="slide-img"
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x:{type: "spring", stiffness:300, damping: 30},
                        opacity: { duration: 0.2}
                    }}
                    drag="x"
                    dragConstraints={{left:0, right:0}}
                    dragElastic={1}
                    onDragEnd={(e, {offset, velocity}) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if(swipe < -swipeConfidenceThreshold){
                            crement(1);
                        }
                        else if(swipe > swipeConfidenceThreshold){
                            crement(-1);
                        }
                    }}
                />
            </AnimatePresence>
            <div className="next" onClick={() => crement(-1)}>
                <i className="fas fa-chevron-right"></i>
            </div>
            <div className="prev" onClick={() => crement(1)}>
                <i className="fas fa-chevron-left"></i>
            </div>

        </div>
    );

};

