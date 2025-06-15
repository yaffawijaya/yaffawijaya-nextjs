'use client';

import React, { useRef, useState, MouseEvent, UIEvent, useEffect } from 'react';
import Image from 'next/image';
import { techLogos } from '@/data/techLogos'; // <-- We import the data now

const TechLogoScroller = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAnimated, setIsAnimated] = useState(true);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // The local `techLogos` array has been removed.
  // We duplicate the logos 4 times to make the drag area much larger.
  const duplicatedLogos = [...techLogos, ...techLogos, ...techLogos, ...techLogos];

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    setIsAnimated(false);
    setIsDragging(true);
    if (!scrollerRef.current) return;
    setStartX(e.pageX - scrollerRef.current.offsetLeft);
    setScrollLeft(scrollerRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      animationTimeoutRef.current = setTimeout(() => setIsAnimated(true), 2000);
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
    animationTimeoutRef.current = setTimeout(() => setIsAnimated(true), 2000);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };
  
  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    if (isAnimated) return;
    const scroller = e.currentTarget;
    const scrollContent = scrollContentRef.current;
    if (!scrollContent) return;
    const firstSetWidth = scrollContent.scrollWidth / 4; 

    if (scroller.scrollLeft >= firstSetWidth * 2) { 
      scroller.scrollLeft -= firstSetWidth;
      setScrollLeft(scroller.scrollLeft);
    } else if (scroller.scrollLeft <= firstSetWidth) { 
      scroller.scrollLeft += firstSetWidth;
      setScrollLeft(scroller.scrollLeft);
    }
  };
  
  // Set initial scroll position to avoid starting at the very beginning
  useEffect(() => {
    if (scrollerRef.current && scrollContentRef.current) {
        const firstSetWidth = scrollContentRef.current.scrollWidth / 4;
        scrollerRef.current.scrollLeft = firstSetWidth;
        setScrollLeft(firstSetWidth);
    }
  }, []);

  // Cleanup the timeout on unmount
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    }
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <h3 className="text-center text-stone-400 font-semibold mb-8">My Favorite Tools & Technologies</h3>
      <div 
        className="scroller"
        ref={scrollerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onScroll={onScroll}
        data-animated={isAnimated}
      >
        <div className="scroller-inner" ref={scrollContentRef}>
          {duplicatedLogos.map((logo, index) => {
            const heightClass = logo.customHeight || 'h-12 md:h-14';
            return (
              <div 
                key={index} 
                className="scroller-logo-item group"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className={`object-contain w-auto transition-all duration-300 ${heightClass} ${logo.invertOnDark ? 'invert-on-dark' : ''}`}
                  draggable="false"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default TechLogoScroller;
