import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

export function CTASection() {
  return (
    <Section id="cta" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Aurora / Mesh Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--color-forsythia)_0%,_transparent_70%)] opacity-10 blur-[100px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--color-mint)_0%,_transparent_70%)] opacity-[0.07] blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--color-expedition)_0%,_transparent_70%)] opacity-[0.05] blur-[120px] mix-blend-screen" />
      </div>

      <Container className="relative z-10 flex justify-center">
        
        {/* Premium Glass Panel with Animated Gradient Border */}
        <div className="relative w-full max-w-4xl rounded-[32px] p-px overflow-hidden group shadow-[0_0_80px_-20px_rgba(255,200,1,0.15)] hover:shadow-[0_0_100px_-20px_rgba(255,200,1,0.25)] transition-shadow duration-700">
          
          {/* Animated Border Background */}
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_var(--color-expedition)_0%,_var(--color-forsythia)_50%,_var(--color-mint)_100%)] animate-spin-slow opacity-40 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDuration: '8s' }} />
          
          {/* Inner Glass Content */}
          <div className="relative bg-black/40 backdrop-blur-3xl rounded-[31px] px-6 py-12 md:py-16 lg:py-24 flex flex-col items-center text-center overflow-hidden">
            
            {/* CSS-only floating shapes inside the glass */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-white/5 rounded-2xl rotate-12 blur-sm animate-float-delayed pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-forsythia/5 rounded-full blur-md animate-float pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-mint font-semibold text-sm tracking-wide shadow-inner mb-8">
              <Icon name="sparkles" size="sm" className="text-forsythia" />
              Ready for the future of automation?
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 max-w-4xl">
              Turn Complex Automation <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-mint to-forsythia">
                Into Intelligent Workflows
              </span>
            </h2>

            <p className="text-lg md:text-xl text-mint/70 font-medium max-w-2xl mb-12">
              Join thousands of data engineering teams who have replaced fragmented tools with our unified, AI-native automation engine.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto text-[16px] h-[56px] px-10 shadow-[0_0_30px_rgba(255,200,1,0.2)] hover:shadow-[0_0_40px_rgba(255,200,1,0.4)]">
                Start Building Free
              </Button>
              <Button variant="glass" size="lg" className="w-full sm:w-auto text-[16px] h-[56px] px-10">
                <Icon name="calendar" size="md" className="mr-2 opacity-70" />
                Book Enterprise Demo
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-[13px] font-medium text-mint/60">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-forsythia" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-forsythia" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                No credit card required
              </div>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}
