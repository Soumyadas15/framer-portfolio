"use client"

import { forwardRef, useEffect, useState } from 'react';
import styles from './style.module.scss';
import Magnetic from '../magnetic';
import { useScrollPosition } from '../../../hooks/useScrollPosition';

const Menu = forwardRef(function index(props, ref) {
  const scrollPosition = useScrollPosition();
  const [isScrollGreaterThan1800, setIsScrollGreaterThan1800] = useState(false);

  useEffect(() => {
    setIsScrollGreaterThan1800(scrollPosition > 1800);
  }, [scrollPosition]);

  return (
    <div className={styles.header}>
        <Magnetic>
          <div className={`
              ${styles.burger}
              ${isScrollGreaterThan1800 ? styles.burgerScrolled : ''}
            `}>
            <div ref={ref} className={styles.bounds}></div>
          </div>
        </Magnetic>
    </div>
  )}
)

export default Menu