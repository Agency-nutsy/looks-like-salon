'use client';
import { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start the circle opening and fade out sequence after 2.2 seconds
    const timer = setTimeout(() => {
      setFading(true);
      // Remove component from DOM completely after transition finishes
      setTimeout(() => setLoading(false), 1200);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`${styles.loaderWrap} ${fading ? styles.fadeOut : ''}`}>
      {/* The circle reveal mask background */}
      <div className={styles.circleReveal}></div>
      
      <div className={styles.content}>

        
        <img src="/salon/looks-like-logo.png" alt="The Looks Like Logo" style={{ height: '180px', width: 'auto', marginBottom: '1.5rem', animation: 'pulse 2s infinite' }} />
        
        <div className={styles.progressWrap}>
          <div className={styles.progressBar}></div>
        </div>
      </div>
    </div>
  );
}
