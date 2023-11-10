"use client"

import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/navbar/Navbar";
import Paragraph from "../components/pages/Paragraph";
import { AnimatePresence } from "framer-motion";
import StaticLoader from '../components/reusable/Loaders/StaticLoader'
import ProjectMain from '../components/pages/projects/ProjectMain'
import TextField from '../components/reusable/Textfield'
import Button from '../components/reusable/Button'

const Projects = () => {

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

    const primary = <div className='font-regular leading-tight'>Its never "just a website". A good website must not only contain a robust and secure backend, but also an easy to use and user friencly frontend. Here are some my my works.<span className='text-[#ff2257]'> projects</span>.</div>;
    const secondary = <p className='font-regular leading-tight'>The main component of my design is<span className="text-[#ff2257]"> aesthetics.</span> I try to craft the perfect balance between <span className="text-[#ff2257]">aesthetics</span> and <span className="text-[#ff2257]">user experience.</span></p>;

    return ( 
        <Container>
            <div className="bg-black h-full flex flex-col justify-center items-center font-gilroy overflow-x-hidden">
                <Navbar/>
                <AnimatePresence>
                    {
                        isLoading && <StaticLoader title='Projects'/>
                    }
                </AnimatePresence>
                
                    {/* <TextField content={primary} tag='My work'/> */}
                <div className="">
                        <div className={`
                            h-screen 
                            flex 
                            items-center 
                            justify-center 
                            text-3xl 
                            text-white
                            transition
                            duration-400
                            ease-in
                            
                        `}>
                        <div className = {`
                            md:h-screen
                            text-3xl
                            md:text-6xl
                            font-semibold
                            leading-tight
                            md:leading-normal
                            w-[75%]
                            flex
                            flex-col
                            items-start
                            justify-center
                            
                        `}>
                                <div className="flex gap-4 items-center mb-[2%]">
                                    <div className={`
                                            text-xs 
                                            md:text-xl 
                                            opacity-60 
                                            font-light
                                            
                                            
                                    `}>
                                        My mediocre stuff
                                    </div>
                                    <hr className={`
                                            w-[100px] 
                                            border-1 
                                            opacity-60
                                            
                                    `}/>
                                </div>
                                
                            
                                <div className="font-regular ">
                                    {primary}
                                </div>
                                
                    
                        </div>
                    </div>
                        <div className="flex flex-col items-center mb-[15vw]">
                            <div className="mb-[10vw]">
                                <ProjectMain half={false} hideButton={true}/>
                            </div>
                            <div className='flex items-center justify-center  h-[10vw] w-[65vw]'>
                                <Button className='
                                        bg-transparent
                                        border-[1.5px]
                                        border-neutral-500
                                        h-[8vw] 
                                        w-[40vw] 
                                        rounded-full 
                                        flex 
                                        items-center 
                                        justify-center 
                                        hover:cursor-pointer
                                '>
                                    <div className="flex flex-col items-center space-y-[-10px]">
                                    <div className="z-10 text-xl group-hover:text-[20px] transition duration-1000 text-white">Github</div>
                                    </div>            
                                </Button>
                            </div>
                        </div>
                </div>
                

                
            </div>
            
        </Container>
     );
}
 
export default Projects;