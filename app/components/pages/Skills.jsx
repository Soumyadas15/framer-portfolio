'use client'

import { useScrollPosition } from "../../hooks/useScrollPosition";
import AnimatedCursor from "react-animated-cursor"
import { useScroll } from "framer-motion";
import dynamic from 'next/dynamic';
import Skillset from '../skils'

const Earth = dynamic(() => import('../earth'), {
    ssr: false,
    loading: () => <img src="/assets/placeholder.png"></img>
  })

const Skills = () => {
    const scrollPosition = useScrollPosition();

    return ( 
        <div className = {`
            h-screen 
            flex 
            items-center 
            justify-center 
            text-3xl 
            transition
            duration-400
            ease-in
            relative
            no-cursor
        `}>
            <div className="h-[700px] w-[700px]">
                <Earth/>
            </div>
            <Skillset/>
        </div>
     );
}
 
export default Skills;