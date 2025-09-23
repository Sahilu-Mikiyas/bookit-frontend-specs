import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { 
  Calendar, 
  MapPin, 
  User, 
  LogOut, 
  Settings, 
  Home,
  BookOpen
} from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout, role } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">BookIt</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'} 
                size="sm"
                className="flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Button>
            </Link>
            
            <Link to="/venues">
              <Button 
                variant={isActive('/venues') ? 'default' : 'ghost'} 
                size="sm"
                className="flex items-center space-x-2"
              >
                <MapPin className="h-4 w-4" />
                <span>Venues</span>
              </Button>
            </Link>
            
            <Link to="/events">
              <Button 
                variant={isActive('/events') ? 'default' : 'ghost'} 
                size="sm"
                className="flex items-center space-x-2"
              >
                <Calendar className="h-4 w-4" />
                <span>Events</span>
              </Button>
            </Link>

            {/* User-specific links */}
            {isAuthenticated && role === 'user' && (
              <Link to="/my-bookings">
                <Button 
                  variant={isActive('/my-bookings') ? 'default' : 'ghost'} 
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>My Bookings</span>
                </Button>
              </Link>
            )}

            {/* Admin-specific links */}
            {isAuthenticated && role === 'admin' && (
              <Link to="/admin">
                <Button 
                  variant={isActive('/admin') ? 'default' : 'ghost'} 
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Settings className="h-4 w-4" />
                  <span>Admin</span>
                </Button>
              </Link>
            )}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Link to="/profile">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">{user?.name}</span>
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={logout}
                  className="flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="default" size="sm">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;