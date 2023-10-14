'use client'

import { useScrollPosition } from "../../hooks/useScrollPosition";
import AnimatedCursor from "react-animated-cursor"

const Contact = () => {
    const scrollPosition = useScrollPosition();

    return ( 
        <div className = {`
            h-screen 
            flex 
            items-center 
            justify-center 
            text-3xl 
            text-black
            transition
            duration-400
            ease-in
            bg-white
            
        `}>
            
            Contact
        </div>
     );
}
 
export default Contact;