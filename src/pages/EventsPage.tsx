import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import EventCard from '@/components/cards/EventCard';
import { getEventsWithVenues } from '@/data/mockData';
import { useAuth } from '@/context/AuthContext';
import { Search, Filter, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EventsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(getEventsWithVenues());
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const handleSearch = () => {
    const filtered = getEventsWithVenues().filter(event =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (event.venue && event.venue.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredEvents(filtered);
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilteredEvents(getEventsWithVenues());
  };

  const handleBookEvent = (event: any) => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please log in to book events.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would open a booking modal or navigate to booking page
    toast({
      title: "Booking Initiated",
      description: `Starting booking process for "${event.name}".`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover and book exciting events happening at premium venues around the city
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search by event name, organizer, or venue..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSearch} className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
                <Button variant="outline" onClick={handleReset} className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredEvents.length} of {getEventsWithVenues().length} events
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard 
                key={event.id} 
                event={event}
                isAuthenticated={isAuthenticated}
                onSelect={(event) => navigate(`/event/${event.id}`)}
                onBook={handleBookEvent}
              />
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-muted-foreground mb-4">
                <Calendar className="h-12 w-12 mx-auto opacity-50" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No events found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or browse all events.
              </p>
              <Button onClick={handleReset}>
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default EventsPage;