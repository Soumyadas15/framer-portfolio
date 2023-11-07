'use client'

import { useScrollPosition } from "../../hooks/useScrollPosition";
import AnimatedCursor from "react-animated-cursor"
import Container from "../Container";
import Button from "../reusable/Button";

const Projects = () => {
    const scrollPosition = useScrollPosition();

    return ( 
        <Container>
            <div className="flex text-start justify-center">
                <div className = {`
                    h-screen
                    text-4xl
                    md:text-6xl
                    font-semibold
                    leading-snug
                    md:leading-normal
                    w-[80%]
                    flex
                    items-center
                    text-white
                `}>
                    
                        <div>
                            I am a <span className="text-[#ff2257]">visual designer</span> based in 
                            India. My passion for design comes from a pretty yoyng age 
                            indeed. I am a <span className="text-[#ff2257]">visual designer</span> based in 
                            India. My passion for design comes from a pretty yoyng age 
                            indeed.
                        </div>
                        
            
                </div>
            </div>
        </Container>
        
     );
}
 
export default Projects;