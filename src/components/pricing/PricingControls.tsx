'use client';

import { usePricingState, usePricingActions } from '@/hooks/usePricingState';
import { CURRENCIES, getCurrencySymbol } from '@/lib/pricing/currencies';
import { cn } from '@/lib/utils/cn';

export function PricingControls() {
  const { currency, cycle } = usePricingState();
  const { setCurrency, setCycle } = usePricingActions();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-16 relative z-20 w-full overflow-hidden sm:overflow-visible py-2">
      
      {/* Currency Selector */}
      <div className="flex items-center gap-1 sm:gap-2 p-1.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-inner">
        {CURRENCIES.map((code) => {
          const isActive = currency === code;
          return (
            <button
              key={code}
              onClick={() => setCurrency(code)}
              className={cn(
                "px-8 sm:px-12 py-2.5 rounded-lg text-[15px] font-medium transition-all duration-layout focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia relative flex items-center justify-center flex-shrink-0 whitespace-nowrap",
                isActive 
                  ? "text-noir bg-forsythia shadow-[0_2px_10px_rgba(255,200,1,0.25)]" 
                  : "text-mint/70 hover:text-white hover:bg-white/5"
              )}
              aria-pressed={isActive}
            >
              <span className="mr-2.5 opacity-60 font-mono font-bold">{getCurrencySymbol(code)}</span>
              {code}
            </button>
          );
        })}
      </div>

      {/* Billing Toggle */}
      <div className="relative flex items-center p-1 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-inner w-[320px] sm:w-[340px] max-w-full flex-shrink-0">
        {/* Animated Background Pill */}
        <div 
          className={cn(
            "absolute top-1 bottom-1 bg-white/10 rounded-lg transition-all duration-300 ease-out shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/5",
            cycle === 'monthly' ? "left-1 right-[55%]" : "left-[45%] right-1"
          )}
        />
        
        <button
          onClick={() => setCycle('monthly')}
          className={cn(
            "w-[45%] py-2 rounded-lg text-sm font-medium transition-colors duration-300 relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia",
            cycle === 'monthly' ? "text-white" : "text-mint/70 hover:text-white"
          )}
          aria-pressed={cycle === 'monthly'}
        >
          Monthly
        </button>
        <button
          onClick={() => setCycle('annual')}
          className={cn(
            "w-[55%] py-2 rounded-lg text-sm font-medium transition-colors duration-300 relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia flex items-center justify-center gap-2",
            cycle === 'annual' ? "text-white" : "text-mint/70 hover:text-white"
          )}
          aria-pressed={cycle === 'annual'}
        >
          Annual
          <span className="text-[10px] uppercase tracking-wider font-bold text-forsythia bg-forsythia/10 px-2 py-0.5 rounded-full border border-forsythia/20 shadow-[0_0_10px_rgba(255,200,1,0.1)]">
            Save 20%
          </span>
        </button>
      </div>

    </div>
  );
}
