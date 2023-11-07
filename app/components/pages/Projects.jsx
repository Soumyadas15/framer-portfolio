'use client'

import { useScrollPosition } from "../../hooks/useScrollPosition";
import AnimatedCursor from "react-animated-cursor"
import Container from "../Container";
import Button from "../reusable/Button";

const Projects = ({tag, content, black}) => {
    const scrollPosition = useScrollPosition();

    return ( 
        <Container>
            <div className="flex text-start justify-center">
                <div className = {`
                    h-screen
                    text-3xl
                    md:text-6xl
                    font-semibold
                    leading-tight
                    md:leading-normal
                    w-[80%]
                    flex
                    flex-col
                    items-start
                    justify-center
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
                        
                    
                        <div>
                            {content}
                        </div>
                        
            
                </div>
            </div>
        </Container>
        
     );
}
 
export default Projects;