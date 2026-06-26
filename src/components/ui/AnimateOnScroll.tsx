'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils/cn';
import type { ReactNode, CSSProperties } from 'react';

type AnimationType = 'fade-in' | 'fade-in-up' | 'slide-up' | 'scale-in';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'aside';
}

const animationClasses: Record<AnimationType, string> = {
  'fade-in': 'animate-fade-in',
  'fade-in-up': 'animate-fade-in-up',
  'slide-up': 'animate-slide-up',
  'scale-in': 'animate-scale-in',
};

export function AnimateOnScroll({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className,
  as: Tag = 'div',
}: AnimateOnScrollProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const style: CSSProperties = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <Tag
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && animationClasses[animation],
        className
      )}
      style={style}
    >
      {children}
    </Tag>
  );
}
