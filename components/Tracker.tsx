'use client'

import { useEffect } from 'react'

export function Tracker() {
  useEffect(() => {
    const track = (type: string) => {
      const url = `https://api.counterapi.dev/v1/josue_portfolio/${type}/up`;
      if (navigator.sendBeacon) {
        navigator.sendBeacon(url);
      } else {
        fetch(url, { mode: 'no-cors' }).catch(() => {});
      }
    };

    // Registra a visita na Nuvem Global
    track('visits');
    
    // Registra cliques na Nuvem Global
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.tagName === 'A' ? target : target.closest('a');
      
      if (link) {
        track('clicks');
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return null;
}
