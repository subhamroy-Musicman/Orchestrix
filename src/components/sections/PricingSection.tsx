import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { SectionContent } from '../layout/SectionContent';
import { PricingControls } from '../pricing/PricingControls';
import { PricingCard } from '../pricing/PricingCard';
import type { TierKey } from '@/lib/pricing/types';

export function PricingSection() {
  const tiers: TierKey[] = ['starter', 'pro', 'enterprise'];

  return (
    <Section id="pricing" hasAmbientLight>
      <Container>
        <SectionHeader
          id="pricing"
          title="Simple, Transparent Pricing"
          subtitle="Choose the perfect plan for your automation needs. No hidden fees."
          align="center"
        />

        <SectionContent className="mt-12 max-w-5xl mx-auto px-4 lg:px-8">
          <PricingControls />
          
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6"
            style={{ marginTop: '140px' }}
          >
            {tiers.map(tier => (
              <div 
                key={tier} 
                className={tier === 'enterprise' ? 'md:col-span-2 lg:col-span-1 md:w-1/2 lg:w-full md:mx-auto lg:mx-0' : ''}
              >
                <PricingCard tierId={tier} />
              </div>
            ))}
          </div>
        </SectionContent>
      </Container>
    </Section>
  );
}
