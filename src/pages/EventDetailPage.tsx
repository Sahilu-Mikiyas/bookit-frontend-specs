import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getEventsWithVenues } from '@/data/mockData';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  Calendar,
  Clock,
  User,
  Star,
  Heart,
  Share2,
  Ticket
} from 'lucide-react';

const EventDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [isFavorited, setIsFavorited] = useState(false);
  
  const events = getEventsWithVenues();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
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

  const formatEventDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatEventTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleBookEvent = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please log in to book this event.",
        variant: "destructive",
      });
      return;
    }

    navigate('/checkout');
  };

  const handleToggleFavorite = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please log in to save favorites.",
        variant: "destructive",
      });
      return;
    }

    setIsFavorited(!isFavorited);
    toast({
      title: isFavorited ? "Removed from Favorites" : "Added to Favorites",
      description: isFavorited 
        ? "Event removed from your favorites." 
        : "Event saved to your favorites.",
    });
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Hero */}
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <img 
                src="/placeholder.svg"
                alt={event.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Info */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant={event.isPublic ? "default" : "secondary"}>
                  {event.isPublic ? "Public Event" : "Private Event"}
                </Badge>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleToggleFavorite}
                    className={isFavorited ? "text-red-500" : ""}
                  >
                    <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-foreground mb-4">{event.name}</h1>

              {/* Event Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{formatEventDate(event.startDate)}</p>
                    <p className="text-sm text-muted-foreground">Event Date</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">
                      {formatEventTime(event.startDate)} - {formatEventTime(event.endDate)}
                    </p>
                    <p className="text-sm text-muted-foreground">Time</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{event.venue?.name}</p>
                    <p className="text-sm text-muted-foreground">{event.venue?.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{event.capacity} attendees</p>
                    <p className="text-sm text-muted-foreground">Capacity</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">About This Event</h2>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </div>

              {/* Organizer */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Organized By</h2>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{event.organizer}</p>
                    <p className="text-sm text-muted-foreground">Event Organizer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card>
              <CardHeader>
                <CardTitle>Book Your Spot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Free Event</div>
                  <p className="text-sm text-muted-foreground">
                    {event.capacity} spots available
                  </p>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleBookEvent}
                  disabled={!event.isPublic}
                >
                  <Ticket className="h-4 w-4 mr-2" />
                  {event.isPublic ? 'Book & Pay' : 'Private Event'}
                </Button>

                {!isAuthenticated && (
                  <p className="text-xs text-center text-muted-foreground">
                    <Link to="/login" className="text-primary hover:underline">
                      Sign in
                    </Link>
                    {' '}to book this event
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Venue Info */}
            {event.venue && (
              <Card>
                <CardHeader>
                  <CardTitle>Venue Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">{event.venue.name}</p>
                      <p className="text-sm text-muted-foreground">{event.venue.location}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span>Capacity:</span>
                      <span>{event.venue.capacity} people</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span>Amenities:</span>
                      <span>{event.venue.amenities.length} available</span>
                    </div>

                    <Link to={`/venue/${event.venue.id}`}>
                      <Button variant="outline" className="w-full mt-3">
                        View Venue Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9 (18 reviews)</span>
                </div>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium mb-1">Great networking event!</p>
                    <p className="text-muted-foreground text-xs">- Alex Johnson, 1 week ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;