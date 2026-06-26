import { Container } from '../layout/Container';
import { Icon } from '../ui/Icon';
import { PROCESS_STEPS } from '@/lib/content/how-it-works';

function TimelineIllustration({ step }: { step: number }) {
  if (step === 1) {
    return (
      <div className="relative w-full h-32 bg-black/20 rounded-lg border border-white/5 overflow-hidden flex flex-col items-center justify-center group-hover:border-white/10 transition-colors">
        {/* Connection nodes CSS illustration */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-expedition/50 border border-expedition flex items-center justify-center animate-pulse-slow">
            <div className="w-2 h-2 bg-mint rounded-full" />
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-expedition to-forsythia relative">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-forsythia blur-[1px] animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
          </div>
          <div className="w-10 h-10 rounded-xl bg-forsythia/10 border border-forsythia/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,200,1,0.2)]">
            <div className="w-3 h-3 bg-forsythia rounded-sm rotate-45" />
          </div>
        </div>
      </div>
    );
  }
  
  if (step === 2) {
    return (
      <div className="relative w-full h-32 bg-black/20 rounded-lg border border-white/5 overflow-hidden flex flex-col items-center justify-center group-hover:border-white/10 transition-colors">
        {/* Workflow Builder CSS illustration */}
        <div className="flex flex-col gap-2 w-3/4">
          <div className="w-full h-4 bg-white/5 rounded flex items-center px-2 border border-white/5">
            <div className="w-2 h-2 rounded-full bg-mint/50 mr-2" />
            <div className="h-1 w-1/3 bg-mint/20 rounded-full" />
          </div>
          <div className="w-3/4 h-4 bg-forsythia/10 rounded flex items-center px-2 ml-4 border border-forsythia/20">
            <div className="w-2 h-2 rounded-full bg-forsythia mr-2" />
            <div className="h-1 w-1/2 bg-forsythia/40 rounded-full" />
          </div>
          <div className="w-1/2 h-4 bg-white/5 rounded flex items-center px-2 ml-8 border border-white/5">
            <div className="w-2 h-2 rounded-full bg-mint/50 mr-2" />
            <div className="h-1 w-1/2 bg-mint/20 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-32 bg-black/20 rounded-lg border border-white/5 overflow-hidden flex items-end justify-center gap-2 p-4 group-hover:border-white/10 transition-colors">
      {/* Analytics Chart CSS illustration */}
      {[30, 70, 45, 90, 60].map((h, i) => (
        <div key={i} className="relative w-8 group/bar">
          <div 
            className="w-full rounded-t-sm transition-all duration-500 bg-gradient-to-t from-expedition/20 to-mint/60"
            style={{ 
              height: `${h}%`,
              animation: `scale-in 500ms ease-out forwards ${i * 100}ms`,
              transformOrigin: 'bottom'
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="relative py-20 md:py-24 lg:py-32 bg-noir overflow-hidden">
      <Container className="relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16 animate-fade-in-up">
          <h2 id="how-heading" className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-arctic via-mint to-forsythia">simplicity</span>
          </h2>
          <p className="text-mint/70 text-base md:text-lg">
            From raw data to intelligent automation in three simple steps.
          </p>
        </div>

        <div className="relative mt-20 lg:mt-24 max-w-5xl mx-auto">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="absolute top-8 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.step} className="flex flex-col group animate-fade-in-up" style={{ animationDelay: `${idx * 200}ms` }}>
                
                {/* Step Number Badge */}
                <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-noir border border-white/10 flex items-center justify-center shadow-xl relative z-20 group-hover:-translate-y-2 group-hover:border-forsythia/30 transition-all duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-forsythia/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-2xl font-bold text-white relative z-10">
                    {step.step}
                  </span>
                </div>

                {/* Glass Card */}
                <div className="w-full h-full flex flex-col bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/5 hover:border-white/20 transition-all duration-500 text-center relative overflow-hidden">
                  
                  {/* Giant Faded Number in Background */}
                  <div className="absolute -bottom-6 -right-4 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none leading-none group-hover:text-white/[0.04] transition-colors duration-700">
                    {step.step}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                  <p className="text-mint/70 text-base lg:text-lg leading-relaxed mb-10 flex-1 relative z-10 px-2">
                    {step.description}
                  </p>
                  
                  {/* CSS Illustration */}
                  <div className="mt-auto relative z-10 bg-noir/40 rounded-xl p-5 border border-white/5 group-hover:border-white/10 transition-colors duration-500">
                    <TimelineIllustration step={step.step} />
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
