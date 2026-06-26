export type TierKey = 'starter' | 'pro' | 'enterprise';
export type BillingCycle = 'monthly' | 'annual';
export type CurrencyCode = 'USD' | 'EUR' | 'INR';

export interface TierConfig {
  readonly name: string;
  readonly baseMonthlyUSD: number;
  readonly description: string;
  readonly badge: string | null;
}

export interface CurrencyConfig {
  readonly symbol: string;
  readonly locale: string;
  readonly code: CurrencyCode;
}

export interface PricingMatrixConfig {
  readonly tiers: Record<TierKey, TierConfig>;
  readonly annualDiscountMultiplier: number;
  readonly regionalTariff: Record<CurrencyCode, number>;
  readonly currencyConfig: Record<CurrencyCode, CurrencyConfig>;
}
