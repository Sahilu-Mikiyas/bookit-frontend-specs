import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VenueCard from '@/components/cards/VenueCard';
import EventCard from '@/components/cards/EventCard';
import BookingCard from '@/components/cards/BookingCard';
import { mockVenues, getEventsWithVenues, getBookingsWithDetails } from '@/data/mockData';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { 
  Settings, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Users, 
  Plus,
  BarChart3,
  TrendingUp
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { user, role } = useAuth();
  const { toast } = useToast();
  const [bookings, setBookings] = useState(getBookingsWithDetails());

  const venues = mockVenues;
  const events = getEventsWithVenues();
  const pendingBookings = bookings.filter(b => b.status === 'pending');
  const approvedBookings = bookings.filter(b => b.status === 'approved');

  const handleApproveBooking = (bookingId: string) => {
    setBookings(prev => prev.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'approved' as const }
        : booking
    ));
    toast({
      title: "Booking Approved",
      description: "The booking has been successfully approved.",
    });
  };

  const handleRejectBooking = (bookingId: string) => {
    setBookings(prev => prev.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'rejected' as const }
        : booking
    ));
    toast({
      title: "Booking Rejected",
      description: "The booking has been rejected.",
      variant: "destructive",
    });
  };

  if (role !== 'admin') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">You don't have permission to access this page.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Settings className="h-8 w-8" />
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">Manage venues, events, and bookings</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Venues</p>
                  <p className="text-2xl font-bold">{venues.length}</p>
                </div>
                <MapPin className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Events</p>
                  <p className="text-2xl font-bold">{events.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Bookings</p>
                  <p className="text-2xl font-bold text-warning">{pendingBookings.length}</p>
                </div>
                <BookOpen className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                  <p className="text-2xl font-bold text-success">$24,500</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="bookings">Manage Bookings</TabsTrigger>
            <TabsTrigger value="venues">Manage Venues</TabsTrigger>
            <TabsTrigger value="events">Manage Events</TabsTrigger>
          </TabsList>

          {/* Bookings Management */}
          <TabsContent value="bookings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Booking Requests</h2>
              <p className="text-muted-foreground">{pendingBookings.length} pending approval</p>
            </div>

            {pendingBookings.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <BookOpen className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No pending bookings</h3>
                  <p className="text-muted-foreground">All booking requests have been processed.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pendingBookings.map((booking) => (
                  <BookingCard 
                    key={booking.id} 
                    booking={booking}
                    isAdmin={true}
                    onApprove={handleApproveBooking}
                    onReject={handleRejectBooking}
                  />
                ))}
              </div>
            )}

            {approvedBookings.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Recent Approved Bookings</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {approvedBookings.slice(0, 3).map((booking) => (
                    <BookingCard 
                      key={booking.id} 
                      booking={booking}
                      showActions={false}
                    />
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* Venues Management */}
          <TabsContent value="venues" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Venue Management</h2>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add New Venue
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {venues.map((venue) => (
                <div key={venue.id} className="relative">
                  <VenueCard venue={venue} showActions={false} />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="destructive">Delete</Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Events Management */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Event Management</h2>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add New Event
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="relative">
                  <EventCard event={event} showActions={false} />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="destructive">Delete</Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;