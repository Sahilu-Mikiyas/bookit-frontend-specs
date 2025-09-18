import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import BookingCard from '@/components/cards/BookingCard';
import EventCard from '@/components/cards/EventCard';
import VenueCard from '@/components/cards/VenueCard';
import { useAuth } from '@/context/AuthContext';
import { getBookingsWithDetails, mockVenues, getEventsWithVenues } from '@/data/mockData';
import { 
  Calendar,
  Heart,
  Settings,
  User,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const [favoriteVenues] = useState(['1', '3']); // Mock favorite venues
  const [favoriteEvents] = useState(['2', '4']); // Mock favorite events
  
  const allBookings = getBookingsWithDetails();
  const userBookings = allBookings.filter(booking => booking.userId === user?.id);
  const upcomingBookings = userBookings.filter(booking => booking.status !== 'rejected');
  const pastBookings = userBookings.filter(booking => booking.status === 'approved');

  const favoriteVenuesList = mockVenues.filter(venue => favoriteVenues.includes(venue.id));
  const favoriteEventsList = getEventsWithVenues().filter(event => favoriteEvents.includes(event.id));

  const stats = {
    totalBookings: userBookings.length,
    upcomingEvents: upcomingBookings.filter(b => b.status === 'approved').length,
    pendingApprovals: upcomingBookings.filter(b => b.status === 'pending').length,
    favoritesSaved: favoriteVenues.length + favoriteEvents.length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-muted-foreground">
            Manage your bookings, favorites, and profile settings
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
                  <p className="text-3xl font-bold text-primary">{stats.totalBookings}</p>
                </div>
                <Calendar className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Upcoming Events</p>
                  <p className="text-3xl font-bold text-success">{stats.upcomingEvents}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Approvals</p>
                  <p className="text-3xl font-bold text-warning">{stats.pendingApprovals}</p>
                </div>
                <Clock className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Favorites Saved</p>
                  <p className="text-3xl font-bold text-accent">{stats.favoritesSaved}</p>
                </div>
                <Heart className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="profile">Profile Settings</TabsTrigger>
          </TabsList>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upcoming Bookings */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Upcoming Events</h2>
                  <Link to="/my-bookings">
                    <Button variant="ghost" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {upcomingBookings.slice(0, 3).map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                  {upcomingBookings.length === 0 && (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">No upcoming bookings</p>
                        <Link to="/explore">
                          <Button className="mt-4">Explore Events</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              {/* Past Bookings */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Recent Activity</h2>
                </div>
                <div className="space-y-4">
                  {pastBookings.slice(0, 3).map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                  {pastBookings.length === 0 && (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">No past events</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Favorite Venues */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Favorite Venues</h2>
                <div className="space-y-4">
                  {favoriteVenuesList.map((venue) => (
                    <VenueCard key={venue.id} venue={venue} showActions />
                  ))}
                  {favoriteVenuesList.length === 0 && (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">No favorite venues yet</p>
                        <Link to="/venues">
                          <Button className="mt-4">Browse Venues</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              {/* Favorite Events */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Favorite Events</h2>
                <div className="space-y-4">
                  {favoriteEventsList.map((event) => (
                    <EventCard 
                      key={event.id} 
                      event={event} 
                      showActions 
                      isAuthenticated={true}
                    />
                  ))}
                  {favoriteEventsList.length === 0 && (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">No favorite events yet</p>
                        <Link to="/events">
                          <Button className="mt-4">Browse Events</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Profile Settings Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="max-w-2xl">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Profile Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{user?.name}</p>
                        <p className="text-sm text-muted-foreground">{user?.email}</p>
                        <Badge variant="outline" className="mt-1">
                          {user?.role === 'user' ? 'Booker' : user?.role}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Link to="/profile">
                        <Button variant="outline" className="w-full">
                          <Settings className="h-4 w-4 mr-2" />
                          Edit Profile
                        </Button>
                      </Link>
                      <Button variant="outline" className="w-full">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        View Analytics
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;