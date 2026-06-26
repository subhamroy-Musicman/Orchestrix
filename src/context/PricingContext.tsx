'use client';

import { createContext, useContext, useState, useMemo, type ReactNode } from 'react';
import type { BillingCycle, CurrencyCode } from '@/lib/pricing/types';

interface PricingState {
  billingCycle: BillingCycle;
  currency: CurrencyCode;
}

interface PricingActions {
  setBillingCycle: (cycle: BillingCycle) => void;
  setCurrency: (currency: CurrencyCode) => void;
}

const PricingStateContext = createContext<PricingState | null>(null);
const PricingActionsContext = createContext<PricingActions | null>(null);

export function PricingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PricingState>({
    billingCycle: 'monthly',
    currency: 'USD',
  });

  const actions = useMemo<PricingActions>(
    () => ({
      setBillingCycle: (cycle: BillingCycle) =>
        setState((prev) => ({ ...prev, billingCycle: cycle })),
      setCurrency: (currency: CurrencyCode) =>
        setState((prev) => ({ ...prev, currency })),
    }),
    []
  );

  return (
    <PricingStateContext.Provider value={state}>
      <PricingActionsContext.Provider value={actions}>
        {children}
      </PricingActionsContext.Provider>
    </PricingStateContext.Provider>
  );
}

export function usePricingState(): PricingState {
  const context = useContext(PricingStateContext);
  if (!context) {
    throw new Error('usePricingState must be used within a PricingProvider');
  }
  return context;
}

export function usePricingActions(): PricingActions {
  const context = useContext(PricingActionsContext);
  if (!context) {
    throw new Error('usePricingActions must be used within a PricingProvider');
  }
  return context;
}
