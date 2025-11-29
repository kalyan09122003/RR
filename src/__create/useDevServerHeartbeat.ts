'use client';

import { useEffect } from 'react';

export function useDevServerHeartbeat() {
  useEffect(() => {
    if (!import.meta.env.DEV) return;

    let lastPing = 0;
    const ping = () => {
      const now = Date.now();
      if (now - lastPing < 60000) return; // Throttle 1 min
      lastPing = now;
      fetch('/', { method: 'GET' }).catch(() => {
        // no-op
      });
    };

    const handleActivity = () => ping();

    // Listen for common user activity
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
    };
  }, []);
}
