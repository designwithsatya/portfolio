import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY;
      setScrollPercentage((scrollPos / docHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll_indicator">
      <LinearProgress color="success" style={{ width: `${scrollPercentage}%` }} />
    </div>
  );
};

export default ScrollIndicator;
