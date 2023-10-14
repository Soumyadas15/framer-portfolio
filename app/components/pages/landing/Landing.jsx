'use client'

import { useScrollPosition } from "../../../hooks/useScrollPosition";
import AnimatedCursor from "react-animated-cursor"
import { motion } from 'framer-motion'
import Container from "../../Container";
import RotatingText from '../../../utils/RotatingText'
import Rounded from '../../tools/Button'
import styles from './style.module.scss';

const Landing = ({
    
}) => {
    const scrollPosition = useScrollPosition();
    const texts = ["Text 1", "Text 2", "Text 3", "Text 4"];

    return ( 
        <div className = {`
            h-screen 
            flex 
            w-full
            items-center 
            justify-center 
            transition
            duration-400
            ease-in
            
        `}>
            <Container full={false}>
                
                <div className="w-screen flex justify-between">
                    <div className="ml-10 md:ml-20 md:text-8xl text-6xl flex text-center md:text-left flex-col">
                        <div className="text-white">I am</div>
                        <div className="font-bold text-green-400">Saumya</div>
                    </div>
                    
                </div>
            </Container>
        </div>
     );
}
 
export default Landing;