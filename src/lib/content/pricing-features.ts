import type { TierKey } from '../pricing/types';

export interface PricingFeature {
  readonly text: string;
  readonly included: boolean;
}

export const TIER_FEATURES: Record<TierKey, readonly PricingFeature[]> = {
  starter: [
    { text: 'Up to 5 data pipelines', included: true },
    { text: '10,000 records/month', included: true },
    { text: '5 integrations', included: true },
    { text: 'Basic analytics dashboard', included: true },
    { text: 'Email support', included: true },
    { text: 'Custom workflows', included: false },
    { text: 'API access', included: false },
    { text: 'SSO & SAML', included: false },
  ],
  pro: [
    { text: 'Unlimited data pipelines', included: true },
    { text: '500,000 records/month', included: true },
    { text: '50 integrations', included: true },
    { text: 'Advanced analytics & AI insights', included: true },
    { text: 'Priority support', included: true },
    { text: 'Custom workflows', included: true },
    { text: 'API access', included: true },
    { text: 'SSO & SAML', included: false },
  ],
  enterprise: [
    { text: 'Unlimited everything', included: true },
    { text: 'Unlimited records', included: true },
    { text: '200+ integrations', included: true },
    { text: 'Custom AI models', included: true },
    { text: 'Dedicated support & SLA', included: true },
    { text: 'Advanced workflows', included: true },
    { text: 'Full API access', included: true },
    { text: 'SSO, SAML & SCIM', included: true },
  ],
} as const;
