'use client';

import { usePricingState } from '@/hooks/usePricingState';
import { computePrice, formatPrice } from '@/lib/pricing/pricing-engine';
import type { TierKey } from '@/lib/pricing/types';

interface DynamicPriceProps {
  tier: TierKey;
}

export function DynamicPrice({ tier }: DynamicPriceProps) {
  const { currency, cycle } = usePricingState();
  
  const amount = computePrice(tier, cycle, currency);
  const formatted = formatPrice(amount, currency);

  return (
    <div className="flex items-baseline gap-1 mt-4 mb-2" aria-live="polite" aria-atomic="true">
      <span className="text-[40px] font-bold text-white font-mono tracking-tight leading-none">{formatted}</span>
      <span className="text-mint/60 text-[15px] font-medium">/mo</span>
    </div>
  );
}

export function BillingLabel() {
  const { cycle } = usePricingState();
  return (
    <div className="text-sm text-mint/50 font-medium h-5">
      {cycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
    </div>
  );
}
