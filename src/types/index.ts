export interface Product {
  name: string;
  price: number;
  icon?: string;
  availableFrom?: string;
}

export interface Course {
  name: string;
  level: string;
  class: string;
  subject: string;
  trimester?: string;
}

export interface CartItem extends Product {
  id: string;
  course?: Course;
}

export interface Level {
  id: string;
  name: string;
  classes?: string[];
  types?: Record<string, LevelType>;
}

export interface LevelType {
  series: Record<string, string[]>;
}

export interface PremiumPlan {
  name: string;
  price: number;
  duration: string;
  services: number;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
