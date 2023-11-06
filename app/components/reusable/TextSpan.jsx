"use client"

import {motion, useAnimationControls} from 'framer-motion'
import { useEffect, useState } from 'react';

export const translate = {
    initial: {
        y: "40%",
        opacity: 0
    },
    enter:{
        y: 0,
        opacity: 1,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    },
    exit:{
        y: "-40%",
        opacity: 0,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}

const TextSpan = ({children, start}) => {

    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);
    const [hoverColor, setHoverColor] = useState('#ff2257');

    const rubberBand = () => {
        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, .55, 1)",
                "scale3d(.75, 1.25, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
            ],
        });
        setIsPlaying(true);
    }

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return ( 
        <motion.span 
            animate = {controls}
            onMouseOver = {() => {
                if(!isPlaying){
                    rubberBand();
                    setHoverColor(getRandomColor());
                }
            }}
            onAnimationComplete={() => setIsPlaying(false)}
        >
            
                <span className={`
                        font-bold 
                        hover:text-green-500
                        hover:cursor-pointer
                        ${start ? 'text-black' : 'text-[#ff2257]'}
                    `}
                    
                >
                    {children}
                </span>
            
            
        </motion.span>
     );
}
 
export default TextSpan;