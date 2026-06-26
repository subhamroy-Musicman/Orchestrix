import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { SectionContent } from '../layout/SectionContent';
import { InteractiveFeatures } from './InteractiveFeatures';

export function FeaturesSection() {
  return (
    <Section id="features" hasAmbientLight>
      <Container>
        <SectionHeader
          id="features"
          title="Everything you need to automate at scale"
          subtitle="Enterprise-grade capabilities built into a beautiful, intuitive interface. No complex setup required."
          align="center"
        />

        <SectionContent>
          <InteractiveFeatures />
        </SectionContent>
        
      </Container>
    </Section>
  );
}
