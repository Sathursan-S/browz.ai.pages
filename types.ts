
import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  link?: string;
}

export interface UseCase {
  title: string;
  description: string;
  command: string;
  icon: LucideIcon;
}

export enum SectionId {
  HOME = 'home',
  FEATURES = 'features',
  DEMOS = 'demos',
  ARCHITECTURE = 'architecture',
  USE_CASES = 'use-cases',
  TEAM = 'team',
}
