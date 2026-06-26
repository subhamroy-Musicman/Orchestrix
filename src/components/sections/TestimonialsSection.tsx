import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Icon, type IconName } from '../ui/Icon';
import { cn } from '@/lib/utils/cn';

interface KPI {
  label: string;
  value: string;
  icon: IconName;
  trend: string;
}

const KPIS: KPI[] = [
  { label: 'Platform Uptime', value: '99.99%', icon: 'cube-16-solid', trend: '+0.01%' },
  { label: 'Customer Rating', value: '4.9/5', icon: 'sparkles', trend: '+0.2' },
  { label: 'Automated Workflows', value: '2M+', icon: 'bolt', trend: '+150k/mo' },
  { label: 'Countries Served', value: '180+', icon: 'globe-alt', trend: '+12 this year' },
];

const TESTIMONIALS = [
  {
    quote: "Orchestrix fundamentally changed how our data engineering team operates. We replaced three different disjointed tools with a single, highly performant workflow engine that never drops a task.",
    name: "Sarah Jenkins",
    role: "VP of Engineering",
    company: "DataScale Inc",
    initials: "SJ",
    color: "from-mint/80 to-expedition/80",
    rating: 5,
  },
  {
    quote: "The visual workflow builder combined with the underlying code-first architecture gives us exactly the flexibility we need. It’s the perfect balance of accessibility and engineering rigor.",
    name: "David Chen",
    role: "Lead Architect",
    company: "FinStream",
    initials: "DC",
    color: "from-forsythia/80 to-noir",
    rating: 5,
  },
  {
    quote: "We migrated our entire legacy ETL pipeline to Orchestrix in less than a week. The immediate reduction in latency and the deep integration with our existing stack was phenomenal.",
    name: "Elena Rodriguez",
    role: "CTO",
    company: "RetailSync",
    initials: "ER",
    color: "from-arctic/80 to-expedition/80",
    rating: 5,
  }
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="relative pb-32 pt-24 border-t border-white/[0.02]">
      {/* Soft Separator Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-mint/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[200px] bg-[radial-gradient(ellipse_at_top,_var(--color-mint)_0%,_transparent_70%)] opacity-[0.05] pointer-events-none" />

      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-mint/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 bg-forsythia/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Social Proof Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold tracking-wide uppercase shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-forsythia animate-pulse" />
            Social Proof
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Loved by modern product teams
          </h2>
          <p className="text-lg text-mint/70 font-medium">
            Trusted by startups and enterprises worldwide to handle their most critical automation workflows.
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {KPIS.map((kpi, i) => (
            <Card key={i} className="bg-white/[0.02] border-white/5 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between group h-full min-h-[160px]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-mint group-hover:text-forsythia group-hover:bg-forsythia/10 transition-colors border border-white/5">
                  <Icon name={kpi.icon} size="sm" />
                </div>
                <div className="text-xs font-mono font-medium text-forsythia bg-forsythia/10 px-2 py-1 rounded-md border border-forsythia/20">
                  {kpi.trend}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-mono tracking-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-mint transition-all">
                  {kpi.value}
                </div>
                <div className="text-sm font-medium text-mint/60 uppercase tracking-wider">
                  {kpi.label}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((testimonial, i) => (
            <Card 
              key={i} 
              className={cn(
                "bg-black/40 border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,200,1,0.05)] p-6 flex flex-col relative overflow-hidden group"
              )}
            >
              {/* Background Quotation Mark Watermark */}
              <div className="absolute -top-6 -right-6 text-[120px] leading-none font-serif text-white/[0.02] group-hover:text-white/[0.04] transition-colors pointer-events-none select-none">
                &rdquo;
              </div>

              {/* 5-Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Icon key={j} name="star" size="sm" className="text-forsythia w-4 h-4" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[15px] leading-relaxed text-mint/80 mb-8 flex-1 group-hover:text-white transition-colors duration-300 relative z-10">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author & Company */}
              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-inner border border-white/20 bg-gradient-to-br", testimonial.color)}>
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-[15px] flex items-center gap-2">
                    {testimonial.name}
                    <svg className="w-3.5 h-3.5 text-forsythia" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-mint/60 text-xs mt-0.5">
                    {testimonial.role}, <span className="text-mint/90 font-medium">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </Container>
    </Section>
  );
}
