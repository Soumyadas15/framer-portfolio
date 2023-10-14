'use client'
import styles from './style.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../../../hooks/useMousePosition';

export default function Home({
  primary, secondary
}) {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
            {secondary}
          </p>
      </motion.div>

      <div className={styles.body}>
        
          {primary}
        
      </div>

    </main>
  )
}