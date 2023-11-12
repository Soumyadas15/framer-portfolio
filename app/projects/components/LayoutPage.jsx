"use client"

import { useEffect, useRef, useState } from "react";
import Container from "../../components/Container";
import Navbar from '../../components/navbar/Navbar'
import Button from '../../components/reusable/Button'

const LayoutPage = () => {

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

    const primary = <div className='font-regular leading-tight'>Its never just a website. A good website must not only contain a robust and secure backend, but also an easy to use and user friencly frontend. Here are some my my works.<span className='text-[#ff2257]'> projects</span>.</div>;
    const secondary = <p className='font-regular leading-tight'>The main component of my design is<span className="text-[#ff2257]"> aesthetics.</span> I try to craft the perfect balance between <span className="text-[#ff2257]">aesthetics</span> and <span className="text-[#ff2257]">user experience.</span></p>;

    return ( 
        <Container>
            <Navbar/>
            <div className="w-[80vw] flex flex-col">
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
                                        Have an <span className="text-[#ff2257]">idea</span>?
                                    </div>
                                    <div className="font-regular ">
                                        I&apos;d be happy to <span className="text-[#ff2257]">help out</span>.
                                    </div>
                                </div>
                                
                                <div className='flex items-center justify-between mt-[4%] h-[10vw] w-[80vw]'>
                                    <div>
                                        <Button className='
                                                relative
                                                bg-transparent
                                                border-[1.5px]
                                                border-black
                                                h-[8vw] 
                                                w-[30vw] 
                                                rounded-full 
                                                flex 
                                                items-center 
                                                justify-center 
                                                hover:cursor-pointer
                                                overflow-hidden
                                        '>
                                            <div className="flex flex-col items-center space-y-[-10px]">
                                            <div className="z-10 text-xl group-hover:text-[20px] transition duration-1000 text-black">Contact</div>
                                            </div>            
                                        </Button>
                                    </div>
                                    
                                </div>
                        </div>
                        
                    </div>
                    
            </div>
        </Container>
     );
}
 
export default LayoutPage;