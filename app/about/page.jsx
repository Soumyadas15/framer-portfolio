"use client"

import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/navbar/Navbar";
import Paragraph from "../components/pages/Paragraph";
import { AnimatePresence } from "framer-motion";
import StaticLoader from '../components/reusable/Loaders/StaticLoader'

const About = () => {

    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef(null);

    const options = {
        getDirection: true,
    };


    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
      }, 1000)
    }, [])
    
    useEffect(() => {
        let scroll;
    
        // Import the Locomotive Scroll module dynamically
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                smooth: true,
                smoothMobile: false,
                resetNativeScroll: true
            });
        });
    
        
        return () => {
            if (scroll) {
                scroll.destroy();
            }
        };
    }, []);

    const primary = <div className='font-regular leading-tight'><span className="text-[#ff2257]">I am an interactive developer</span> based in India. I like <span className='text-[#ff2257]'>creating visually appealing experiences.</span> My goal is to inspire and connect with people through development and design.</div>;
    const secondary = <p className='font-regular leading-tight'>The main component of my design is<span className="text-[#ff2257]"> aesthetics.</span> I try to craft the perfect balance between <span className="text-[#ff2257]">aesthetics</span> and <span className="text-[#ff2257]">user experience.</span></p>;

    return ( 
        <>
        <div className="font-gilroy">
        <Container full={true}>
            <Navbar/>
            <div className="
                        bg-black 
                        h-full
                        flex
                        justify-center
                        
                ">
                    <AnimatePresence>
                    {
                        isLoading && <StaticLoader title='About'/>
                    }
                    </AnimatePresence>
                    <div className={`
                        bg-black 
                        transition 
                        duration-300

                    `}>
                    <div className='flex h-full flex-col'>
                        
                        
                        <Paragraph tag='Little bit about me' content={primary}/>
                        
                        <Paragraph tag='Background' content={primary}/>
                        
                        <Paragraph tag='Little bit about me' content={primary}/>
                    </div>
                    </div>
                
            </div>
            
        </Container>
        </div>
        </>
     );
}
 
export default About;