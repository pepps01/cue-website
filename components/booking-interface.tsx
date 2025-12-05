'use client';

import { useState } from 'react';
import { MapPin, Navigation, Clock, DollarSign, Zap, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Ride, Driver } from '../types';

interface BookingInterfaceProps {
  onRideUpdate: (ride: Ride) => void;
}

const rideTypes = [
  { id: 'economy', name: 'Economy', icon: Car, priceMultiplier: 1, capacity: 4, description: 'Affordable rides' },
  { id: 'comfort', name: 'Comfort', icon: Zap, priceMultiplier: 1.3, capacity: 4, description: 'Extra comfort' },
  { id: 'xl', name: 'XL', icon: Users, priceMultiplier: 1.5, capacity: 6, description: 'For groups' },
];

function Car(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 17h14v-5l-2-3H7l-2 3v5z" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

export function BookingInterface({ onRideUpdate }: BookingInterfaceProps) {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedType, setSelectedType] = useState('economy');
  const [showEstimate, setShowEstimate] = useState(false);

  const calculateEstimate = () => {
    if (!pickup || !destination) return null;
    
    const basePrice = 5;
    const distance = Math.random() * 15 + 2; // 2-17 km
    const duration = Math.random() * 30 + 5; // 5-35 min
    const type = rideTypes.find(t => t.id === selectedType);
    const price = (basePrice + distance * 1.5) * (type?.priceMultiplier || 1);

    return { price, distance, duration };
  };

  const handleGetEstimate = () => {
    if (pickup && destination) {
      setShowEstimate(true);
    }
  };

  const handleRequestRide = () => {
    const estimate = calculateEstimate();
    if (!estimate) return;

    // Mock finding a driver
    const mockDriver: Driver = {
      id: '1',
      name: 'John Smith',
      rating: 4.8,
      car: 'Toyota Camry',
      licensePlate: 'ABC 123',
      distance: 0.5,
      eta: 3,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      lat: 40.7589,
      lng: -73.9851,
    };

    const ride: Ride = {
      id: Date.now().toString(),
      pickup,
      destination,
      status: 'searching',
      price: estimate.price,
      distance: estimate.distance,
      duration: estimate.duration,
    };

    onRideUpdate(ride);

    // Simulate finding driver after 2 seconds
    setTimeout(() => {
      onRideUpdate({ ...ride, status: 'matched', driver: mockDriver });
    }, 2000);
  };

  const estimate = showEstimate ? calculateEstimate() : null;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        {/* Map Preview */}
        <Card className="mb-4 md:mb-6 overflow-hidden">
          <div className="h-48 md:h-64 bg-gradient-to-br from-blue-100 to-blue-50 relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <path d="M50,150 Q100,100 150,150 T250,150 T350,150" stroke="#0195FF" strokeWidth="3" fill="none" />
                <path d="M100,100 L150,50 L200,100 L150,150 Z" fill="#0195FF" opacity="0.3" />
                <circle cx="80" cy="180" r="30" fill="#0195FF" opacity="0.2" />
                <circle cx="320" cy="120" r="40" fill="#0195FF" opacity="0.2" />
              </svg>
            </div>
            <div className="relative z-10 text-center">
              <Navigation className="h-12 w-12 mx-auto mb-2" style={{ color: '#0195FF' }} />
              <p className="text-gray-600">Map view will show your route here</p>
            </div>
          </div>
        </Card>

        {/* Booking Form */}
        <Card className="p-6 mb-6">
          <h2 className="text-2xl mb-6">Where to?</h2>
          
          <div className="space-y-4 mb-6">
            <div>
              <Label htmlFor="pickup" className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#0195FF' }}></div>
                Pickup Location
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="pickup"
                  placeholder="Enter pickup address"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="destination" className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#0195FF' }}></div>
                Destination
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="destination"
                  placeholder="Where are you going?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Ride Types */}
          <div className="mb-6">
            <Label className="mb-3 block">Choose ride type</Label>
            <div className="grid grid-cols-3 gap-3">
              {rideTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedType === type.id
                        ? 'border-[#0195FF] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-6 w-6 mx-auto mb-2" style={{ color: selectedType === type.id ? '#0195FF' : '#6B7280' }} />
                    <div className="text-sm mb-1">{type.name}</div>
                    <div className="text-xs text-gray-500">{type.description}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {!showEstimate ? (
            <Button
              onClick={handleGetEstimate}
              disabled={!pickup || !destination}
              className="w-full text-lg py-6"
              style={{ backgroundColor: '#0195FF' }}
            >
              Get Price Estimate
            </Button>
          ) : null}
        </Card>

        {/* Price Estimate */}
        {estimate && showEstimate && (
          <Card className="p-6 mb-6 border-2" style={{ borderColor: '#0195FF' }}>
            <h3 className="text-xl mb-4">Trip Estimate</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-2">
                  <DollarSign className="h-6 w-6" style={{ color: '#0195FF' }} />
                </div>
                <div className="text-sm text-gray-600 mb-1">Price</div>
                <div className="text-xl">${estimate.price.toFixed(2)}</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-2">
                  <Navigation className="h-6 w-6" style={{ color: '#0195FF' }} />
                </div>
                <div className="text-sm text-gray-600 mb-1">Distance</div>
                <div className="text-xl">{estimate.distance.toFixed(1)} km</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-2">
                  <Clock className="h-6 w-6" style={{ color: '#0195FF' }} />
                </div>
                <div className="text-sm text-gray-600 mb-1">Duration</div>
                <div className="text-xl">{Math.round(estimate.duration)} min</div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-700">
                <strong>Route:</strong> {pickup} → {destination}
              </p>
            </div>

            <Button
              onClick={handleRequestRide}
              className="w-full text-lg py-6"
              style={{ backgroundColor: '#0195FF' }}
            >
              Request Ride
            </Button>
          </Card>
        )}

        {/* Quick Tips */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4 bg-blue-50 border-blue-100">
            <h4 className="mb-2">💡 Pro Tip</h4>
            <p className="text-sm text-gray-700">
              Book via WhatsApp by sending your pickup and destination addresses to our bot!
            </p>
          </Card>
          <Card className="p-4 bg-blue-50 border-blue-100">
            <h4 className="mb-2">🎤 Voice Booking</h4>
            <p className="text-sm text-gray-700">
              Use AI voice commands to book your ride hands-free while you're on the go.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}