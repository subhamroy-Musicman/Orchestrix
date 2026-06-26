import { cn } from '@/lib/utils/cn';
import type { ReactNode } from 'react';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag 
      className={cn('w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12', className)}
      suppressHydrationWarning
    >
      {children}
    </Tag>
  );
}
