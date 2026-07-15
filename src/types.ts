export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  subLabel: string;
}

export interface ProblemItem {
  icon: string;
  title: string;
  description: string;
  cost: string;
}

export interface ResultItem {
  title: string;
  location: string;
  tag: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    trend?: 'up' | 'down';
  }[];
}

export interface TestimonialItem {
  initials: string;
  name: string;
  role: string;
  quote: string;
}

export interface CoverageItem {
  state: string;
  cities: string;
  status: 'active' | 'accepting';
}

export interface PackageItem {
  name: string;
  price: string;
  note: string;
  forText: string;
  ticks: string[];
  featured?: boolean;
  ctaText: string;
}

export interface TimelineItem {
  step: string;
  title: string;
  when: string;
  description: string;
}
