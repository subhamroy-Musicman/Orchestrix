import type { CurrencyCode, CurrencyConfig } from './types';
import { PRICING_MATRIX } from './pricing-matrix';

export const CURRENCIES: readonly CurrencyCode[] = ['USD', 'EUR', 'INR'] as const;

export function getCurrencyConfig(code: CurrencyCode): CurrencyConfig {
  return PRICING_MATRIX.currencyConfig[code];
}

export function getCurrencySymbol(code: CurrencyCode): string {
  return PRICING_MATRIX.currencyConfig[code].symbol;
}

export function getRegionalTariff(code: CurrencyCode): number {
  return PRICING_MATRIX.regionalTariff[code];
}
