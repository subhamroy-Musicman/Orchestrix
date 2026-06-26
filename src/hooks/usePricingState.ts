'use client';

import { useSyncExternalStore, useCallback } from 'react';
import { pricingStore } from '@/lib/pricing/store';

export function usePricingState() {
  const getSnapshot = useCallback(() => pricingStore.getState(), []);
  
  return useSyncExternalStore(
    pricingStore.subscribe,
    getSnapshot,
    getSnapshot // SSR matches initial state of the store
  );
}

export function usePricingActions() {
  return {
    setCurrency: pricingStore.setCurrency,
    setCycle: pricingStore.setCycle,
  };
}
