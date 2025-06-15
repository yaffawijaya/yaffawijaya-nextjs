'use client';
import { useRef, useState, MouseEvent } from 'react';
import { allProjectsData } from '@/data/projects';
import ProjectCard from './ProjectCard';

export const ProjectScroller = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollerRef.current.offsetLeft);
    setScrollLeft(scrollerRef.current.scrollLeft);
  };
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div 
        className="horizontal-scroller" 
        ref={scrollerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
    >
      {allProjectsData.map((project, index) => (
        <div key={index} className="project-card-container">
          <ProjectCard 
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={`/projects/${project.slug}`}
          />
        </div>
      ))}
    </div>
  );
};
