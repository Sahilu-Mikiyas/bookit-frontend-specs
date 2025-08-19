import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BookingCard from '@/components/cards/BookingCard';
import { getBookingsWithDetails } from '@/data/mockData';
import { useAuth } from '@/context/AuthContext';
import { Calendar, BookOpen, AlertCircle } from 'lucide-react';

const MyBookingsPage: React.FC = () => {
  const { user } = useAuth();
  const allBookings = getBookingsWithDetails();
  const userBookings = allBookings.filter(booking => booking.userId === user?.id);

  const pendingBookings = userBookings.filter(b => b.status === 'pending');
  const approvedBookings = userBookings.filter(b => b.status === 'approved');
  const rejectedBookings = userBookings.filter(b => b.status === 'rejected');

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">Please log in to view your bookings.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Bookings</h1>
          <p className="text-muted-foreground">Track and manage your event bookings</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
                  <p className="text-2xl font-bold">{userBookings.length}</p>
                </div>
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Approved</p>
                  <p className="text-2xl font-bold text-success">{approvedBookings.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-warning">{pendingBookings.length}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {userBookings.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold mb-2">No bookings yet</h3>
              <p className="text-muted-foreground mb-4">
                You haven't made any event bookings. Browse our events to get started!
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Pending Bookings */}
            {pendingBookings.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  Pending Approval ({pendingBookings.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pendingBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} showActions={false} />
                  ))}
                </div>
              </div>
            )}

            {/* Approved Bookings */}
            {approvedBookings.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-success" />
                  Approved Bookings ({approvedBookings.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {approvedBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} showActions={false} />
                  ))}
                </div>
              </div>
            )}

            {/* Rejected Bookings */}
            {rejectedBookings.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  Rejected Bookings ({rejectedBookings.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rejectedBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} showActions={false} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;