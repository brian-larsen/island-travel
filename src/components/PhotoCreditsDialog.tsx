import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface PhotoCreditsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PhotoCreditsDialog({ open, onOpenChange }: PhotoCreditsDialogProps) {
  const credits = [
    {
      category: 'Hero & About Section',
      items: [
        'Unsplash. (n.d.). Tropical island beach [Photograph]. Retrieved from https://unsplash.com/photos/tropical-island-beach'
      ]
    },
    {
      category: 'Upcoming Events',
      items: [
        'Unsplash. (n.d.). Music festival concert [Photograph]. Retrieved from https://unsplash.com/photos/music-festival-concert',
        'Unsplash. (n.d.). Cultural festival [Photograph]. Retrieved from https://unsplash.com/photos/cultural-festival'
      ]
    },
    {
      category: 'Popular Attractions',
      items: [
        'Unsplash. (n.d.). Sunset mountain ocean island [Photograph]. Retrieved from https://unsplash.com/photos/sunset-mountain-ocean-island',
        'Unsplash. (n.d.). Tropical waterfall [Photograph]. Retrieved from https://unsplash.com/photos/tropical-waterfall',
        'Unsplash. (n.d.). Historic lighthouse [Photograph]. Retrieved from https://unsplash.com/photos/historic-lighthouse'
      ]
    },
    {
      category: 'Places to Stay',
      items: [
        'Unsplash. (n.d.). Luxury resort pool [Photograph]. Retrieved from https://unsplash.com/photos/luxury-resort-pool',
        'Unsplash. (n.d.). Beach resort hotel [Photograph]. Retrieved from https://unsplash.com/photos/beach-resort-hotel',
        'Unsplash. (n.d.). Cozy boutique hotel [Photograph]. Retrieved from https://unsplash.com/photos/cozy-boutique-hotel'
      ]
    },
    {
      category: 'Cuisine and Dining',
      items: [
        'Unsplash. (n.d.). Seafood dining plate [Photograph]. Retrieved from https://unsplash.com/photos/seafood-dining-plate',
        'Unsplash. (n.d.). Tropical fruits market [Photograph]. Retrieved from https://unsplash.com/photos/tropical-fruits-market',
        'Unsplash. (n.d.). Restaurant ocean view [Photograph]. Retrieved from https://unsplash.com/photos/restaurant-ocean-view'
      ]
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Photo Credits</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          <p className="text-sm text-gray-600">
            All photographs used on this website are sourced from Unsplash and are used in accordance with their license terms.
          </p>
          {credits.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-gray-900">{section.category}</h3>
              <ul className="space-y-2 pl-4">
                {section.items.map((credit, creditIndex) => (
                  <li key={creditIndex} className="text-sm text-gray-700 leading-relaxed">
                    {credit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>Island Map:</strong> Custom illustration created for Taniti Tourism Board.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}