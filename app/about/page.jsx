"use client"

import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/navbar/Navbar";
import Paragraph from "../components/pages/Paragraph";

const About = () => {

    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef(null);

    const options = {
        getDirection: true,
    };

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
    
        // Cleanup function, only executed after the scroll variable is defined
        return () => {
            if (scroll) {
                scroll.destroy();
            }
        };
    }, []);

    const primary = <div className='font-regular leading-tight'><span className="text-[#ff2257]">I am an interactive developer</span> based in India. I like <span className='text-[#ff2257]'>creating visually appealing experiences.</span> My goal is to inspire and connect with people through development and design.</div>;
    const secondary = <p className='font-regular leading-tight'>The main component of my design is<span className="text-[#ff2257]"> aesthetics.</span> I try to craft the perfect balance between <span className="text-[#ff2257]">aesthetics</span> and <span className="text-[#ff2257]">user experience.</span></p>;

    return ( 
        <Container>
            <Navbar/>
            <Paragraph content={primary}/>
            {/* <Paragraph content={primary}/> */}
        </Container>
     );
}
 
export default About;