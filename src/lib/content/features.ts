export interface FeatureItem {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly gridArea?: string;
}

export const FEATURES: readonly FeatureItem[] = [
  {
    id: 'smart-pipelines',
    icon: 'arrow-path',
    title: 'Smart Data Pipelines',
    description: 'Build intelligent data pipelines that adapt in real-time. Our AI continuously optimizes data flow, reducing processing time by up to 10x.',
  },
  {
    id: 'analytics',
    icon: 'chart-pie',
    title: 'Advanced Analytics',
    description: 'Unlock deep insights with AI-powered analytics. Visualize patterns, predict trends, and make data-driven decisions with confidence.',
  },
  {
    id: 'integrations',
    icon: 'link',
    title: 'Seamless Integrations',
    description: 'Connect to 200+ tools and platforms. Sync data across your entire stack with zero-config integrations that just work.',
  },
  {
    id: 'automation',
    icon: 'cog-8-tooth',
    title: 'Workflow Automation',
    description: 'Design complex automation workflows with a visual builder. Trigger actions based on data events, schedules, or custom conditions.',
  },
  {
    id: 'monitoring',
    icon: 'arrow-trending-up',
    title: 'Real-Time Monitoring',
    description: 'Track every data point in real-time. Get instant alerts, performance metrics, and system health dashboards at a glance.',
  },
  {
    id: 'security',
    icon: 'cube-16-solid',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC2 compliance, and granular access controls. Your data stays secure at every step of the pipeline.',
  },
] as const;
