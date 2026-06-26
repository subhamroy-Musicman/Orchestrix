import type { TierKey, BillingCycle, CurrencyCode } from './types';
import { PRICING_MATRIX } from './pricing-matrix';

export function computePrice(
  tier: TierKey,
  cycle: BillingCycle,
  currency: CurrencyCode
): number {
  const base = PRICING_MATRIX.tiers[tier].baseMonthlyUSD;
  const tariff = PRICING_MATRIX.regionalTariff[currency];
  const discount = cycle === 'annual' ? PRICING_MATRIX.annualDiscountMultiplier : 1;
  return Math.round(base * tariff * discount);
}

export function formatPrice(amount: number, currency: CurrencyCode): string {
  const { locale, code } = PRICING_MATRIX.currencyConfig[currency];
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function computeAnnualSavings(
  tier: TierKey,
  currency: CurrencyCode
): number {
  const monthly = computePrice(tier, 'monthly', currency);
  const annual = computePrice(tier, 'annual', currency);
  return (monthly - annual) * 12;
}
