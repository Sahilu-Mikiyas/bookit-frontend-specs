import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Event } from '@/types/event';
import { Calendar, MapPin, Users, User } from 'lucide-react';
import { format } from 'date-fns';

interface EventCardProps {
  event: Event;
  onSelect?: (event: Event) => void;
  onBook?: (event: Event) => void;
  showActions?: boolean;
  isAuthenticated?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ 
  event, 
  onSelect, 
  onBook,
  showActions = true,
  isAuthenticated = false
}) => {
  const formatEventDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  const formatEventTime = (dateString: string) => {
    return format(new Date(dateString), 'h:mm a');
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/20">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {event.name}
          </CardTitle>
          <Badge variant={event.isPublic ? 'default' : 'secondary'}>
            {event.isPublic ? 'Public' : 'Private'}
          </Badge>
        </div>
        
        <div className="space-y-1 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatEventDate(event.startDate)}</span>
            <span className="mx-2">•</span>
            <span>{formatEventTime(event.startDate)} - {formatEventTime(event.endDate)}</span>
          </div>
          
          {event.venue && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{event.venue.name}, {event.venue.location}</span>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            <span>Capacity: {event.capacity}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <User className="h-4 w-4 mr-1" />
            <span>by {event.organizer}</span>
          </div>
        </div>
        
        {showActions && (
          <div className="flex gap-2 mt-4">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => onSelect?.(event)}
            >
              View Details
            </Button>
            {isAuthenticated && event.isPublic && (
              <Button 
                variant="default" 
                className="flex-1"
                onClick={() => onBook?.(event)}
              >
                Book Event
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EventCard;