import { Container } from '../layout/Container';

export function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-20 md:py-24 lg:py-32 bg-noir">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="pricing-heading" className="text-arctic font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            Simple, Transparent Pricing
          </h2>
        </div>
        {/* DO NOT implement Pricing visually as per instructions */}
      </Container>
    </section>
  );
}
