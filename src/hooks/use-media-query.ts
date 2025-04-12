import { useEffect, useState } from 'react';

export function useMediaQuery(queryFn: (width: number) => boolean): boolean {
  const [isMatch, setIsMatch] = useState(() => queryFn(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setIsMatch(queryFn(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [queryFn]);

  return isMatch;
}