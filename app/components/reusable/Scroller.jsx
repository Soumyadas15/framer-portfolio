"use client"

import React, { useEffect, useRef } from 'react';

const Scroller = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scroll;

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true, // Enable smooth scrolling
        // ...other options you may want to pass
      });

      // Cleanup on unmount
      return () => {
        scroll.destroy();
      };
    })();

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []); // Run the effect only once on mount

  return <div ref={containerRef}>{children}</div>;
};

export default Scroller;
