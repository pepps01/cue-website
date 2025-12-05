'use client';

import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import logo from 'figma:asset/22c4af6da20e1f1ab8da016b3205d656a88fe02a.png';
import { UserMode } from '../types';
import Image from 'next/image';

interface MainNavigationProps {
  onModeSelect: (mode: UserMode) => void;
  currentMode?: UserMode;
}

export function MainNavigation({ onModeSelect, currentMode }: MainNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleModeSelect = (mode: UserMode) => {
    onModeSelect(mode);
    setMobileMenuOpen(false);
    if (mode === 'rider') {
      router.push('/rider');
    } else if (mode === 'driver') {
      router.push('/driver');
    }
  };

  const handleLogoClick = () => {
    onModeSelect(null);
    router.push('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
            {/* <Image src={logo} alt="Cue Logo" className="h-10 w-10" /> */}
            <span className="text-2xl" style={{ color: '#0195FF' }}>Cue</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-700 hover:text-[#0195FF] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#0195FF] transition-colors">
              How it Works
            </a>
            <Link href="/privacy" className="text-gray-700 hover:text-[#0195FF] transition-colors">
              Privacy
            </Link>
            {!currentMode && (
              <>
                <Button
                  variant="ghost"
                  onClick={() => handleModeSelect('rider')}
                  className="hover:text-[#0195FF]"
                >
                  Ride
                </Button>
                <Button
                  onClick={() => handleModeSelect('driver')}
                  className="text-white"
                  style={{ backgroundColor: '#0195FF' }}
                >
                  Drive
                </Button>
              </>
            )}
            {currentMode && (
              <div className="px-4 py-2 rounded-full text-sm" style={{ backgroundColor: '#0195FF', color: 'white' }}>
                {currentMode === 'rider' ? 'Rider Mode' : 'Driver Mode'}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            <a 
              href="#features" 
              className="block py-2 text-gray-700 hover:text-[#0195FF]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block py-2 text-gray-700 hover:text-[#0195FF]"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <Link 
              href="/privacy" 
              className="block py-2 text-gray-700 hover:text-[#0195FF]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy
            </Link>
            {!currentMode && (
              <>
                <Button
                  variant="outline"
                  onClick={() => handleModeSelect('rider')}
                  className="w-full justify-center"
                >
                  Ride with Cue
                </Button>
                <Button
                  onClick={() => handleModeSelect('driver')}
                  className="w-full justify-center text-white"
                  style={{ backgroundColor: '#0195FF' }}
                >
                  Drive & Earn
                </Button>
              </>
            )}
            {currentMode && (
              <div className="px-4 py-2 rounded-full text-sm text-center" style={{ backgroundColor: '#0195FF', color: 'white' }}>
                {currentMode === 'rider' ? 'Rider Mode' : 'Driver Mode'}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
