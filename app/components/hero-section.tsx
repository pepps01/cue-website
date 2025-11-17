import { Car, Navigation, Smartphone, CreditCard, Zap, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from 'figma:asset/22c4af6da20e1f1ab8da016b3205d656a88fe02a.png';

export type UserMode = 'rider' | 'driver' | null;

interface HeroSectionProps {
  onModeSelect: (mode: UserMode) => void;
}

export function HeroSection({ onModeSelect }: HeroSectionProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#0195FF' }}>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1594538756542-8c88bda491c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWdvcyUyME5pZ2VyaWElMjBjaXR5fGVufDF8fHx8MTc2MzM3MDEyMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Lagos Nigeria cityscape"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="text-center">
            {/* <img src={logo} alt="Cue Logo" className="h-20 md:h-32 w-20 md:w-32 mx-auto mb-6" /> */}
            <h1 className="text-4xl md:text-6xl text-white mb-4 md:mb-6">Cue</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-3 md:mb-4">
              Your ride, on demand
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 md:mb-12 px-4">
              Book rides instantly via phone, AI, or WhatsApp. Connect with nearby drivers and pay seamlessly through the app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button
                size="lg"
                onClick={() => onModeSelect('rider')}
                className="bg-white hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto sm:min-w-[200px]"
                style={{ color: '#0195FF' }}
              >
                <Car className="mr-2 h-5 w-5" />
                Request a Ride
              </Button>
              <Button
                size="lg"
                onClick={() => onModeSelect('driver')}
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto sm:min-w-[200px]"
              >
                <Navigation className="mr-2 h-5 w-5" />
                Drive & Earn
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl mb-3 md:mb-4">How Cue Works</h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            An on-demand transportation platform that connects riders with drivers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          <Card className="p-6 md:p-8 border-2 hover:border-[#0195FF] transition-colors">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4" style={{ backgroundColor: '#0195FF' }}>
              <Smartphone className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl mb-2 md:mb-3">Request via Phone or AI</h3>
            <p className="text-sm md:text-base text-gray-600">
              Book your ride through the app, voice AI assistant, or simply send a WhatsApp message. Multiple ways to connect.
            </p>
          </Card>

          <Card className="p-6 md:p-8 border-2 hover:border-[#0195FF] transition-colors">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4" style={{ backgroundColor: '#0195FF' }}>
              <Navigation className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl mb-2 md:mb-3">Real-time GPS Tracking</h3>
            <p className="text-sm md:text-base text-gray-600">
              Watch your driver approach in real-time. Get accurate ETAs and live location updates throughout your journey.
            </p>
          </Card>

          <Card className="p-6 md:p-8 border-2 hover:border-[#0195FF] transition-colors sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4" style={{ backgroundColor: '#0195FF' }}>
              <CreditCard className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl mb-2 md:mb-3">Automatic Payment</h3>
            <p className="text-sm md:text-base text-gray-600">
              Pay seamlessly through the app. No cash needed. Get instant receipts and trip history at your fingertips.
            </p>
          </Card>
        </div>

        {/* Image Feature Sections */}
        <div id="how-it-works" className="space-y-12 md:space-y-20 mb-12 md:mb-20">
          {/* Rider Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl mb-3 md:mb-4">Ride whenever you need</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                Request a ride with just a few taps. See your driver's location in real-time and get picked up in minutes. Your journey starts here.
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#0195FF' }}>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">Book rides in seconds via app, AI, or WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#0195FF' }}>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">Track your driver's arrival in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#0195FF' }}>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">Transparent pricing with no hidden fees</span>
                </li>
              </ul>
              <Button
                size="lg"
                onClick={() => onModeSelect('rider')}
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto"
                style={{ backgroundColor: '#0195FF' }}
              >
                Get Started
              </Button>
            </div>
            <div className="order-1 md:order-2 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1547319784-330d3b12b3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBjYXIlMjByaWRlfGVufDF8fHx8MTc2MzM3MDEyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="African woman enjoying car ride"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Driver Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1708347456816-db9d5d7efe3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZHJpdmVyJTIwc21pbGluZ3xlbnwxfHx8fDE3NjMzNzAxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="African driver smiling"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-3 md:mb-4">Drive and earn on your schedule</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                Make money on your terms. Drive when you want, where you want. Earn competitive rates and get paid automatically.
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#0195FF' }}>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">Flexible schedule - drive whenever you want</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#0195FF' }}>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">Instant payouts and detailed earnings reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#0195FF' }}>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">Safety features and 24/7 support</span>
                </li>
              </ul>
              <Button
                size="lg"
                onClick={() => onModeSelect('driver')}
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto"
                style={{ backgroundColor: '#0195FF' }}
              >
                Start Driving
              </Button>
            </div>
          </div>

          {/* Technology Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl mb-3 md:mb-4">Experience comfort & safety</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                Enjoy premium rides with professional drivers. Every trip is tracked, rated, and secured with our advanced safety features.
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#0195FF' }}>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">Verified drivers with background checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#0195FF' }}>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">Clean, well-maintained vehicles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#0195FF' }}>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">Share trip details with friends and family</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1665491641078-1f8b275c8108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMzNDQ4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern car interior"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          <div className="flex gap-4 items-start p-6 rounded-lg bg-gray-50">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0195FF' }}>
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-lg mb-2">Dynamic Pricing</h4>
              <p className="text-gray-600">
                Fair, transparent pricing with surge detection. Know your fare upfront before you book.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-6 rounded-lg bg-gray-50">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0195FF' }}>
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-lg mb-2">WhatsApp Integration</h4>
              <p className="text-gray-600">
                Request rides directly from WhatsApp. Get updates and communicate with your driver effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-16" style={{ backgroundColor: '#0195FF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of riders and drivers using Cue every day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onModeSelect('rider')}
              className="bg-white hover:bg-gray-100 text-lg px-8 py-6"
              style={{ color: '#0195FF' }}
            >
              Start Riding
            </Button>
            <Button
              size="lg"
              onClick={() => onModeSelect('driver')}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Become a Driver
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}