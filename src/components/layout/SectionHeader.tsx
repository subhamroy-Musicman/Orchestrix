import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface SectionHeaderProps {
  id: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({
  id,
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName
}: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        "max-w-[720px] mb-12 animate-fade-in-up",
        align === 'center' ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      <h2 id={`${id}-heading`} className={cn("section-heading text-white mb-4", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className="section-subtitle text-mint/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
