export interface Testimonial {
  readonly id: string;
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly company: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'AutomateAI cut our data processing time by 85%. What used to take our team days now happens in minutes — automatically.',
    author: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'TechFlow Inc.',
  },
  {
    id: 'testimonial-2',
    quote: 'The visual workflow builder is incredible. We automated 40+ manual processes in our first month without writing a single line of code.',
    author: 'Marcus Rodriguez',
    role: 'Head of Data',
    company: 'ScaleUp Analytics',
  },
  {
    id: 'testimonial-3',
    quote: 'Enterprise-grade security with startup-level simplicity. AutomateAI is the only platform that met all our compliance requirements.',
    author: 'Priya Patel',
    role: 'CTO',
    company: 'FinSecure Global',
  },
] as const;
