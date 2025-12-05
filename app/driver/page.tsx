'use client';

import { useState } from 'react';
import { MainNavigation } from '@/components/main-navigation';
import { DriverDashboard } from '@/components/driver-dashboard';
import type { UserMode } from '@/types';

export default function page() {
  const [userMode, setUserMode] = useState<UserMode>('driver');

  const handleModeSelect = (mode: UserMode) => {
    setUserMode(mode);
  };

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation onModeSelect={handleModeSelect} currentMode={userMode} />
      <DriverDashboard />
    </div>
  );
}
