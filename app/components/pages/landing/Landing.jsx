'use client'

import { useScrollPosition } from "../../../hooks/useScrollPosition";
import Container from "../../Container";
import TextSpan from '../../reusable/TextSpan'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from '../../reusable/Button'
import Image from "next/image";

const translate = {
    initial: {
        y: "110%",
        opacity: 1
    },
    enter: (i) => ({
        y: 0,
        opacity: 1,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: i + 1}
    }),
    exit: (i) => ({
        y: "100%",
        opacity: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    })
}
const translateStatic = {
    initial: {
        y: "110%",
        opacity: 0
    },
    enter:{
        y: 0,
        opacity: 1,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2}
    },
    exit:{
        y: "100%",
        opacity: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}
const imageTranslate = {
    initial: {
        scale: 1.8,
        opacity: 1,
    },
    enter:{
        scale: 1,
        opacity: 1,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.8}
    },
    exit:{
        scale: "1.5",
        opacity: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}
const imageDivTranslate = {
    initial: {
        scale: 1.8,
        opacity: 1,
    },
    enter:{
        scale: 1,
        opacity: 1,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.2}
    },
    exit:{
        scale: "1.5",
        opacity: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}

const Landing = ({
    
}) => {
    const scrollPosition = useScrollPosition();
    const texts = ["Text 1", "Text 2", "Text 3", "Text 4"];
    const name = "Soumya".split("");
    const start = "Im".split("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 2200);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return ( 
        <div className = {`
            h-screen 
            flex 
            
            items-center 
            justify-center 
            transition
            duration-400
            ease-in
            
        `}>
            <Container full={false}>
                
                <div className="flex flex-col items-center">
                    <div className="w-screen flex flex-col md:flex-row justify-between">
                        <div className="md:ml-20 md:text-[12vw] text-8xl flex items-center z-10 md:items-start flex-col">
                                {isVisible && (
                                    <div className="flex h-auto overflow-hidden">
                                        {start.map((letter, index) => {
                                            return( 
                                                
                                                    <TextSpan key={index} start={true}>
                                                        <motion.div
                                                            custom={(index * 0.1)}
                                                            variants={translate}
                                                            initial='initial'
                                                            animate='enter'
                                                            exit='exit'
                                                            key={index}
                                                        >
                                                            {letter}
                                                        </motion.div>
                                                    </TextSpan>
                                                
                                            )
                                        })}
                                    </div>
                                )}
                                {isVisible && (
                                    <div className="flex overflow-hidden h-auto md:h-auto">
                                        {name.map((letter, index) => {
                                            return(
                                                    <TextSpan key={index}>
                                                        <motion.div
                                                            custom={(index * 0.1)}
                                                            variants={translate}
                                                            initial='initial'
                                                            animate='enter'
                                                            exit='exit'
                                                            key={index}
                                                        >
                                                            {letter}
                                                        </motion.div>
                                                    </TextSpan>
                                                
                                            )
                                        })}
                                    </div>
                                )}
                        </div>
                        {isVisible && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 md:opacity-80">
                                <motion.div
                                    variants={imageDivTranslate} 
                                    initial='initial' 
                                    animate='enter' 
                                    exit='exit'
                                
                                >
                                    <div className="h-[40vw] w-[35vw] flex items-center justify-center relative group overflow-hidden">
                                        <motion.img
                                            variants={imageTranslate} 
                                            initial='initial' 
                                            animate='enter' 
                                            exit='exit'
                                            alt="cover"
                                            fill
                                            src={'/images/shape.png'}
                                            className='
                                                object-fit 
                                                h-full 
                                                w-full 
                                                group-hover:scale-105
                                                transition
                                            '
                                        />
                                    </div>
                                </motion.div>
                                
                            </div>
                        )}

                        {isVisible && (
                            <div className="flex flex-col">
                                <div className="md:mr-20 flex flex-col items-center mt-10 md:items-end z-10">
                                    <motion.div variants={translateStatic} initial='initial' animate='enter' exit='exit'>
                                        <div className="overflow-hidden font-gilroy">
                                            I am an interactive designer based
                                        </div>
                                    </motion.div>
                                    <motion.div variants={translateStatic} initial='initial' animate='enter' exit='exit'>
                                        <div className="overflow-hidden font-gilroy">
                                            in India. I make engaging experiences
                                        </div> 
                                    </motion.div>
                                    <motion.div variants={translateStatic} initial='initial' animate='enter' exit='exit'>
                                        <div className="overflow-hidden font-gilroy">
                                            for the web.
                                        </div>
                                    </motion.div>
                                </div>
                                
                            </div>
                            
                        )}
                        
                        
                    </div>
                    
                    <div className="w-[88%] h-5 flex items-center justify-between absolute bottom-10 md:bottom-20 gap-5">
                        <div className="flex gap-5">
                            <div className="bg-[#ff2257] p-4 rounded-full"/>
                            <div className="bg-black p-4 rounded-full"/>
                        </div>
                        {isVisible && (
                            <motion.div variants={translateStatic} initial='initial' animate='enter' exit='exit'>
                                <div className="flex items-center gap-4">
                                <hr className="w-[100px] border-1 border-black"/>
                                    <div className="text-xs md:text-md">
                                        Created by Soumya @ 2023
                                    </div> 
                                </div>
                            </motion.div>
                        )}
                    </div>
                    
                </div>
                
            </Container>
        </div>
     );
}
 
export default Landing;