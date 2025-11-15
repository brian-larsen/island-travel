import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { MapPin, Hotel, Utensils } from 'lucide-react';
import mapImage from '../assets/taniti-map.png';

interface LocationMapDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  locationName: string;
  locationType: 'attraction' | 'accommodation' | 'dining' | 'event';
  coordinates: { x: number; y: number }; // percentage based coordinates (0-100)
}

export function LocationMapDialog({ 
  open, 
  onOpenChange, 
  locationName, 
  locationType,
  coordinates 
}: LocationMapDialogProps) {
  const getIcon = () => {
    switch (locationType) {
      case 'attraction':
        return <MapPin className="w-8 h-8 text-[#00CEED]" fill="#00CEED" />;
      case 'accommodation':
        return <Hotel className="w-8 h-8 text-[#5CB2AA]" fill="#5CB2AA" />;
      case 'dining':
        return <Utensils className="w-8 h-8 text-[#4682B4]" fill="#4682B4" />;
      case 'event':
        return <MapPin className="w-8 h-8 text-[#ABD1C6]" fill="#ABD1C6" />;
      default:
        return <MapPin className="w-8 h-8 text-[#00CEED]" fill="#00CEED" />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{locationName}</DialogTitle>
        </DialogHeader>
        <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden">
          <img 
            src={mapImage} 
            alt="Taniti Island Map" 
            className="w-full h-full object-contain"
          />
          {/* Location Marker */}
          <div 
            className="absolute transform -translate-x-1/2 -translate-y-full animate-bounce"
            style={{ 
              left: `${coordinates.x}%`, 
              top: `${coordinates.y}%` 
            }}
          >
            {getIcon()}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 whitespace-nowrap bg-white px-2 py-1 rounded shadow-lg text-sm">
              {locationName}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
