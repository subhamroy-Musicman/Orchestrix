'use client';

import { useState, useRef, useEffect } from 'react';
import { FEATURES } from '@/lib/content/features';
import { Icon } from '../ui/Icon';
import { cn } from '@/lib/utils/cn';
import { useMediaQuery } from '@/hooks/useMediaQuery';

// Desktop Bento Grid configuration (3 columns x 4 rows)
const BENTO_CLASSES = [
  "md:col-span-2 md:row-span-2 bg-gradient-to-br from-noir to-expedition/30", 
  "md:col-span-1 md:row-span-1 bg-gradient-to-bl from-noir to-forsythia/10", 
  "md:col-span-1 md:row-span-1 bg-gradient-to-tr from-noir to-mint/10", 
  "md:col-span-1 md:row-span-2 bg-gradient-to-b from-noir to-expedition/40", 
  "md:col-span-2 md:row-span-1 bg-gradient-to-r from-noir to-black", 
  "md:col-span-2 md:row-span-1 bg-gradient-to-tl from-noir to-forsythia/5", 
];

export function InteractiveFeatures() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  // State for mobile accordion. We use a ref to persist the active state across breakpoints
  const activeFeatureRef = useRef<string | null>(FEATURES[0].id);
  const [activeAccordionId, setActiveAccordionId] = useState<string | null>(activeFeatureRef.current);

  // Sync state when changed
  useEffect(() => {
    activeFeatureRef.current = activeAccordionId;
  }, [activeAccordionId]);

  return (
    <div className="w-full relative z-20">
      
      {/* 
        We render both layouts but visually hide them based on breakpoints.
        This avoids React hydration mismatches and layout thrashing.
      */}

      {/* DESKTOP BENTO GRID */}
      <div className="hidden md:grid grid-cols-3 auto-rows-[280px] gap-6 lg:gap-8">
        {FEATURES.map((feature, i) => (
          <div 
            key={feature.id}
            className={cn(
              "group relative rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl",
              BENTO_CLASSES[i] || "md:col-span-1 md:row-span-1"
            )}
            onMouseEnter={() => setActiveAccordionId(feature.id)}
          >
            {/* Hover Gradient Lighting */}
            <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-forsythia/30 via-transparent to-mint/30 rounded-3xl z-0" />
            <div className="absolute inset-[1px] bg-noir rounded-[calc(1.5rem-1px)] z-0" />
            
            {/* Radial glow on hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-forsythia/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none" />

            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-forsythia/10 group-hover:text-forsythia group-hover:border-forsythia/20 transition-all duration-300">
                  <Icon name={feature.icon} size="lg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-mint/70 text-base leading-relaxed pr-4">{feature.description}</p>
              </div>

              {/* Decorative pseudo-visualizations per card based on size */}
              <div className="mt-8 relative h-16 w-full opacity-50 group-hover:opacity-100 transition-opacity">
                {i === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forsythia/20 to-transparent rounded-t-xl overflow-hidden border-t border-forsythia/30 flex items-end justify-between px-4 pb-2">
                    {[40, 70, 50, 90, 65, 100].map((h, j) => (
                      <div key={j} className="w-4 bg-forsythia/40 rounded-t-sm transition-all duration-500 group-hover:bg-forsythia" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                )}
                {i === 3 && (
                  <div className="absolute inset-0 flex flex-col gap-2">
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden"><div className="w-3/4 h-full bg-mint" /></div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden"><div className="w-1/2 h-full bg-forsythia" /></div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden"><div className="w-5/6 h-full bg-arctic" /></div>
                  </div>
                )}
                {i !== 0 && i !== 3 && (
                   <div className="absolute bottom-0 right-0 w-24 h-24 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-forsythia)_0%,_transparent_70%)] opacity-20 group-hover:opacity-50 transition-opacity" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE ACCORDION */}
      <div className="md:hidden flex flex-col gap-3">
        {FEATURES.map((feature) => {
          const isActive = activeAccordionId === feature.id;
          return (
            <div 
              key={feature.id}
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-500 border",
                isActive ? "bg-white/5 border-forsythia/30" : "bg-black/20 border-white/5"
              )}
            >
              <button
                className="w-full text-left p-5 flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-inset"
                onClick={() => setActiveAccordionId(isActive ? null : feature.id)}
                aria-expanded={isActive}
                aria-controls={`feature-panel-${feature.id}`}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                    isActive ? "bg-forsythia/20 text-forsythia" : "bg-white/5 text-white"
                  )}>
                    <Icon name={feature.icon} size="md" />
                  </div>
                  <h3 className="font-bold text-lg text-white">{feature.title}</h3>
                </div>
                <Icon 
                  name="chevron-down" 
                  size="sm" 
                  className={cn("text-mint/50 transition-transform duration-300", isActive && "rotate-180 text-forsythia")} 
                />
              </button>
              
              <div 
                id={`feature-panel-${feature.id}`}
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  isActive ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-5 pt-0 text-mint/70 text-sm leading-relaxed">
                  {feature.description}
                  
                  {/* Small decorative element for mobile */}
                  <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-mint to-forsythia w-1/2 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
