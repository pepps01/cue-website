import { ArrowLeft, User } from 'lucide-react';
import { Button } from './ui/button';
import { UserMode } from '../types';

interface NavigationProps {
  onBack: () => void;
  mode: UserMode;
}

export function Navigation({ onBack, mode }: NavigationProps) {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div className="h-8 w-px bg-gray-200" />
            <h1 className="text-2xl" style={{ color: '#0195FF' }}>Cue</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#0195FF', color: 'white' }}>
              {mode === 'rider' ? 'Rider' : 'Driver'}
            </div>
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
