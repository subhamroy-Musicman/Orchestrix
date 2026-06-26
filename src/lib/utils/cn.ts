type ClassValue = string | number | boolean | undefined | null;

export function cn(...inputs: (ClassValue | ClassValue[])[]): string {
  return inputs
    .flat()
    .filter((x): x is string | number => typeof x === 'string' || typeof x === 'number')
    .map(String)
    .filter(Boolean)
    .join(' ');
}
