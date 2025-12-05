'use client';

import { useState } from 'react';
import { MainNavigation } from '@/components/main-navigation';
import type { UserMode } from '@/types';
import { PrivacyPage } from '@/components/privacy-page';

export default function page() {
  const [userMode, setUserMode] = useState<UserMode>(null);

  const handleModeSelect = (mode: UserMode) => {
    setUserMode(mode);
  };

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation onModeSelect={handleModeSelect} currentMode={userMode} />
      <PrivacyPage />
    </div>
  );
}
