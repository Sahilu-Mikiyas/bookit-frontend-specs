import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Clock, 
  Mail, 
  Phone,
  Download,
  Share2,
  Star
} from 'lucide-react';

const BookingConfirmationPage: React.FC = () => {
  // Mock booking data
  const booking = {
    id: 'BK-2024-001',
    confirmationNumber: 'CNF-789456123',
    status: 'confirmed',
    items: [
      {
        id: '1',
        name: 'Grand Ballroom Booking',
        venue: 'Luxury Hotel Downtown',
        address: '123 Business Avenue, New York, NY 10001',
        date: '2024-12-15',
        time: '18:00 - 23:00',
        price: 2500,
        quantity: 1,
        type: 'venue'
      },
      {
        id: '2',
        name: 'Jazz Night Experience',
        venue: 'Blue Note Lounge',
        address: '456 Music Street, New York, NY 10002',
        date: '2024-12-20', 
        time: '20:00 - 22:00',
        price: 85,
        quantity: 2,
        type: 'event'
      }
    ],
    customer: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567'
    },
    payment: {
      method: 'Credit Card ending in 3456',
      total: 2570.00,
      transactionId: 'TXN-456789'
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Header */}
        <Card className="text-center mb-8 border-success/20 bg-success/5">
          <CardContent className="py-12">
            <CheckCircle className="h-16 w-16 mx-auto text-success mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-2">Booking Confirmed!</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Your reservation has been successfully processed
            </p>
            <Badge variant="success" className="text-sm font-medium">
              Confirmation #{booking.confirmationNumber}
            </Badge>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Booked Items */}
            <Card>
              <CardHeader>
                <CardTitle>Your Bookings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {booking.items.map((item) => (
                  <div key={item.id} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                        <p className="text-muted-foreground">{item.venue}</p>
                        <Badge variant="secondary" className="mt-1">
                          {item.type === 'venue' ? 'Venue Booking' : 'Event Ticket'}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">${(item.price * item.quantity).toLocaleString()}</p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-muted-foreground">{item.quantity} × ${item.price}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{new Date(item.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{item.address}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{booking.customer.name}</p>
                      <p className="text-sm text-muted-foreground">{booking.customer.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">{booking.customer.phone}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Payment Method</span>
                    <span className="font-medium">{booking.payment.method}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transaction ID</span>
                    <span className="font-mono text-sm">{booking.payment.transactionId}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Paid</span>
                    <span>${booking.payment.total.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button className="w-full" variant="default">
                    <Download className="h-4 w-4 mr-2" />
                    Download Receipt
                  </Button>
                  
                  <Button className="w-full" variant="outline">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Booking
                  </Button>
                  
                  <Button className="w-full" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Add to Calendar
                  </Button>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Link to="/dashboard" className="block w-full">
                    <Button variant="secondary" className="w-full">
                      View All Bookings
                    </Button>
                  </Link>
                  
                  <Link to="/venues" className="block w-full">
                    <Button variant="ghost" className="w-full">
                      Book Another Venue
                    </Button>
                  </Link>
                </div>

                <Separator />

                {/* Important Information */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Important Information</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Confirmation email sent to {booking.customer.email}</li>
                    <li>• Arrive 15 minutes before your scheduled time</li>
                    <li>• Contact venue directly for any special requests</li>
                    <li>• Cancellation policy applies as per terms</li>
                  </ul>
                </div>

                {/* Rate Experience */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Rate Your Experience</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Help others by sharing your booking experience
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Star className="h-4 w-4 mr-2" />
                    Leave a Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;