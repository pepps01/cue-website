import { useState, useEffect } from 'react';
import { DollarSign, Clock, Navigation, TrendingUp, Star, MapPin, Phone, Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

interface RideRequest {
  id: string;
  rider: string;
  pickup: string;
  destination: string;
  distance: number;
  fare: number;
  rating: number;
}

export function DriverDashboard() {
  const [isOnline, setIsOnline] = useState(false);
  const [earnings, setEarnings] = useState(247.50);
  const [tripsToday, setTripsToday] = useState(12);
  const [activeRequest, setActiveRequest] = useState<RideRequest | null>(null);

  useEffect(() => {
    if (isOnline && !activeRequest) {
      // Simulate receiving ride requests
      const timer = setTimeout(() => {
        const mockRequest: RideRequest = {
          id: Date.now().toString(),
          rider: 'Sarah Johnson',
          pickup: '123 Main Street, Downtown',
          destination: 'Airport Terminal 2',
          distance: 12.5,
          fare: 32.50,
          rating: 4.9,
        };
        setActiveRequest(mockRequest);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, activeRequest]);

  const handleAcceptRide = () => {
    if (activeRequest) {
      setEarnings(prev => prev + activeRequest.fare);
      setTripsToday(prev => prev + 1);
      setActiveRequest(null);
    }
  };

  const handleDeclineRide = () => {
    setActiveRequest(null);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Online Status Toggle */}
        <Card className="p-4 md:p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl mb-2">Driver Status</h2>
              <p className="text-gray-600">
                {isOnline ? 'You are online and accepting rides' : 'Go online to start accepting rides'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Label htmlFor="online-toggle" className="text-lg">
                {isOnline ? 'Online' : 'Offline'}
              </Label>
              <Switch
                id="online-toggle"
                checked={isOnline}
                onCheckedChange={setIsOnline}
                className="data-[state=checked]:bg-[#0195FF]"
              />
            </div>
          </div>
        </Card>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-sm text-gray-600">Today's Earnings</div>
            </div>
            <div className="text-3xl">${earnings.toFixed(2)}</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Navigation className="h-5 w-5" style={{ color: '#0195FF' }} />
              </div>
              <div className="text-sm text-gray-600">Trips Today</div>
            </div>
            <div className="text-3xl">{tripsToday}</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-sm text-gray-600">Online Hours</div>
            </div>
            <div className="text-3xl">6.5h</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
            <div className="text-3xl">4.8</div>
          </Card>
        </div>

        {/* Incoming Ride Request */}
        {activeRequest && (
          <Card className="p-6 mb-6 border-2 animate-pulse" style={{ borderColor: '#0195FF', animationDuration: '2s' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl">New Ride Request!</h3>
              <div className="text-2xl" style={{ color: '#0195FF' }}>
                ${activeRequest.fare.toFixed(2)}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 mt-1">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                    alt={activeRequest.rider}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span>{activeRequest.rider}</span>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{activeRequest.rating}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-8 px-3">
                      <Phone className="h-3 w-3 mr-1" />
                      Call
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0195FF' }}></div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">Pickup</div>
                    <div>{activeRequest.pickup}</div>
                  </div>
                </div>
                
                <div className="ml-1.5 border-l-2 border-dashed border-gray-300 h-4"></div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-sm mt-2 flex-shrink-0" style={{ backgroundColor: '#0195FF' }}></div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">Destination</div>
                    <div>{activeRequest.destination}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Navigation className="h-4 w-4" />
                  <span>{activeRequest.distance} km</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>~{Math.round(activeRequest.distance * 2)} min</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleAcceptRide}
                className="flex-1 text-lg py-6"
                style={{ backgroundColor: '#0195FF' }}
              >
                <Check className="mr-2 h-5 w-5" />
                Accept Ride
              </Button>
              <Button
                onClick={handleDeclineRide}
                variant="outline"
                className="px-6 py-6 border-2 border-red-200 text-red-600 hover:bg-red-50"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        )}

        {/* Waiting for Requests */}
        {isOnline && !activeRequest && (
          <Card className="p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-10 w-10 animate-pulse" style={{ color: '#0195FF' }} />
            </div>
            <h3 className="text-2xl mb-2">Looking for rides nearby...</h3>
            <p className="text-gray-600">
              We'll notify you when a rider requests a trip in your area
            </p>
          </Card>
        )}

        {/* Offline State */}
        {!isOnline && (
          <Card className="p-12 text-center bg-gray-50">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
              <Navigation className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-2xl mb-2">You're offline</h3>
            <p className="text-gray-600 mb-6">
              Toggle the switch above to start accepting ride requests
            </p>
          </Card>
        )}

        {/* Earnings Summary */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card className="p-6">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" style={{ color: '#0195FF' }} />
              Weekly Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-600">Total Earnings</span>
                <span className="text-xl">$1,245.50</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-600">Total Trips</span>
                <span className="text-xl">67</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-600">Online Hours</span>
                <span className="text-xl">42.5h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Avg per Hour</span>
                <span className="text-xl" style={{ color: '#0195FF' }}>$29.30</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Recent Feedback
            </h3>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">2 hours ago</span>
                </div>
                <p className="text-sm text-gray-700">"Great driver, very professional and friendly!"</p>
              </div>
              <div className="border-b pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5 hours ago</span>
                </div>
                <p className="text-sm text-gray-700">"Clean car and smooth ride. Highly recommend!"</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <span className="text-sm text-gray-600">Yesterday</span>
                </div>
                <p className="text-sm text-gray-700">"Good service, arrived on time."</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}