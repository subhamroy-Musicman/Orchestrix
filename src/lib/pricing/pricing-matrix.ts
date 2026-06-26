import type { PricingMatrixConfig } from './types';

export const PRICING_MATRIX: PricingMatrixConfig = {
  tiers: {
    starter: {
      name: 'Starter',
      baseMonthlyUSD: 29,
      description: 'Perfect for small teams getting started with AI automation',
      badge: null,
    },
    pro: {
      name: 'Pro',
      baseMonthlyUSD: 79,
      description: 'For growing teams that need more power and integrations',
      badge: 'Most Popular',
    },
    enterprise: {
      name: 'Enterprise',
      baseMonthlyUSD: 199,
      description: 'For large organizations with complex automation needs',
      badge: null,
    },
  },
  annualDiscountMultiplier: 0.80,
  regionalTariff: {
    USD: 1.00,
    EUR: 0.92,
    INR: 83.50,
  },
  currencyConfig: {
    USD: { symbol: '$', locale: 'en-US', code: 'USD' },
    EUR: { symbol: '€', locale: 'de-DE', code: 'EUR' },
    INR: { symbol: '₹', locale: 'en-IN', code: 'INR' },
  },
} as const;
