'use client'

import { useScrollPosition } from "../../hooks/useScrollPosition";
import AnimatedCursor from "react-animated-cursor"

const Projects = ({
    label,
    position,
    
}) => {
    const scrollPosition = useScrollPosition();

    return ( 
        <div className = {`
            h-screen 
            flex 
            items-center 
            justify-center 
            text-3xl 
            text-white
            transition
            duration-400
            ease-in
            ${scrollPosition >= position ? 'bg-white text-black' : 'bg-black'}
        `}>
            
            {label}
        </div>
     );
}
 
export default Projects;