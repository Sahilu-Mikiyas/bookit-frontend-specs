import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { mockVenues } from '@/data/mockData';
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  DollarSign, 
  Star,
  Wifi,
  Car,
  Coffee,
  Monitor,
  Shield,
  Calendar
} from 'lucide-react';

const VenueDetailPage: React.FC = () => {
  const { id } = useParams();
  const venue = mockVenues.find(v => v.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!venue) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Venue Not Found</h1>
          <Link to="/explore">
            <Button variant="default">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Explore
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Mock images for demo
  const images = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ];

  const amenityIcons: Record<string, React.ComponentType<any>> = {
    'WiFi': Wifi,
    'Parking': Car,
    'Coffee Service': Coffee,
    'Projector': Monitor,
    'Secure Access': Shield,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/explore">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Explore
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src={images[selectedImageIndex]} 
                alt={venue.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-video rounded-md overflow-hidden border-2 ${
                    selectedImageIndex === index 
                      ? 'border-primary' 
                      : 'border-transparent hover:border-border'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${venue.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{venue.name}</h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{venue.location}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1 text-primary" />
                  <span>Up to {venue.capacity} guests</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1 text-accent" />
                  <span>${venue.pricePerHour}/hour</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-3">About This Venue</h2>
              <p className="text-muted-foreground leading-relaxed">{venue.description}</p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Amenities</h2>
              <div className="grid grid-cols-2 gap-3">
                {venue.amenities.map((amenity) => {
                  const IconComponent = amenityIcons[amenity] || Calendar;
                  return (
                    <div key={amenity} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <IconComponent className="h-4 w-4 text-primary" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Reviews</h2>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.8 (24 reviews)</span>
              </div>
              <div className="space-y-3">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">Sarah Johnson</span>
                      <span className="text-sm text-muted-foreground">2 weeks ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Perfect venue for our corporate event. Great location and excellent facilities!"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <Card>
          <CardHeader>
            <CardTitle>Book This Venue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-1">
                <div className="text-2xl font-bold text-primary mb-2">
                  ${venue.pricePerHour}/hour
                </div>
                <p className="text-sm text-muted-foreground">
                  Minimum 2-hour booking • Capacity up to {venue.capacity} guests
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Check Availability
                </Button>
                <Button>
                  Book Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VenueDetailPage;