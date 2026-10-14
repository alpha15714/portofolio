import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for smooth scroll reveal using IntersectionObserver.
 * Respects prefers-reduced-motion and triggers only once to prevent re-animation jank.
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = options;
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }
    return false;
  });
  const elementRef = useRef(null);

  useEffect(() => {
    // If already visible (e.g. reduced motion), no need to observe
    if (isVisible) return;

    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, isVisible]);

  return [elementRef, isVisible];
}
