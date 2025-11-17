import { useState, useEffect } from 'react';
import { Phone, MessageSquare, Star, Navigation, Clock, DollarSign, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

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


interface RideTrackerProps {
  ride: Ride;
  onRideUpdate: (ride: Ride) => void;
}

export function RideTracker({ ride, onRideUpdate }: RideTrackerProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate ride progression
    if (ride.status === 'searching') {
      setProgress(10);
    } else if (ride.status === 'matched') {
      setProgress(25);
      // Simulate driver arriving
      const timer = setTimeout(() => {
        onRideUpdate({ ...ride, status: 'pickup' });
      }, 5000);
      return () => clearTimeout(timer);
    } else if (ride.status === 'pickup') {
      setProgress(50);
      // Simulate trip starting
      const timer = setTimeout(() => {
        onRideUpdate({ ...ride, status: 'inProgress' });
      }, 8000);
      return () => clearTimeout(timer);
    } else if (ride.status === 'inProgress') {
      setProgress(75);
      // Simulate trip completion
      const timer = setTimeout(() => {
        onRideUpdate({ ...ride, status: 'completed' });
      }, 10000);
      return () => clearTimeout(timer);
    } else if (ride.status === 'completed') {
      setProgress(100);
    }
  }, [ride.status]);

  const getStatusMessage = () => {
    switch (ride.status) {
      case 'searching':
        return 'Finding your driver...';
      case 'matched':
        return 'Driver found! On the way to you';
      case 'pickup':
        return 'Driver is arriving';
      case 'inProgress':
        return 'Trip in progress';
      case 'completed':
        return 'Trip completed!';
      default:
        return 'Processing...';
    }
  };

  const getStatusColor = () => {
    if (ride.status === 'completed') return '#10B981';
    return '#0195FF';
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      {/* Map View */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-br from-blue-100 via-blue-50 to-gray-50">
        {/* Mock map with route */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            {/* Grid pattern */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5E7EB" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="800" height="400" fill="url(#grid)" />
            
            {/* Route line */}
            <path
              d="M 150,300 Q 250,200 400,250 T 650,100"
              stroke="#0195FF"
              strokeWidth="4"
              fill="none"
              strokeDasharray="8,4"
            />
            
            {/* Pickup marker */}
            <circle cx="150" cy="300" r="8" fill="#0195FF" />
            <circle cx="150" cy="300" r="16" fill="#0195FF" opacity="0.3" />
            
            {/* Destination marker */}
            <rect x="642" y="92" width="16" height="16" fill="#0195FF" />
            <rect x="634" y="84" width="32" height="32" fill="#0195FF" opacity="0.2" />
            
            {/* Driver car icon */}
            {ride.driver && ride.status !== 'completed' && (
              <g transform="translate(300, 240)">
                <circle r="20" fill="white" stroke="#0195FF" strokeWidth="2" />
                <path d="M-6,-4 L-6,4 L6,4 L6,-4 Z M-8,4 A2,2 0 1,1 -8,4 M8,4 A2,2 0 1,1 8,4" 
                      fill="#0195FF" transform="scale(0.8)" />
              </g>
            )}
          </svg>
        </div>

        {/* Status overlay */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <Card className="px-6 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: getStatusColor() }}></div>
              <span style={{ color: getStatusColor() }}>{getStatusMessage()}</span>
            </div>
          </Card>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Progress Bar */}
        <Card className="p-4 mb-6">
          <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
            <span>Searching</span>
            <span>Matched</span>
            <span>Pickup</span>
            <span>Trip</span>
            <span>Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </Card>

        {/* Driver Info */}
        {ride.driver && ride.status !== 'completed' && (
          <Card className="p-6 mb-6">
            <div className="flex items-start gap-4">
              <img
                src={ride.driver.image}
                alt={ride.driver.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl mb-1">{ride.driver.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{ride.driver.rating}</span>
                      <span className="mx-2">•</span>
                      <span>{ride.driver.car}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mt-4 text-sm">
                  <div className="px-4 py-2 rounded-full bg-gray-100">
                    <span className="text-gray-600">Plate: </span>
                    <span>{ride.driver.licensePlate}</span>
                  </div>
                  {ride.status === 'matched' && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{ride.driver.eta} min away</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Trip Details */}
        <Card className="p-6 mb-6">
          <h3 className="text-lg mb-4">Trip Details</h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: '#0195FF' }}></div>
              <div className="flex-1">
                <div className="text-sm text-gray-600">Pickup</div>
                <div>{ride.pickup}</div>
              </div>
            </div>
            
            <div className="ml-1.5 border-l-2 border-dashed border-gray-300 h-6"></div>
            
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-sm mt-1 flex-shrink-0" style={{ backgroundColor: '#0195FF' }}></div>
              <div className="flex-1">
                <div className="text-sm text-gray-600">Destination</div>
                <div>{ride.destination}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div>
              <div className="text-sm text-gray-600 mb-1">Distance</div>
              <div className="flex items-center gap-1">
                <Navigation className="h-4 w-4" style={{ color: '#0195FF' }} />
                <span>{ride.distance.toFixed(1)} km</span>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Duration</div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" style={{ color: '#0195FF' }} />
                <span>{Math.round(ride.duration)} min</span>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Fare</div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" style={{ color: '#0195FF' }} />
                <span>{ride.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Completed Trip */}
        {ride.status === 'completed' && (
          <Card className="p-6 text-center border-2 border-green-200 bg-green-50">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl mb-2">Trip Completed!</h3>
            <p className="text-gray-700 mb-6">
              Payment of ${ride.price.toFixed(2)} processed automatically
            </p>
            
            <div className="max-w-sm mx-auto mb-6">
              <p className="text-sm text-gray-600 mb-3">How was your ride?</p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="w-10 h-10 rounded-full hover:bg-yellow-100 flex items-center justify-center transition-colors"
                  >
                    <Star className="h-6 w-6 text-gray-300 hover:text-yellow-400 hover:fill-yellow-400" />
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={() => onRideUpdate({ ...ride, status: 'idle' })}
              className="text-lg px-8 py-6"
              style={{ backgroundColor: '#0195FF' }}
            >
              Book Another Ride
            </Button>
          </Card>
        )}

        {/* Cancel Ride */}
        {ride.status !== 'completed' && ride.status !== 'inProgress' && (
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() => onRideUpdate({ ...ride, status: 'idle' })}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <X className="h-4 w-4 mr-2" />
              Cancel Ride
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}