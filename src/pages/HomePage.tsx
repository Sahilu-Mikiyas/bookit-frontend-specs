import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VenueCard from '@/components/cards/VenueCard';
import EventCard from '@/components/cards/EventCard';
import { mockVenues, getEventsWithVenues } from '@/data/mockData';
import { Search, Calendar, MapPin, Users, Star } from 'lucide-react';
import heroImage from '@/assets/hero-venue.jpg';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const featuredVenues = mockVenues.slice(0, 3);
  const upcomingEvents = getEventsWithVenues().slice(0, 3);

  const stats = [
    { icon: MapPin, label: 'Venues Available', value: '50+' },
    { icon: Calendar, label: 'Events This Month', value: '150+' },
    { icon: Users, label: 'Happy Customers', value: '1,000+' },
    { icon: Star, label: 'Average Rating', value: '4.9' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Book Perfect Venues for
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Memorable Events
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover premium venues and streamline your event booking process with our professional platform
          </p>
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search venues or events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/90 backdrop-blur-sm border-white/20"
              />
            </div>
            <Button variant="hero" size="hero" className="shadow-lg">
              Search
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/venues">
              <Button variant="secondary" size="lg" className="shadow-md">
                Browse Venues
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-md">
                View Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto text-primary mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Venues</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium venues perfect for any occasion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredVenues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/venues">
              <Button variant="default" size="lg">
                View All Venues
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join exciting events happening at our premium venues
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/events">
              <Button variant="default" size="lg">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">How BookIt Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, fast, and secure booking process designed for modern event planning
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Browse & Discover',
                description: 'Explore our curated collection of premium venues and exciting events tailored to your needs.',
                icon: Search
              },
              {
                step: '02', 
                title: 'Book Instantly',
                description: 'Secure your booking with our streamlined process. Real-time availability and instant confirmation.',
                icon: Calendar
              },
              {
                step: '03',
                title: 'Enjoy Your Event',
                description: 'Relax and enjoy your perfectly planned event with our dedicated support throughout your experience.',
                icon: Star
              }
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-display font-bold text-primary/20 mb-4">{item.step}</div>
                  <item.icon className="h-12 w-12 mx-auto text-primary mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by event planners and venue owners worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Event Coordinator',
                company: 'Luxe Events',
                testimonial: 'BookIt transformed how we handle venue bookings. The interface is intuitive and the booking process is seamless.',
                rating: 5
              },
              {
                name: 'Marcus Rodriguez',
                role: 'Wedding Planner',
                company: 'Dream Weddings Co.',
                testimonial: 'The variety of venues and the detailed information helps us find perfect matches for our clients every time.',
                rating: 5
              },
              {
                name: 'Emily Thompson',
                role: 'Corporate Events Manager',
                company: 'Tech Solutions Inc.',
                testimonial: 'Professional, reliable, and efficient. BookIt is our go-to platform for all corporate event venue needs.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.testimonial}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-muted to-muted/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Stay Updated with Premium Venues
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get exclusive access to new venues, special offers, and event planning tips
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1"
            />
            <Button variant="default" className="shadow-md">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Join 10,000+ event planners who trust BookIt for their venue needs
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Host Your Next Event?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their most important events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="secondary" size="lg" className="shadow-xl bg-white text-foreground hover:bg-white/90">
                Get Started Today
              </Button>
            </Link>
            <Link to="/venues">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-lg backdrop-blur-sm">
                Explore Venues
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;