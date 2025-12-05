'use client';

import { useState } from 'react';
import { MainNavigation } from '@/components/main-navigation';
import { BookingInterface } from '@/components/booking-interface';
import { RideTracker } from '@/components/ride-tracker';
import type { UserMode, Ride } from '@/types';

export default function page() {
  const [currentRide, setCurrentRide] = useState<Ride | null>(null);
  const [userMode, setUserMode] = useState<UserMode>('rider');

  const handleRideUpdate = (ride: Ride) => {
    setCurrentRide(ride);
  };

  const handleModeSelect = (mode: UserMode) => {
    setUserMode(mode);
  };

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation onModeSelect={handleModeSelect} currentMode={userMode} />
      
      {currentRide && currentRide.status !== 'idle' ? (
        <RideTracker ride={currentRide} onRideUpdate={handleRideUpdate} />
      ) : (
        <BookingInterface onRideUpdate={handleRideUpdate} />
      )}
    </div>
  );
}
