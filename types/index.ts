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
