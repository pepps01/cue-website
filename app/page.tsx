'use client'
import { useState } from 'react';
import { MainNavigation } from './components/main-navigation';
import { HeroSection } from './components/hero-section';
import { BookingInterface } from './components/booking-interface';
import { DriverDashboard } from './components/driver-dashboard';
import { RideTracker } from './components/ride-tracker';

export type UserMode = 'rider' | 'driver' | null;
export type RideStatus = 'idle' | 'searching' | 'matched' | 'pickup' | 'inProgress' | 'completed';

export interface Driver {
  id: string;
  name: string;
  rating: number;
  car: string;
  licensePlate: string;
  distance: number;
  eta: number;
  image: string;
  lat: number;
  lng: number;
}

export interface Ride {
  id: string;
  pickup: string;
  destination: string;
  driver?: Driver;
  status: RideStatus;
  price: number;
  distance: number;
  duration: number;
}

export default function Home() {
  const [userMode, setUserMode] = useState<UserMode>(null);
  const [currentRide, setCurrentRide] = useState<Ride | null>(null);

  const handleModeSelect = (mode: UserMode) => {
    setUserMode(mode);
  };

  const handleBack = () => {
    if (currentRide && currentRide.status !== 'idle') {
      // Don't allow going back during active ride
      return;
    }
    setUserMode(null);
    setCurrentRide(null);
  };

  const handleRideUpdate = (ride: Ride) => {
    setCurrentRide(ride);
  };

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation onModeSelect={handleModeSelect} currentMode={userMode} />
      
      {!userMode && (
        <HeroSection onModeSelect={handleModeSelect} />
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