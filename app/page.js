"use client"

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Container from './components/Container';
import { useScrollPosition } from './hooks/useScrollPosition';
import Skills from './components/pages/Skills';
import MyJob from './components/pages/MyJob'
import Landing from './components/pages/landing/Landing';
import Loader from './components/reusable/Loaders/Loader';
import { AnimatePresence } from 'framer-motion';
import Paragraph from './components/pages/Paragraph';
import Contact from './components/pages/Contact';
import ProjectMain from './components/pages/projects/ProjectMain'
import MobileProjects from './components/pages/projects/mobile/MobileProjects'
import Navbar from './components/navbar/Navbar';
import { useRouter } from 'next/router';

export default function Home() {
  const scrollPosition = useScrollPosition();
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  const options = {
    getDirection: true,
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
    }, 2000)
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

    // Cleanup function, only executed after the scroll variable is defined
    return () => {
        if (scroll) {
            scroll.destroy();
        }
    };
}, []);

  let bgColor = "bg-white";

  if (scrollPosition >= 500 && scrollPosition < 5000) {
    bgColor = "bg-black";
  } 
  else if (scrollPosition >= 5000 && scrollPosition < 8000) {
    bgColor = "bg-white";
  }

  
  const primary = <p className='font-regular leading-tight'>The main component of my design is<span className="text-[#ff2257]"> aesthetics.</span> I try to craft the perfect balance between <span className="text-[#ff2257]">aesthetics</span> and <span className="text-[#ff2257]">user experience.</span></p>;
  const secondary = <p className='font-regular leading-tight'>The main component of my design is<span className="text-[#ff2257]"> aesthetics.</span> I try to craft the perfect balance between <span className="text-[#ff2257]">aesthetics</span> and <span className="text-[#ff2257]">user experience.</span></p>;
  
  return (
      <>
      <div className='font-gilroy'>
      <Navbar/>
      {/* <Scroller> */}
      <Container
        full={true}
      >
        <AnimatePresence mode='wait'>
        {
          isLoading && <Loader/>
        }
        </AnimatePresence>
        <div className={`
            ${bgColor}
            transition 
            duration-300
            
        `}>
          <div className='flex h-full flex-col'>
            
            <Landing/>
            <Paragraph tag='Little bit about me' content={primary}/>
            <MyJob/>
            <Paragraph tag='Background' content={primary}/>
            <Skills/>
            <ProjectMain half={true} hideButton={false}/>
            <Paragraph tag='Little bit about me' content={primary}/>
            <Contact/>
          </div>
        </div>
      </Container>
      </div>
      {/* </Scroller> */}
      </>
  )
}
