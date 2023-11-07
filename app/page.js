"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Container from './components/Container';
import { useScrollPosition } from './hooks/useScrollPosition';
import Skills from './components/pages/Skills';
import Landing from './components/pages/landing/Landing';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import Paragraph from './components/pages/Paragraph';
import Projects from './components/pages/projects/Projects'
import MobileProjects from './components/pages/projects/mobile/MobileProjects'

export default function Home() {
  const scrollPosition = useScrollPosition();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async() => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
        }, 2000)
      }
    )()
  }, []);

  let bgColor = "bg-white";

  if (scrollPosition >= 500 && scrollPosition < 1100) {
    bgColor = "bg-black";
  } 
  else if (scrollPosition >= 1100 && scrollPosition < 2000) {
    bgColor = "bg-black";
  }
  else if (scrollPosition >= 2000 && scrollPosition < 2600) {
    bgColor = "bg-white";
  }
  else if (scrollPosition >= 2600 && scrollPosition < 3800) {
    bgColor = "bg-black";
  }

  const primary = <p><span className="text-[#ff2257]">I am an interactive developer</span> based in India. I like <span className='text-[#ff2257]'>creating visually appealing experiences.</span> My goal is to inspire and connect with people through development and design.</p>;
  const secondary = <p>Good<span className="text-[#ff2257]"> design speaks louder than words.</span> And obviously not every design is good.</p>;
  
  return (
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
            <Skills/>
            <Paragraph tag='Background' content={secondary} black={true}/>
            <div className='block md:hidden'>
              <MobileProjects/>
            </div>
            <div className='hidden md:block'>
              <Projects/>
            </div>
            
            <Paragraph tag='Little bit about me' content={primary}/>
          </div>
        </div>
      </Container>
    
  )
}
