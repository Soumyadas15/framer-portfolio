'use client'

import { useScrollPosition } from "../../hooks/useScrollPosition";
import AnimatedCursor from "react-animated-cursor"
import Container from "../Container";
import Button from "./Button";
import { useRef } from "react";
import { useInView } from "framer-motion";

const TextField = ({tag, content, black}) => {
    const scrollPosition = useScrollPosition();
    return ( 
        
        <div className={`
                
                
                ${black ? 'text-black' : 'text-white'}
            `}>
            <div className = {`
                
                
                ${black ? 'text-black' : 'text-white'}
            `}>
                    <div className="flex gap-4 items-center mb-[2%]">
                        <div className={`
                                text-xs 
                                md:text-xl 
                                opacity-60 
                                font-light
                                
                                ${black ? 'text-black' : 'text-white'}
                        `}>
                            {tag}
                        </div>
                        <hr className={`
                                w-[100px] 
                                border-1 
                                opacity-60
                                ${black ? 'border-black' : 'border-white'}
                        `}/>
                    </div>
                    
                
                    <div className="font-regular ">
                        {content}
                    </div>
                    
        
            </div>
        </div>
    
    
     );
}
 
export default TextField;