'use client';

import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('main-header');
      if (header && window.scrollY > 0) {
        header.classList.add('sticky-header');
      } else if (header) {
        header.classList.remove('sticky-header');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // Este componente não renderiza nada visual
}