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
      className={cn('w-full max-w-7xl mx-auto px-6 lg:px-8 xl:px-10', className)}
      suppressHydrationWarning
    >
      {children}
    </Tag>
  );
}
