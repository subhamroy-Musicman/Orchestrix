import { CurrencyCode, BillingCycle } from './types';

type Listener = () => void;

class PricingStore {
  private state: { currency: CurrencyCode; cycle: BillingCycle } = {
    currency: 'USD',
    cycle: 'monthly'
  };
  private listeners: Set<Listener> = new Set();

  getState = () => {
    return this.state;
  };

  setCurrency = (c: CurrencyCode) => {
    if (this.state.currency !== c) {
      this.state = { ...this.state, currency: c };
      this.notify();
    }
  };

  setCycle = (c: BillingCycle) => {
    if (this.state.cycle !== c) {
      this.state = { ...this.state, cycle: c };
      this.notify();
    }
  };

  subscribe = (listener: Listener) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  private notify() {
    this.listeners.forEach(l => l());
  }
}

export const pricingStore = new PricingStore();
