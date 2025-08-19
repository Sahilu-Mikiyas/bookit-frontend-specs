import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Venue } from '@/types/venue';
import { MapPin, Users, DollarSign } from 'lucide-react';

interface VenueCardProps {
  venue: Venue;
  onSelect?: (venue: Venue) => void;
  showActions?: boolean;
}

const VenueCard: React.FC<VenueCardProps> = ({ 
  venue, 
  onSelect, 
  showActions = true 
}) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/20">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {venue.name}
          </CardTitle>
          <Badge variant="secondary" className="ml-2">
            ${venue.pricePerHour}/hr
          </Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {venue.location}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {venue.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            <span>Capacity: {venue.capacity}</span>
          </div>
          <div className="flex items-center text-sm text-primary font-medium">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>${venue.pricePerHour}/hour</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {venue.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="outline" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {venue.amenities.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{venue.amenities.length - 3} more
            </Badge>
          )}
        </div>
        
        {showActions && (
          <Button 
            className="w-full mt-4" 
            variant="default"
            onClick={() => onSelect?.(venue)}
          >
            View Details
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default VenueCard;