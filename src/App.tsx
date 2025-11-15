import { Navbar } from './components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Calendar, MapPin, Users, Utensils, Hotel, Info } from 'lucide-react';
import { LocationMapDialog } from './components/LocationMapDialog';
import { PhotoCreditsDialog } from './components/PhotoCreditsDialog';
import { useState } from 'react';

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState<{
    name: string;
    type: 'attraction' | 'accommodation' | 'dining' | 'event';
    coordinates: { x: number; y: number };
  } | null>(null);
  const [photoCreditsOpen, setPhotoCreditsOpen] = useState(false);

  const events = [
    {
      title: 'Island Music Festival',
      date: 'December 15-17, 2025',
      location: 'Sunset Beach',
      description: 'Three days of live music featuring local and international artists on the beach.',
      image: 'https://images.unsplash.com/photo-1656848981929-bab777fc26a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY29uY2VydHxlbnwxfHx8fDE3NjIyNTgxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Music', 'Outdoor'],
      mapCoordinates: { x: 31, y: 61 }
    },
    {
      title: 'Cultural Heritage Week',
      date: 'January 20-27, 2026',
      location: 'Downtown District',
      description: 'Celebrate the rich history and traditions of the island with parades, exhibitions, and performances.',
      image: 'https://images.unsplash.com/photo-1639369501176-f40a0641c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGZlc3RpdmFsfGVufDF8fHx8MTc2MjMxODA1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Culture', 'Family'],
      mapCoordinates: { x: 34, y: 35 }
    }
  ];

  const attractions = [
    {
      title: 'Sunset Point',
      description: 'Watch breathtaking sunsets from the highest point on the island. A must-visit destination for photographers.',
      image: 'https://images.unsplash.com/photo-1682604261885-721bda568d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBtb3VudGFpbiUyMG9jZWFuJTIwaXNsYW5kfGVufDF8fHx8MTc2MjQ5MDg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      mapCoordinates: { x: 50, y: 35 }
    },
    {
      title: 'Paradise Waterfalls',
      description: 'Hike through lush tropical forest to discover stunning cascading waterfalls and natural pools.',
      image: 'https://images.unsplash.com/photo-1582583088753-afb19907963a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHdhdGVyZmFsbHxlbnwxfHx8fDE3NjIyOTgwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      mapCoordinates: { x: 34, y: 62 }
    },
    {
      title: 'Historic Lighthouse',
      description: 'Visit the 150-year-old lighthouse that has guided ships safely to shore. Climb to the top for panoramic views.',
      image: 'https://images.unsplash.com/photo-1640016966372-609df72467de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGxpZ2h0aG91c2V8ZW58MXx8fHwxNzYyMzE4MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      mapCoordinates: { x: 75, y: 88 }
    }
  ];

  const accommodations = [
    {
      title: 'Ocean View Resort & Spa',
      type: 'Luxury Resort',
      price: '$350-500/night',
      description: 'Five-star beachfront resort with infinity pools, spa services, and world-class dining.',
      image: 'https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDF8fHx8MTc2MjIyMzEzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      mapCoordinates: { x: 47, y: 74 }
    },
    {
      title: 'Seaside Beach Hotel',
      type: 'Beach Hotel',
      price: '$150-250/night',
      description: 'Comfortable beachfront accommodations with easy access to water sports and island activities.',
      image: 'https://images.unsplash.com/photo-1729605412240-bc3cb17d7600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMGhvdGVsfGVufDF8fHx8MTc2MjI4OTQ3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      mapCoordinates: { x: 30, y: 64 }
    },
    {
      title: 'Paradise Boutique Inn',
      type: 'Boutique Hotel',
      price: '$100-180/night',
      description: 'Charming boutique hotel in the heart of town with personalized service and local character.',
      image: 'https://images.unsplash.com/photo-1667604946733-c7dd5b992d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYm91dGlxdWUlMjBob3RlbHxlbnwxfHx8fDE3NjIzMTgwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      mapCoordinates: { x: 34, y: 35 }
    }
  ];

  const dining = [
    {
      title: 'The Catch',
      cuisine: 'Seafood',
      description: 'Fresh catch of the day prepared by award-winning chefs. Specializing in local seafood traditions.',
      image: 'https://images.unsplash.com/photo-1558163269-764ecd8f9fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwZGluaW5nJTIwcGxhdGV8ZW58MXx8fHwxNzYyMzE4MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      priceRange: '$$$',
      mapCoordinates: { x: 68, y: 72 }
    },
    {
      title: 'Island Market Cafe',
      cuisine: 'Local Cuisine',
      description: 'Experience authentic island flavors with fresh tropical fruits, local spices, and traditional recipes.',
      image: 'https://images.unsplash.com/photo-1741522227033-3320102dc4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZydWl0cyUyMG1hcmtldHxlbnwxfHx8fDE3NjIyODE2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      priceRange: '$$',
      mapCoordinates: { x: 38, y: 32 }
    },
    {
      title: 'Sunset Terrace',
      cuisine: 'International',
      description: 'Dine with stunning ocean views. Mediterranean and Asian fusion cuisine in an elegant setting.',
      image: 'https://images.unsplash.com/photo-1609881839371-05cafb4741ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwb2NlYW4lMjB2aWV3fGVufDF8fHx8MTc2MjMxODA1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      priceRange: '$$$$',
      mapCoordinates: { x: 22, y: 28 }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1620930066607-725a158ae1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNofGVufDF8fHx8MTc2MjI0MDU0NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Taniti Beach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Welcome to Taniti</h1>
          <p className="text-xl md:text-2xl">Discover your perfect tropical escape</p>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#CCDCDC]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-[#00CEED]" />
            <h2 className="text-4xl">Upcoming Events</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card 
                key={index} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedLocation({
                  name: event.title,
                  type: 'event',
                  coordinates: event.mapCoordinates
                })}
              >
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex gap-2 mb-2">
                    {event.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Attractions Section */}
      <section id="attractions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-8 h-8 text-[#5CB2AA]" />
            <h2 className="text-4xl">Popular Attractions</h2>
          </div>
          <p className="text-lg text-gray-700 mb-10 max-w-4xl">
            From thrilling adventures to peaceful escapes, Taniti offers something for every type of traveler. Explore lush hiking trails that wind through tropical rainforests, set sail on crystal-clear waters perfect for boating and sailing, or soar above the island with exhilarating paragliding experiences. <br /><br />History enthusiasts can discover fascinating historic sites that tell the story of our island's rich heritage, while night owls will find vibrant nightlife venues pulsing with energy. <br /><br />For those seeking outdoor adventure, camping under the stars provides an unforgettable connection to nature. Whatever your passion, Taniti's diverse attractions promise memories that will last a lifetime.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card 
                key={index} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedLocation({
                  name: attraction.title,
                  type: 'attraction',
                  coordinates: attraction.mapCoordinates
                })}
              >
                <div className="h-56 overflow-hidden">
                  <ImageWithFallback
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{attraction.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Places to Stay Section */}
      <section id="stay" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ABD1C6]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Hotel className="w-8 h-8 text-[#00CEED]" />
            <h2 className="text-4xl">Places to Stay</h2>
          </div>
          <p className="text-lg text-gray-700 mb-10 max-w-4xl">
            Whether you're seeking indulgent luxury or budget-friendly comfort, Taniti provides accommodation options to suit every traveler's needs and preferences. Pamper yourself at our world-class luxury resorts with oceanfront suites and five-star amenities, unwind in comfortable mid-range hotels that balance quality and value, or embrace the island's natural beauty at scenic campsites under tropical skies. <br /><br />Budget-conscious adventurers will find welcoming hostels perfect for meeting fellow travelers, while boutique inns offer personalized charm and local character. From opulent escapes to cozy retreats, your ideal island home awaits.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {accommodations.map((place, index) => (
              <Card 
                key={index} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedLocation({
                  name: place.title,
                  type: 'accommodation',
                  coordinates: place.mapCoordinates
                })}
              >
                <div className="h-56 overflow-hidden">
                  <ImageWithFallback
                    src={place.image}
                    alt={place.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2">{place.type}</Badge>
                  <CardTitle>{place.title}</CardTitle>
                  <CardDescription className="text-blue-600">{place.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{place.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine and Dining Section */}
      <section id="dining" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Utensils className="w-8 h-8 text-[#5CB2AA]" />
            <h2 className="text-4xl">Cuisine and Dining</h2>
          </div>
          <p className="text-lg text-gray-700 mb-10 max-w-4xl">
            Embark on a culinary journey that captures the essence of island living. Taniti's dining scene showcases an incredible variety of flavors, from the freshest seafood caught daily in our pristine waters to authentic local dishes bursting with tropical ingredients and traditional island spices. Savor succulent grilled fish, tender lobster, and perfectly prepared shellfish at our oceanfront seafood restaurants, or explore the vibrant tastes of Taniti's heritage through time-honored recipes passed down through generations. <br /><br />Whether you're craving international fusion cuisine, casual beachside cafes, or fine dining experiences with sunset views, our island's diverse restaurant scene offers unforgettable meals for every palate and occasion.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {dining.map((restaurant, index) => (
              <Card 
                key={index} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedLocation({
                  name: restaurant.title,
                  type: 'dining',
                  coordinates: restaurant.mapCoordinates
                })}
              >
                <div className="h-56 overflow-hidden">
                  <ImageWithFallback
                    src={restaurant.image}
                    alt={restaurant.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{restaurant.title}</CardTitle>
                    <span className="text-gray-500">{restaurant.priceRange}</span>
                  </div>
                  <CardDescription>{restaurant.cuisine}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{restaurant.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About the Island Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#CCDCDC]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Info className="w-8 h-8 text-[#00CEED]" />
            <h2 className="text-4xl">About the Island</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Taniti is a tropical gem nestled in crystal-clear waters, offering visitors an unforgettable experience of natural beauty, rich culture, and warm hospitality. With pristine beaches, lush rainforests, and vibrant local traditions, the island has become a premier destination for travelers seeking both adventure and relaxation.
              </p>
              
              <h3 className="text-2xl text-gray-900 mb-3 mt-6">Weather</h3>
              <p className="text-lg text-gray-700 mb-4">
                Taniti enjoys a tropical climate with warm temperatures year-round, making it an ideal destination in any season. Expect sunshine, gentle ocean breezes, and occasional refreshing rain showers that keep the island lush and vibrant.
              </p>

              <h3 className="text-2xl text-gray-900 mb-3 mt-6">Getting Around</h3>
              <p className="text-lg text-gray-700 mb-4">
                Taniti offers several convenient transportation options to help you explore the island:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><span className="text-gray-900">Public Bus System:</span> An efficient bus network connects the capital to main shopping centers, beaches, hotels, and popular attractions throughout the island.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><span className="text-gray-900">Guided Bus Tours:</span> Discover the island's highlights with knowledgeable local guides who share the history and culture of Taniti.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><span className="text-gray-900">Rental Cars:</span> Multiple rental car companies are available at various locations throughout the island, offering flexibility for independent exploration.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><span className="text-gray-900">Bicycle Rentals:</span> Perfect for leisurely rides between nearby beaches and shopping areas, bicycles provide an eco-friendly way to enjoy the island's coastal scenery.</span>
                </li>
              </ul>
            </div>
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1620930066607-725a158ae1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNofGVufDF8fHx8MTc2MjI0MDU0NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Taniti View"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6 items-center">
              <a 
                href="https://facebook.com/VisitTaniti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#5CB2AA] transition-colors"
                aria-label="Visit Taniti on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/VisitTaniti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#ABD1C6] transition-colors"
                aria-label="Visit Taniti on X"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/TanitiWildlife" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00CEED] transition-colors"
                aria-label="Taniti Wildlife Conservation on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@TanitiIsland" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#4682B4] transition-colors"
                aria-label="Taniti Island on YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Follow us for travel tips, wildlife updates, and island stories</p>
              <p className="text-gray-400">© 2025 Taniti Tourism Board. All rights reserved.</p>
              <button 
                onClick={() => setPhotoCreditsOpen(true)}
                className="text-sm text-[#ABD1C6] hover:text-[#00CEED] transition-colors mt-2 underline"
              >
                Photo Credits
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Location Map Dialog */}
      {selectedLocation && (
        <LocationMapDialog
          open={!!selectedLocation}
          onOpenChange={(open) => !open && setSelectedLocation(null)}
          locationName={selectedLocation.name}
          locationType={selectedLocation.type}
          coordinates={selectedLocation.coordinates}
        />
      )}

      {/* Photo Credits Dialog */}
      <PhotoCreditsDialog
        open={photoCreditsOpen}
        onOpenChange={setPhotoCreditsOpen}
      />
    </div>
  );
}