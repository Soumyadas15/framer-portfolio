"use client"

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Container from './components/Container';
import { useScrollPosition } from './hooks/useScrollPosition';
import Skills from './components/pages/Skills';
import MyJob from './components/pages/MyJob'
import Landing from './components/pages/landing/Landing';
import Loader from './components/reusable/Loaders/Loader';
import Scroller from './components/reusable/Scroller';
import { AnimatePresence } from 'framer-motion';
import Paragraph from './components/pages/Paragraph';
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

  // useEffect(() => {
  //   (
  //     async() => {
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //       const scroll = new LocomotiveScroll({
  //         ...options,
  //         smooth: true,
  //       });
  //       setTimeout(() => {
  //         setIsLoading(false);
  //         document.body.style.cursor = 'default';
  //       }, 2000);
        
  //     }
  //   )()
  // }, []);

  let bgColor = "bg-white";

  if (scrollPosition >= 500 && scrollPosition < 1100) {
    bgColor = "bg-black";
  } 
  else if (scrollPosition >= 1100 && scrollPosition < 2000) {
    bgColor = "bg-black";
  }
  else if (scrollPosition >= 2000 && scrollPosition < 2500) {
    bgColor = "bg-black";
  }
  else if (scrollPosition >= 2500 && scrollPosition < 8000) {
    bgColor = "bg-black";
  }

  const primary = <div className='font-regular leading-tight'><span className="text-[#ff2257]">I am an interactive developer</span> based in India. I like <span className='text-[#ff2257]'>creating visually appealing experiences.</span> My goal is to inspire and connect with people through development and design.</div>;
  const secondary = <p className='font-regular leading-tight'>The main component of my design is<span className="text-[#ff2257]"> aesthetics.</span> I try to craft the perfect balance between <span className="text-[#ff2257]">aesthetics</span> and <span className="text-[#ff2257]">user experience.</span></p>;
  
  return (
      <>
      <Navbar/>
      <Scroller>
      <Container
        full={true}
      >
        {/* <AnimatePresence mode='wait'>
          {
            isLoading && <Loader/>
          }
        </AnimatePresence> */}
        <div className={`
            ${bgColor}
            transition 
            duration-300

        `}>
          <div className='flex h-full flex-col'>
            
            <Landing/>
            <Paragraph tag='Little bit about me' content={primary}/>
            <Skills/>
            <Paragraph tag='Background' content={secondary} black={false}/>
            <MyJob/>
            <ProjectMain/>
            
            <Paragraph tag='Little bit about me' content={primary}/>
            <Paragraph tag='Little bit about me' content={primary}/>
          </div>
        </div>
      </Container>
      </Scroller>
      </>
    
  )
}
