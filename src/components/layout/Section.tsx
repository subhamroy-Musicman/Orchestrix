import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
  hasAmbientLight?: boolean;
}

export function Section({ 
  id, 
  children, 
  className, 
  ariaLabelledBy,
  hasAmbientLight = false 
}: SectionProps) {
  return (
    <section 
      id={id} 
      aria-labelledby={ariaLabelledBy || `${id}-heading`} 
      className={cn("relative py-24 bg-noir overflow-hidden", className)}
    >
      {hasAmbientLight && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--color-expedition)_0%,_transparent_60%)] opacity-10" />
        </div>
      )}
      {children}
    </section>
  );
}
