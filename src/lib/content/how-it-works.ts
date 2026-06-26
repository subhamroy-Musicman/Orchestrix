export interface ProcessStep {
  readonly step: number;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    step: 1,
    title: 'Connect Your Data',
    description: 'Link your existing data sources in minutes. We support databases, APIs, spreadsheets, and 200+ integrations out of the box.',
    icon: 'link-solid',
  },
  {
    step: 2,
    title: 'Configure Workflows',
    description: 'Use our visual builder to design automation workflows. Set triggers, define transformations, and map outputs — no code required.',
    icon: 'cog-8-tooth',
  },
  {
    step: 3,
    title: 'Deploy & Scale',
    description: 'Launch your automations with one click. Our platform scales automatically to handle millions of data points per second.',
    icon: 'arrow-trending-up',
  },
] as const;
