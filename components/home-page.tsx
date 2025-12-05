'use client';

import { UserMode } from '../types';
import { HeroSection } from './hero-section';
// import type { UserMode } from '@/types';

interface HomePageProps {
  onModeSelect: (mode: UserMode) => void;
}

export function HomePage({ onModeSelect }: HomePageProps) {
  return (
    <div>
      <HeroSection onModeSelect={onModeSelect} />
    </div>
  );
}
