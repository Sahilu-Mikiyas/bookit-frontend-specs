import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Booking } from '@/types/booking';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface BookingCardProps {
  booking: Booking;
  onApprove?: (bookingId: string) => void;
  onReject?: (bookingId: string) => void;
  showActions?: boolean;
  isAdmin?: boolean;
}

const BookingCard: React.FC<BookingCardProps> = ({ 
  booking, 
  onApprove,
  onReject,
  showActions = true,
  isAdmin = false
}) => {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'approved': return 'approved';
      case 'rejected': return 'rejected';
      case 'pending': return 'pending';
      default: return 'default';
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy - h:mm a');
  };

  return (
    <Card className="hover:shadow-md transition-all duration-200">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">
            {booking.event?.name || 'Event Details Unavailable'}
          </CardTitle>
          <Badge variant={getStatusVariant(booking.status)}>
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {booking.event && (
          <>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(booking.event.startDate)}</span>
            </div>
            
            {booking.event.venue && (
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{booking.event.venue.name}, {booking.event.venue.location}</span>
              </div>
            )}
          </>
        )}
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="h-4 w-4 mr-2" />
          <span>{booking.numberOfAttendees} attendee{booking.numberOfAttendees !== 1 ? 's' : ''}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-2" />
          <span>Booked on {format(new Date(booking.createdAt), 'MMM dd, yyyy')}</span>
        </div>
        
        {booking.notes && (
          <div className="mt-3 p-3 bg-muted rounded-md">
            <p className="text-sm text-muted-foreground">
              <strong>Notes:</strong> {booking.notes}
            </p>
          </div>
        )}
        
        {showActions && isAdmin && booking.status === 'pending' && (
          <div className="flex gap-2 mt-4">
            <Button 
              variant="success" 
              size="sm"
              className="flex-1"
              onClick={() => onApprove?.(booking.id)}
            >
              Approve
            </Button>
            <Button 
              variant="destructive" 
              size="sm"
              className="flex-1"
              onClick={() => onReject?.(booking.id)}
            >
              Reject
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingCard;
//card ends function here
