import { Container } from '../layout/Container';

export function CTASection() {
  return (
    <section id="cta" aria-labelledby="cta-heading" className="py-20 md:py-24 lg:py-32 bg-noir">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="cta-heading" className="text-arctic font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            Ready to Get Started?
          </h2>
        </div>
        {/* DO NOT implement CTA visually as per instructions */}
      </Container>
    </section>
  );
}
