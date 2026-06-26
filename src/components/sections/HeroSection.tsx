import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { HERO_CONTENT } from '@/lib/content/hero';
import { cn } from '@/lib/utils/cn';

function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Premium Deep Layered Radial Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,_var(--color-expedition)_0%,_transparent_70%)] opacity-40 blur-[80px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--color-noir)_0%,_transparent_70%)] opacity-80 blur-[100px]" />
      <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-[radial-gradient(ellipse_at_center,_rgba(217,232,226,0.05)_0%,_transparent_70%)] blur-[60px]" />
      
      {/* Subtle Grid Overlay with Masking for Depth */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M39 0h1v40h-1zM0 39h40v1H0z' fill='%23D9E8E2' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[36rem] h-[36rem] bg-forsythia/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[32rem] h-[32rem] bg-mint/10 rounded-full blur-[100px] animate-float-delayed pointer-events-none" />
    </div>
  );
}

function DashboardVisualization() {
  return (
    <div className="relative w-full h-[600px] lg:h-[700px] flex items-center justify-center animate-fade-in-up lg:mt-8" style={{ animationDelay: '200ms' }}>
      
      {/* Background connecting SVG lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30 z-0 pointer-events-none" aria-hidden="true">
        <path d="M100,150 C250,150 250,300 400,300" fill="none" stroke="var(--color-expedition)" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M100,150 C250,150 250,300 400,300" fill="none" stroke="var(--color-forsythia)" strokeWidth="2" className="animate-dash" strokeDasharray="1000" strokeDashoffset="1000" />
        
        <path d="M400,300 C500,300 500,500 600,500" fill="none" stroke="var(--color-expedition)" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M400,300 C500,300 500,500 600,500" fill="none" stroke="var(--color-mint)" strokeWidth="2" className="animate-dash" strokeDasharray="1000" strokeDashoffset="1000" style={{ animationDelay: '1s' }} />
      </svg>

      {/* Main Glass Dashboard Shell */}
      <div className="relative z-10 w-full max-w-xl bg-noir/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-1 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] group transition-all duration-layout hover:border-white/20">
        
        {/* Inner Window Chrome */}
        <div className="bg-noir/40 rounded-xl overflow-hidden border border-white/5">
          {/* Top Bar */}
          <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="ml-4 text-xs font-mono text-mint/50 flex-1 text-center pr-12">pipeline_execution_v2.0</div>
          </div>

          <div className="p-6">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-expedition to-noir flex items-center justify-center border border-white/10 shadow-inner">
                  <Icon name="cube-16-solid" size="lg" className="text-forsythia" />
                  <div className="absolute inset-0 bg-forsythia/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <div className="text-white font-semibold tracking-tight">Active Workflows</div>
                  <div className="text-mint/70 text-sm">Processing 1.2M events/sec</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-forsythia bg-forsythia/10 px-3 py-1.5 rounded-full border border-forsythia/20 shadow-[0_0_10px_rgba(255,200,1,0.1)]">
                <span className="w-2 h-2 rounded-full bg-forsythia animate-pulse" />
                System Online
              </div>
            </div>

            {/* Premium Chart Area - CSS Only */}
            <div className="relative h-48 w-full mb-8 flex items-end justify-between gap-1.5 p-4 rounded-xl bg-black/20 border border-white/5 shadow-inner">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none p-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-full h-px bg-white/5" />
                ))}
              </div>
              
              {/* CSS Bars with gradients and glows */}
              {[30, 50, 40, 70, 60, 85, 95, 80, 65, 90, 75, 100].map((height, i) => (
                <div key={i} className="relative w-full group/bar z-10 flex flex-col justify-end h-full">
                  <div 
                    className={cn(
                      "w-full rounded-t-sm transition-all duration-layout border-t border-white/20",
                      height > 85 ? "bg-gradient-to-t from-forsythia/10 to-forsythia/80" : "bg-gradient-to-t from-expedition/20 to-expedition/60 group-hover/bar:to-expedition"
                    )}
                    style={{ 
                      height: `${height}%`,
                      animation: `scale-in 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards ${i * 40 + 600}ms`,
                      transformOrigin: 'bottom',
                      opacity: 0
                    }}
                  >
                    {height > 85 && (
                      <div className="absolute -top-1 left-0 right-0 h-2 bg-forsythia blur-sm opacity-50" />
                    )}
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-white text-noir text-xs font-bold px-2.5 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap">
                    {height}k req
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Metrics & Tasks */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/5 rounded-xl p-4 transition-colors hover:bg-white/10">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-mint/80 font-medium">Data Sync</span>
                  <span className="text-white font-mono">92%</span>
                </div>
                <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-forsythia rounded-full relative w-[92%]">
                    <div className="absolute inset-0 bg-white/30 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/5 rounded-xl p-4 transition-colors hover:bg-white/10">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-mint/80 font-medium">Model Inference</span>
                  <span className="text-white font-mono">85%</span>
                </div>
                <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-mint rounded-full w-[85%] relative">
                    <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ backgroundSize: '200% 100%', animationDelay: '1s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card 1 - Transformation Rule */}
      <div className="absolute top-12 -right-6 lg:-right-20 z-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="bg-noir/90 backdrop-blur-xl border border-white/10 rounded-xl p-1 shadow-2xl group hover:-translate-y-1.5 transition-transform duration-layout cursor-default">
          <div className="bg-white/5 rounded-lg p-4 border border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-mint/10 flex items-center justify-center text-mint border border-mint/20">
                <Icon name="cog-8-tooth" size="sm" />
              </div>
              <div className="text-sm font-medium text-white">Rule Execution</div>
            </div>
            <div className="font-mono text-[10px] text-mint/60 bg-black/30 p-2 rounded border border-white/5">
              <span className="text-forsythia">const</span> result = <span className="text-mint">await</span> transform(data);<br/>
              <span className="text-arctic/40">{'// 1.2ms latency'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card 2 - Performance Metric */}
      <div className="absolute bottom-10 -left-2 lg:-left-6 z-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="bg-noir/90 backdrop-blur-xl border border-white/10 rounded-xl p-1 shadow-2xl group hover:-translate-y-1.5 transition-transform duration-layout cursor-default">
          <div className="bg-gradient-to-br from-forsythia/10 to-transparent rounded-lg p-3 lg:p-4 border border-forsythia/20 flex items-center gap-3 lg:gap-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-forsythia/20 flex items-center justify-center text-forsythia shadow-[0_0_15px_rgba(255,200,1,0.2)]">
              <Icon name="arrow-trending-up" size="sm" />
            </div>
            <div>
              <div className="text-mint/80 text-[10px] lg:text-xs font-medium uppercase tracking-wider mb-0.5">Throughput</div>
              <div className="text-white font-bold text-lg lg:text-xl font-mono tracking-tight">1,204<span className="text-mint/50 text-xs lg:text-sm">/s</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card 3 - AI Assistant */}
      <div className="absolute top-1/4 -right-2 lg:-right-8 z-30 animate-float" style={{ animationDelay: '1.2s' }}>
        <div className="bg-noir/90 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl group hover:-translate-y-1.5 transition-transform duration-layout cursor-default flex items-center gap-3">
          <div className="relative">
             <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-expedition to-noir border border-white/10 flex items-center justify-center overflow-hidden shadow-inner">
                <Icon name="cube-16-solid" size="sm" className="text-forsythia drop-shadow-md" />
                <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
             </div>
             {/* Notification dot */}
             <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-forsythia rounded-full border-2 border-noir animate-pulse" />
          </div>
          <div className="pr-4 py-1">
             <div className="text-white text-[11px] font-bold flex items-center gap-1.5 leading-tight">
                AI Assistant
             </div>
             <div className="text-mint/80 text-[10px] mt-0.5 flex items-center gap-1 leading-tight">
                <svg className="w-2.5 h-2.5 text-forsythia" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Workflow optimized
             </div>
          </div>
        </div>
      </div>

      {/* Ambient background rings */}
      <div className="absolute -inset-16 border border-white/5 rounded-full border-dashed animate-spin-slow pointer-events-none" style={{ animationDuration: '60s' }} />
      <div className="absolute -inset-32 border border-white/[0.02] rounded-full border-dashed animate-spin-slow pointer-events-none" style={{ animationDuration: '90s', animationDirection: 'reverse' }} />
    </div>
  );
}

export function HeroSection() {
  return (
    <section 
      id="hero" 
      aria-labelledby="hero-heading" 
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 flex items-center overflow-hidden bg-noir selection:bg-forsythia selection:text-noir"
    >
      <GridBackground />
      
      <Container className="relative z-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content - Typography & Hierarchy refinement */}
          <div className="flex flex-col items-start max-w-2xl relative z-20">
            <div className="animate-fade-in-up mb-6">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs font-semibold tracking-wide uppercase shadow-[0_2px_10px_rgba(0,0,0,0.2)] mb-8 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forsythia opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-forsythia shadow-[0_0_8px_rgba(255,200,1,0.8)]"></span>
                </span>
                AutomateAI 2.0 is now live
              </div>
              
              <h1 id="hero-heading" className="text-white font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-[-0.02em]">
                The AI Operating System <br className="hidden sm:block" />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-mint to-forsythia">
                    for Modern Teams
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-forsythia/20 blur-xl rounded-full z-0" />
                </span>
              </h1>
            </div>

            <p className="text-mint/80 text-lg md:text-xl leading-relaxed max-w-xl font-medium animate-fade-in-up mb-8" style={{ animationDelay: '100ms' }}>
              {HERO_CONTENT.subheadline}
            </p>

            <div className="flex flex-col gap-3 w-full sm:w-auto animate-fade-in-up mb-16" style={{ animationDelay: '200ms' }}>
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  {HERO_CONTENT.primaryCta}
                </Button>
                <Button variant="glass" size="lg" className="w-full sm:w-auto">
                  <Icon name="search" size="md" className="mr-2 opacity-70" />
                  {HERO_CONTENT.secondaryCta}
                </Button>
              </div>
              {/* Credibility Microcopy */}
              <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-medium text-mint/60 uppercase tracking-widest px-2">
                No credit card <span className="w-1 h-1 bg-white/20 rounded-full flex-shrink-0" /> 2-minute setup <span className="w-1 h-1 bg-white/20 rounded-full flex-shrink-0" /> Cancel anytime
              </div>
            </div>

          </div>

          {/* Right Visualization */}
          <DashboardVisualization />

        </div>
      </Container>
    </section>
  );
}
