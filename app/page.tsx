'use client';

import { useState } from 'react';
import { MainNavigation } from '@/components/main-navigation';
import { HomePage } from '@/components/home-page';
import { BookingInterface } from '@/components/booking-interface';
import { RideTracker } from '@/components/ride-tracker';
import { DriverDashboard } from '@/components/driver-dashboard';
import type { UserMode, Ride } from '@/types';



export default function Page() {
  const [userMode, setUserMode] = useState<UserMode>(null);
  const [currentRide, setCurrentRide] = useState<Ride | null>(null);

  const handleModeSelect = (mode: UserMode) => {
    setUserMode(mode);
  };

  const handleRideUpdate = (ride: Ride) => {
    setCurrentRide(ride);
  };

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation onModeSelect={handleModeSelect} currentMode={userMode} />
      
      {!userMode && (
        <HomePage onModeSelect={handleModeSelect} />
      )}

      {userMode === 'rider' && (
        currentRide && currentRide.status !== 'idle' ? (
          <RideTracker ride={currentRide} onRideUpdate={handleRideUpdate} />
        ) : (
          <BookingInterface onRideUpdate={handleRideUpdate} />
        )
      )}

      {userMode === 'driver' && (
        <DriverDashboard />
      )}
    </div>
  );
}
