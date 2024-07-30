import { useState, useEffect, MutableRefObject } from 'react';

const useIntersectionObserver = (ref: MutableRefObject<null>, options: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current == null) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      options
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
};

export default useIntersectionObserver;