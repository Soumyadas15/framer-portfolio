'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';
import Section from '../section'

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
]

const Parallax = () => {
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({width:0, height:0});

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    })
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    const primary = <p className='text-black'>Im 21 and I am a <span className='text-green-500'>developer</span> and <span className='text-green-500'>interactive designer</span> based in Kolkata, India. </p>;
    const secondary = <p className='text-black'>I have skills that are not replaced by AI yet, I like my design as clean as my room.</p>;

    const primary1 = <p>Time to show you some of my <span className='text-green-500'>projects</span></p>;
    const secondary1 = <p>Hehehe plz dont laugh hehe</p>;

    useEffect( () => {
        const lenis = new Lenis()

        const raf = (time) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        const resize = () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
        }

        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();

        return () => {
        window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <main className={styles.main}>
        <div className={styles.spacer}>
            <Section primary={primary} secondary={secondary}/>
        </div>
        <div ref={gallery} className={styles.gallery}>
            <Column images={[images[0], images[1], images[2]]} y={y}/>
            <Column images={[images[3], images[4], images[5]]} y={y2}/>
            <Column images={[images[6], images[7], images[8]]} y={y3}/>
            <Column images={[images[9], images[10], images[11]]} y={y4}/>
        </div>
        <div className={styles.spacer}>
            <Section primary={primary1} secondary={secondary1}/>
        </div>
        </main>
    )
}
 
export default Parallax;

const Column = ({images, y}) => {
    return (
      <motion.div 
        className={styles.column}
        style={{y}}
        >
        {
          images.map( (src, i) => {
            return <div key={i} className={styles.imageContainer}>
              <Image 
                src={`/images/${src}`}
                alt='image'
                fill
              />
            </div>
          })
        }
      </motion.div>
    )
  }