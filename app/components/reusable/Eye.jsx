import React, { useState, useEffect } from 'react';
import styles from './EyeFollowCursor.module.css';

const Eye = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eye = document.querySelector('.eye');
      const eyeRect = eye.getBoundingClientRect();

      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4);

      const eyeX = eyeCenterX + distance * Math.cos(angle);
      const eyeY = eyeCenterY + distance * Math.sin(angle);

      setEyePosition({ x: eyeX, y: eyeY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.eyeContainer}>
      <div className={styles.eye} style={{ top: eyePosition.y, left: eyePosition.x }} />
    </div>
  );
};

export default Eye;
