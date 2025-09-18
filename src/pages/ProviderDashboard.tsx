import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/context/AuthContext';
import { 
  Plus,
  Building2,
  Calendar,
  TrendingUp,
  DollarSign,
  Users,
  Eye,
  Edit,
  BarChart3,
  Clock
} from 'lucide-react';

const ProviderDashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock provider data
  const stats = {
    totalListings: 8,
    activeBookings: 23,
    monthlyRevenue: 4250,
    totalViews: 1340,
    pendingApprovals: 2,
    approvedListings: 6,
  };

  const recentListings = [
    { 
      id: '1', 
      name: 'Modern Event Space', 
      type: 'venue', 
      status: 'approved', 
      views: 145, 
      bookings: 8 
    },
    { 
      id: '2', 
      name: 'Tech Conference 2024', 
      type: 'event', 
      status: 'pending', 
      views: 67, 
      bookings: 0 
    },
    { 
      id: '3', 
      name: 'Creative Workshop Hub', 
      type: 'venue', 
      status: 'approved', 
      views: 203, 
      bookings: 12 
    },
  ];

  const recentBookings = [
    { id: '1', eventName: 'Digital Marketing Summit', date: '2024-03-15', attendees: 2, revenue: 50 },
    { id: '2', eventName: 'Creative Workshop', date: '2024-03-20', attendees: 1, revenue: 25 },
    { id: '3', eventName: 'Startup Pitch Competition', date: '2024-04-01', attendees: 3, revenue: 75 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Provider Dashboard
            </h1>
            <p className="text-muted-foreground">
              Welcome back, {user?.name}! Manage your listings and track performance.
            </p>
          </div>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <Link to="/provider/add-venue">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Venue
              </Button>
            </Link>
            <Link to="/provider/add-event">
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Listings</p>
                  <p className="text-3xl font-bold text-primary">{stats.totalListings}</p>
                </div>
                <Building2 className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Bookings</p>
                  <p className="text-3xl font-bold text-success">{stats.activeBookings}</p>
                </div>
                <Calendar className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
                  <p className="text-3xl font-bold text-accent">${stats.monthlyRevenue}</p>
                </div>
                <DollarSign className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Views</p>
                  <p className="text-3xl font-bold text-warning">{stats.totalViews}</p>
                </div>
                <Eye className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Approval Status Alert */}
        {stats.pendingApprovals > 0 && (
          <Card className="mb-8 border-warning/50 bg-warning/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-warning" />
                  <div>
                    <p className="font-medium text-warning">Pending Approvals</p>
                    <p className="text-sm text-muted-foreground">
                      You have {stats.pendingApprovals} listings awaiting admin approval
                    </p>
                  </div>
                </div>
                <Link to="/provider/listings">
                  <Button variant="outline" size="sm">
                    View Listings
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Listings */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Listings</CardTitle>
                <Link to="/provider/listings">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentListings.map((listing) => (
                  <div key={listing.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        {listing.type === 'venue' ? 
                          <Building2 className="h-5 w-5 text-primary" /> : 
                          <Calendar className="h-5 w-5 text-primary" />
                        }
                      </div>
                      <div>
                        <p className="font-medium">{listing.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge 
                            variant={listing.status === 'approved' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {listing.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {listing.views} views • {listing.bookings} bookings
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Bookings */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Bookings</CardTitle>
                <Link to="/provider/bookings">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{booking.eventName}</p>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span>{new Date(booking.date).toLocaleDateString()}</span>
                        <span>{booking.attendees} attendees</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-success">+${booking.revenue}</p>
                      <p className="text-xs text-muted-foreground">revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/provider/add-venue">
                <Button variant="outline" className="w-full h-20 flex flex-col">
                  <Building2 className="h-6 w-6 mb-2" />
                  Add New Venue
                </Button>
              </Link>
              <Link to="/provider/add-event">
                <Button variant="outline" className="w-full h-20 flex flex-col">
                  <Calendar className="h-6 w-6 mb-2" />
                  Create Event
                </Button>
              </Link>
              <Link to="/provider/analytics">
                <Button variant="outline" className="w-full h-20 flex flex-col">
                  <BarChart3 className="h-6 w-6 mb-2" />
                  View Analytics
                </Button>
              </Link>
              <Link to="/provider/earnings">
                <Button variant="outline" className="w-full h-20 flex flex-col">
                  <TrendingUp className="h-6 w-6 mb-2" />
                  Earnings Report
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProviderDashboard;