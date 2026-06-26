import { Container } from '../layout/Container';
import { Icon } from '../ui/Icon';

const LOGOS = [
  { name: 'OpenAI', icon: 'cube-16-solid' }, // Fallback icons for logos
  { name: 'Vercel', icon: 'chevron-up-solid' },
  { name: 'Notion', icon: 'cube-16-solid' },
  { name: 'GitHub', icon: 'link-solid' },
  { name: 'Linear', icon: 'arrow-trending-up' },
  { name: 'Raycast', icon: 'search' },
];

const STATS = [
  { value: '50K+', label: 'Teams' },
  { value: '2M+', label: 'AI Workflows' },
  { value: '99.98%', label: 'Uptime' },
  { value: '180+', label: 'Countries' },
];

export function LogoBar() {
  // We duplicate the logos array to create a seamless infinite scroll effect
  const marqueeContent = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section aria-label="Trusted by leading companies" className="relative py-20 md:py-24 lg:py-32 bg-noir overflow-hidden border-t border-expedition/20">
      
      {/* Background gradients for smooth fade from Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir via-transparent to-noir pointer-events-none z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-expedition)_0%,_transparent_70%)] opacity-10 pointer-events-none" />

      <Container className="relative z-20">
        
        {/* Marquee Container */}
        <div className="relative flex overflow-hidden w-full mb-16 group [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center w-max">
            {marqueeContent.map((logo, idx) => (
              <div 
                key={`${logo.name}-${idx}`} 
                className="flex items-center justify-center min-w-[200px] px-8 py-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-layout"
              >
                <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
                  <Icon name={logo.icon} size="lg" className="text-current" />
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto border-t border-white/5 pt-16">
          {STATS.map((stat, i) => (
            <div 
              key={stat.label} 
              className="flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-mint mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-widest text-mint/60 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
