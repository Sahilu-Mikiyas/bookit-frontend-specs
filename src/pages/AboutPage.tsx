import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  MapPin, 
  Calendar, 
  Star,
  Target,
  Heart,
  Globe,
  Award,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: MapPin, label: 'Venues Listed', value: '1,000+' },
    { icon: Calendar, label: 'Events Hosted', value: '10,000+' },
    { icon: Users, label: 'Happy Customers', value: '50,000+' },
    { icon: Star, label: 'Average Rating', value: '4.9' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from venue curation to customer support.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. Their success is our success.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We build trust through transparency, security, and reliable service delivery.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We continuously innovate to provide cutting-edge solutions for event booking.'
    }
  ];

  const team = [
    {
      name: 'Mikiyas Sahilu',
      role: 'CEO & Founder',
      bio: '10+ years in event management and technology. Previously led product at major hospitality platforms.',
      image: '👨‍💼'
    },
    {
      name: 'Adam Tadesse',
      role: 'CTO',
      bio: 'Former senior engineer at Google. Expert in scalable platform architecture and user experience.',
      image: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      bio: 'Event industry veteran with deep relationships across venue networks and service providers.',
      image: '👩‍💼'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'BookIt was founded with a vision to simplify event booking and venue discovery.'
    },
    {
      year: '2021',
      title: '100 Venues',
      description: 'Reached our first major milestone with 100 premium venues on the platform.'
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: 'Secured Series A funding to expand nationwide and enhance our technology platform.'
    },
    {
      year: '2023',
      title: '1,000+ Venues',
      description: 'Expanded to over 1,000 venues across major cities with enterprise partnerships.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Launched international operations and AI-powered venue recommendations.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">About BookIt</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're revolutionizing how people discover, book, and experience venues and events. 
              Our mission is to make exceptional event planning accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="px-8">Get In Touch</Button>
              </Link>
              <Link to="/venues">
                <Button variant="outline" size="lg" className="px-8">Explore Venues</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto text-primary mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To democratize access to exceptional venues and events by creating the world's most 
                trusted and comprehensive booking platform. We believe every event, from intimate 
                gatherings to grand celebrations, deserves the perfect venue.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We're building bridges between venue owners who want to share their spaces and 
                event planners who need the perfect location to bring their visions to life.
              </p>
              <div className="space-y-3">
                {[
                  'Curated selection of premium venues',
                  'Transparent pricing with no hidden fees',
                  'Seamless booking experience',
                  '24/7 customer support'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-12 text-center">
              <div className="text-6xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in venue discovery and event booking, 
                making exceptional experiences accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide every decision we make and every interaction we have with our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our passionate team combines deep industry expertise with innovative technology to serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From startup to industry leader - here's how we've grown
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="default" className="text-lg px-3 py-1 font-bold">
                      {milestone.year}
                    </Badge>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Awards & Recognition</h2>
            <p className="text-lg text-muted-foreground">
              Proud to be recognized by industry leaders and customers alike
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                award: 'Best Event Tech Platform 2024',
                organization: 'Event Industry Awards',
                icon: Award
              },
              {
                award: 'Fastest Growing Startup',
                organization: 'Tech Breakthrough Awards',
                icon: TrendingUp
              },
              {
                award: 'Customer Choice Award',
                organization: 'Event Planning Magazine',
                icon: Star
              }
            ].map((recognition, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <recognition.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{recognition.award}</h3>
                  <p className="text-sm text-muted-foreground">{recognition.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're planning your next event or looking to list your venue, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="secondary" size="lg" className="px-8 bg-white text-foreground hover:bg-white/90">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;