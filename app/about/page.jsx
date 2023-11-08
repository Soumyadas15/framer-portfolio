"use client"


import { useEffect, useState } from "react";
import Container from "../components/Container";
import Skills from "../components/pages/Skills";
import { AnimatePresence } from "framer-motion";
import StaticLoader from "../components/reusable/Loaders/StaticLoader";
import Navbar from "../components/navbar/Navbar";

const About = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (
          async() => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
    
            setTimeout(() => {
              setIsLoading(false);
              document.body.style.cursor = 'default';
            }, 1500)
          }
        )()
      }, []);

    return ( 
        <>
        <Navbar/>
        <Container full={true}>
            <div className={`
            bg-black
            transition 
            duration-300

        `}>
            <AnimatePresence mode='wait'>
            {
                isLoading && <StaticLoader title='About' />
            }
            </AnimatePresence>
            <div className='flex h-screen flex-col justify-center'>
                <Skills/>
            </div>
            
        </div>
            
        </Container>
        </>
     );
}
 
export default About;