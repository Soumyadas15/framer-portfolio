"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Container from './components/Container';
import { useScrollPosition } from './hooks/useScrollPosition';
import Section from './components/pages/section';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Landing from './components/pages/landing/Landing';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import Parallax from './components/pages/parallax'

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
          document.body.style.cursor = 'none';
        }, 2000)
      }
    )()
  }, []);

  let bgColor = "bg-neutral-900";

  if (scrollPosition >= 600 && scrollPosition < 1100) {
    bgColor = "bg-black";
  } 
  else if (scrollPosition >= 1100 && scrollPosition < 2000) {
    bgColor = "bg-neutral-900";
  }
  else if (scrollPosition >= 2000 && scrollPosition < 2800) {
    bgColor = "bg-neutral-100";
  }

  const primary = <p>Im 21 and I am a <span className='text-green-500'>developer</span> and <span className='text-green-500'>interactive designer</span> based in Kolkata, India</p>;
  const secondary = <p>I have skills that are not replaced by AI yet, I like my design as clean as my room.</p>;
  
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
            <Section
                primary={primary}
                secondary={secondary}
            />
            <Skills/>
            <Parallax/>
            <Landing/>
          </div>
        </div>
      </Container>
    
  )
}
