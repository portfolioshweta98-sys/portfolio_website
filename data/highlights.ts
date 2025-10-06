export interface Highlight {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const highlights: Highlight[] = [
  {
    id: "ai-systems",
    title: "I turn AI ideas into working systems",
    description: "From concepts to real AI tools.",
  },
  {
    id: "data-trust",
    title: "I make data easy to trust and act on",
    description: "Turning numbers into clear stories.",
  },
  {
    id: "engineering-scale",
    title: "I engineer for scale",
    description: "Faster, smoother, stronger systems.",
  },
  {
    id: "people-growth",
    title: "I grow with people",
    description: "Mentoring, learning, thriving together.",
  },
  {
    id: "impact-focus",
    title: "Above all, I focus on impact",
    description: "Saving time, effort, and confusion.",
  },
];
