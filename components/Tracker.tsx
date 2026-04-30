'use client'

import { useEffect } from 'react'

export function Tracker() {
  useEffect(() => {
    // Registra a visita na Nuvem Global
    fetch('https://api.counterapi.dev/v1/josue_portfolio/visits/up', { mode: 'no-cors' })
      .catch(() => {});
    
    // Registra cliques na Nuvem Global
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.tagName === 'A' ? target : target.closest('a');
      
      if (link) {
        fetch('https://api.counterapi.dev/v1/josue_portfolio/clicks/up', { mode: 'no-cors' })
          .catch(() => {});
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return null;
}
