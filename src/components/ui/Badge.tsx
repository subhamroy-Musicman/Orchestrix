import { cn } from '@/lib/utils/cn';
import type { ReactNode } from 'react';

type BadgeVariant = 'default' | 'accent' | 'outline';

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-expedition/80 text-forsythia border border-expedition',
  accent: 'bg-forsythia/10 text-forsythia border border-forsythia/30',
  outline: 'bg-transparent text-mint border border-mint/30',
};

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono font-medium tracking-wide uppercase',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
