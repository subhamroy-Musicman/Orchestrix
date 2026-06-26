import { cn } from '@/lib/utils/cn';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'glass';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'relative group bg-gradient-to-b from-forsythia/90 to-forsythia text-noir font-semibold shadow-[0_0_20px_rgba(255,200,1,0.2)] hover:shadow-[0_0_30px_rgba(255,200,1,0.4)] border border-forsythia/50 overflow-hidden',
  secondary:
    'bg-noir/50 text-arctic border border-expedition hover:bg-expedition/30 hover:border-forsythia/50 shadow-inner',
  ghost:
    'bg-transparent text-mint hover:text-arctic hover:bg-white/5',
  glass:
    'bg-white/5 backdrop-blur-md border border-white/10 text-arctic hover:bg-white/10 hover:border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm font-medium tracking-wide',
  lg: 'px-8 py-3.5 text-base font-medium tracking-wide',
};

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-xl font-sans transition-all duration-layout ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-offset-2 focus-visible:ring-offset-noir disabled:opacity-50 disabled:pointer-events-none select-none hover:-translate-y-0.5 active:translate-y-0';

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props;
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  // For primary button, add an inner shimmer effect
  const innerContent = (
    <>
      {variant === 'primary' && (
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20" />
        </div>
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {innerContent}
      </a>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, keyof ButtonBaseProps>;
  return (
    <button className={classes} {...buttonProps}>
      {innerContent}
    </button>
  );
}
