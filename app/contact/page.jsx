"use client"

import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/navbar/Navbar";
import Paragraph from "../components/pages/Paragraph";
import { AnimatePresence } from "framer-motion";
import StaticLoader from '../components/reusable/Loaders/StaticLoader'
import Button from "../components/reusable/Button";
import Form from '../components/pages/contact/Form';

const Contact = () => {

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
        <div className="font-gilroy overflow-x-hidden">
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
                        isLoading && <StaticLoader title='Contact'/>
                    }
                    </AnimatePresence>
                    <div className={`
                        bg-black 
                        transition 
                        duration-300

                    `}>
                    <div className="w-[80vw] flex flex-col ">
                    <div className={`
                            h-screen 
                            flex 
                            items-center 
                            justify-start 
                            text-3xl 
                            text-white
                            transition
                            duration-400
                            ease-in
                            w-full
                            
                            
                        `}>
                        <div className = {`
                            md:h-screen
                            text-3xl
                            md:text-6xl
                            font-semibold
                            leading-tight
                            md:leading-normal
                            gap-8
                            flex
                            flex-col
                            items-start
                            justify-center
                            text-white
                            
                            
                        `}>
                            <div className="flex items-center">
                                
                                <div className="w-[40vw]">
                                        
                                        <div className="flex flex-col">
                                            <div className="flex gap-4 items-center mb-[2%]">
                                                <div className={`
                                                        text-xs 
                                                        md:text-xl 
                                                        font-light
                                                        
                                                        
                                                `}>
                                                    Connect with me
                                                </div>
                                                <hr className={`
                                                        w-[100px] 
                                                        border-1
                                                        border-black
                                                `}/>
                                            </div>
                                            <div className="font-regular ">
                                                Lets have a <span className="text-[#ff2257]">chat</span>.
                                            </div>
                                        </div> 
                                </div>
                                <Form/>
                            </div>
                                

                        </div>
                        
                    </div>
                    
            </div>
                    </div>
                
            </div>
            
        </Container>
        </div>
        </>
     );
}
 
export default Contact;