import { Card, CardHeader, CardTitle, CardBody, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils/cn';
import { DynamicPrice, BillingLabel } from './DynamicPrice';
import { PRICING_MATRIX } from '@/lib/pricing/pricing-matrix';
import type { TierKey } from '@/lib/pricing/types';

interface PricingCardProps {
  tierId: TierKey;
}

const FEATURES_BY_TIER: Record<TierKey, string[]> = {
  starter: [
    'Up to 10,000 tasks/mo',
    'Standard integrations',
    'Community support',
    'Basic analytics'
  ],
  pro: [
    'Up to 100,000 tasks/mo',
    'Advanced integrations',
    'Priority email support',
    'Custom workflows',
    'Advanced analytics'
  ],
  enterprise: [
    'Unlimited tasks',
    'Custom integrations',
    '24/7 phone support',
    'Dedicated success manager',
    'Custom SLA'
  ]
};

export function PricingCard({ tierId }: PricingCardProps) {
  const tier = PRICING_MATRIX.tiers[tierId];
  const isPro = tierId === 'pro';
  const features = FEATURES_BY_TIER[tierId];

  return (
    <Card 
      className={cn(
        "relative h-full flex flex-col transition-all duration-500 hover:-translate-y-2", 
        isPro ? "border-forsythia/40 bg-white/[0.04] lg:-mt-4 lg:mb-4 shadow-[0_20px_40px_-15px_rgba(255,200,1,0.15)] z-10" : "bg-black/20 hover:border-white/15"
      )}
    >
      {/* Popular Badge */}
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-forsythia text-noir text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,200,1,0.5)] z-20 whitespace-nowrap">
          {tier.badge}
        </div>
      )}

      {/* Pro Glow Accent */}
      {isPro && (
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-forsythia to-transparent opacity-70" />
      )}

      <CardHeader className="text-center pb-6 pt-4">
        <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
        <p className="text-mint/70 text-[13px] px-4 min-h-[40px] flex items-center justify-center leading-relaxed">
          {tier.description}
        </p>
        <div className="flex flex-col items-center justify-center min-h-[110px] mt-2">
           <DynamicPrice tier={tierId} />
           <BillingLabel />
        </div>
      </CardHeader>

      <CardBody className="flex-1 border-t border-white/5 pt-8 mt-2 relative">
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 group/feature">
              <div className="w-5 h-5 rounded-full bg-forsythia/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-forsythia/20 group-hover/feature:bg-forsythia/20 transition-colors">
                {/* SVG for checkmark because chevron-up is not a good checkmark */}
                <svg className="w-3 h-3 text-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[14.5px] text-mint/90 font-medium group-hover/feature:text-white transition-colors">{feature}</span>
            </li>
          ))}
        </ul>
      </CardBody>

      <CardFooter className="pt-8 border-none mt-auto">
        <Button 
          variant={isPro ? "primary" : "glass"} 
          className={cn(
            "w-full h-[48px] rounded-[12px] font-semibold text-[15px] shadow-lg transition-all duration-300",
            isPro && "shadow-[0_0_20px_rgba(255,200,1,0.25)] hover:shadow-[0_0_30px_rgba(255,200,1,0.4)]"
          )}
        >
          {tierId === 'enterprise' ? "Contact Sales" : "Start Free"}
        </Button>
      </CardFooter>
    </Card>
  );
}
