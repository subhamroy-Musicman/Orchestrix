import { Container } from '../layout/Container';
import { InteractiveFeatures } from './InteractiveFeatures';

export function FeaturesSection() {
  return (
    <section id="features" aria-labelledby="features-heading" className="relative py-20 md:py-24 lg:py-32 bg-noir overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--color-expedition)_0%,_transparent_60%)] opacity-10" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-forsythia/10 text-forsythia text-xs font-bold tracking-widest uppercase mb-6 border border-forsythia/20">
            Platform Capabilities
          </div>
          <h2 id="features-heading" className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-forsythia">scale automation</span>
          </h2>
          <p className="text-mint/70 text-base md:text-lg">
            Build, deploy, and monitor complex data pipelines without writing a single line of boilerplate code.
          </p>
        </div>
        
        {/* Client Component containing Bento Grid / Accordion */}
        <InteractiveFeatures />
        
      </Container>
    </section>
  );
}
