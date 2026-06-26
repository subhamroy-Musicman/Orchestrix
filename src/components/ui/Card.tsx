import { ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils/cn';
import { Icon } from './Icon';

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function Card({ children, className, as: Component = 'div', ...props }: CardProps) {
  return (
    <Component
      className={cn(
        "group relative bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-[var(--radius-card)] p-[var(--space-8)] flex flex-col overflow-hidden transition-all duration-layout hover:bg-[var(--glass-bg-hover)] hover:border-[var(--glass-border-hover)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {/* Base Hover Gradient */}
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-forsythia/30 via-transparent to-mint/30 rounded-[var(--radius-card)] z-0 pointer-events-none" />
      <div className="absolute inset-[1px] bg-noir rounded-[calc(var(--radius-card)-1px)] z-0 pointer-events-none" />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col flex-1">
        {children}
      </div>
    </Component>
  );
}

interface CardIconProps {
  name: string;
  className?: string;
}

export function CardIcon({ name, className }: CardIconProps) {
  return (
    <div className={cn(
      "w-[48px] h-[48px] flex-shrink-0 rounded-[var(--radius-button)] bg-white/5 border border-white/10 flex items-center justify-center text-white mb-[var(--space-6)] group-hover:bg-forsythia/10 group-hover:text-forsythia group-hover:border-forsythia/20 transition-all duration-300",
      className
    )}>
      <Icon name={name} size="lg" />
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("mb-[var(--space-4)]", className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn("card-title text-white group-hover:text-forsythia transition-colors", className)}>
      {children}
    </h3>
  );
}

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export function CardBody({ children, className }: CardBodyProps) {
  return (
    <div className={cn("card-description text-mint/70 flex-1", className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn("mt-[var(--space-6)] pt-[var(--space-6)] border-t border-[var(--glass-border)]", className)}>
      {children}
    </div>
  );
}
