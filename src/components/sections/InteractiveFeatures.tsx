'use client';

import { useState } from 'react';
import { FEATURES } from '@/lib/content/features';
import { Card, CardHeader, CardIcon, CardTitle, CardBody } from '../ui/Card';
import { Icon } from '../ui/Icon';
import { cn } from '@/lib/utils/cn';

export function InteractiveFeatures() {
  // State for mobile accordion
  const [activeAccordionId, setActiveAccordionId] = useState<string | null>(FEATURES[0].id);


  return (
    <div className="w-full relative z-20">
      
      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 auto-rows-fr grid-flow-dense gap-[var(--card-gap)]">
        {FEATURES.map((feature, i) => {
          const spanClass = (i % 3 === 0) ? "lg:col-span-8" : "lg:col-span-4";
          
          return (
            <Card 
              key={feature.id}
              className={spanClass}
              onMouseEnter={() => setActiveAccordionId(feature.id)}
            >
              <CardHeader>
                <CardIcon name={feature.icon} />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardBody>
                {feature.description}
              </CardBody>
              
              {/* Decorative pseudo-visualizations */}
              <div className="mt-8 relative h-16 w-full opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0">
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-forsythia)_0%,_transparent_70%)] opacity-20 group-hover:opacity-50 transition-opacity" />
              </div>
            </Card>
          );
        })}
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
                  <h3 className="card-title text-white">{feature.title}</h3>
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
                <div className="p-5 pt-0 card-description text-mint/70">
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
