'use client'

import { useScrollPosition } from "../../hooks/useScrollPosition";
import AnimatedCursor from "react-animated-cursor"
import { useScroll } from "framer-motion";
import dynamic from 'next/dynamic';
import Skillset from '../skils'
import Button from '../reusable/Button'
import styles from './style.module.scss';

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
            
        `}>
            <div className="h-[700px] w-[700px] hidden md:block">
                <Earth/>
            </div>
        

            

            <Button className='
                absolute 
                bottom-20 
                left-2/4 
                md:right-5
                transform -translate-x-2/4 
                w-36 
                h-36 
                md:bottom-20
                md:left-auto
                bg-[#ff2257] 
                text-white 
                rounded-full 
                flex 
                items-center 
                justify-center 
                cursor-pointer
                group
                z-10
            '>
                    <div className="flex flex-col items-center space-y-[-5px]">
                       <div className="z-10 text-[20px] group-hover:text-black">Hover</div>
                        <div className="z-10 text-[20px] group-hover:text-black">me</div> 
                    </div>
                        
            </Button>
            
            
            <Skillset/>
        </div>
     );
}
 
export default Skills;