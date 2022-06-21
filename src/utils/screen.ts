import { useEffect, useState } from 'react';

export const SMARTPHONE_BREAKPOINT = 768;

export type WidthHeight = { width: number; height: number };

/**
 * Getting windows dimension
 */
function getWindowDimensions(): WidthHeight {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions(): WidthHeight {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
