import { cn } from '@/lib/utils/cn';

type IconSize = 'sm' | 'md' | 'lg' | 'xl';

interface IconProps {
  name: string;
  size?: IconSize;
  className?: string;
  decorative?: boolean;
  label?: string;
}

const sizeMap: Record<IconSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

export function Icon({ name, size = 'md', className, decorative = true, label }: IconProps) {
  return (
    <svg
      className={cn(sizeMap[size], 'inline-block shrink-0', className)}
      aria-hidden={decorative}
      aria-label={decorative ? undefined : label}
      role={decorative ? undefined : 'img'}
      fill="currentColor"
    >
      <use href={`/icons/${name}.svg#root`} />
    </svg>
  );
}
