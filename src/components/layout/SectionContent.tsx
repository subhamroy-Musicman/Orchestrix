import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface SectionContentProps {
  children: ReactNode;
  className?: string;
}

export function SectionContent({ children, className }: SectionContentProps) {
  return (
    <div className={cn("relative z-10 w-full", className)}>
      {children}
    </div>
  );
}
