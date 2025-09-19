import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Calendar, 
  CreditCard, 
  CheckCircle, 
  Users, 
  MapPin, 
  Clock,
  Shield,
  HeadphonesIcon,
  Star,
  ArrowRight
} from 'lucide-react';

const BookingGuidePage: React.FC = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: 'Browse & Discover',
      description: 'Explore our curated collection of premium venues and exciting events',
      details: [
        'Use advanced filters to find venues by location, capacity, and amenities',
        'Browse events by date, category, and popularity',
        'View detailed photos, descriptions, and reviews',
        'Compare prices and availability in real-time'
      ]
    },
    {
      step: 2,
      icon: Calendar,
      title: 'Select Date & Time',
      description: 'Choose your preferred date and time slot with real-time availability',
      details: [
        'Interactive calendar shows available dates',
        'Select specific time slots for venue bookings',
        'View capacity and pricing for different packages',
        'Add special requirements or requests'
      ]
    },
    {
      step: 3,
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Complete your booking with our secure payment system',
      details: [
        'Multiple payment options: Credit cards, PayPal, and more',
        'Apply promo codes and discounts',
        'Review booking details before payment',
        '256-bit SSL encryption for payment security'
      ]
    },
    {
      step: 4,
      icon: CheckCircle,
      title: 'Confirmation & Enjoy',
      description: 'Receive instant confirmation and enjoy your event',
      details: [
        'Instant email confirmation with booking details',
        'Download tickets or booking confirmations',
        'Access venue contact information and directions',
        '24/7 customer support for any questions'
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Your personal and payment information is protected with industry-standard encryption'
    },
    {
      icon: Clock,
      title: 'Instant Confirmation',
      description: 'Get immediate confirmation for your bookings with real-time availability updates'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Our dedicated customer support team is available around the clock to assist you'
    },
    {
      icon: Star,
      title: 'Quality Guaranteed',
      description: 'All venues and events are carefully vetted to ensure exceptional experiences'
    }
  ];

  const tips = [
    {
      title: 'Book Early',
      description: 'Popular venues and events fill up quickly, especially during peak seasons. Book as early as possible to secure your preferred dates.'
    },
    {
      title: 'Read Reviews',
      description: 'Check reviews from previous customers to get insights about the venue quality, service, and overall experience.'
    },
    {
      title: 'Understand Policies',
      description: 'Review cancellation policies, payment terms, and any additional fees before confirming your booking.'
    },
    {
      title: 'Contact Venues',
      description: 'For special requirements or large groups, don\'t hesitate to contact the venue directly for personalized assistance.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">How to Book with BookIt</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Follow our simple 4-step process to book the perfect venue or event for your needs. 
            From discovery to confirmation, we make booking effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/venues">
              <Button size="lg" className="px-8">
                Start Booking Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" size="lg" className="px-8">
                Browse Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Simple Booking Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process makes it easy to find and book the perfect venue or event
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.step} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">Step {step.step}</Badge>
                          <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                    <step.icon className="h-24 w-24 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose BookIt?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best booking experience with these key features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Pro Tips for Better Bookings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Make the most of your BookIt experience with these helpful tips
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common booking questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How far in advance can I book?',
                answer: 'You can book venues and events up to 12 months in advance. For popular venues, we recommend booking as early as possible.'
              },
              {
                question: 'What is your cancellation policy?',
                answer: 'Cancellation policies vary by venue and event. Most bookings can be cancelled up to 48-72 hours in advance for a full refund. Check specific terms during booking.'
              },
              {
                question: 'Are there any hidden fees?',
                answer: 'No hidden fees! All costs including taxes and service fees are clearly displayed before you complete your booking.'
              },
              {
                question: 'Can I modify my booking after confirmation?',
                answer: 'Yes, you can modify your booking through your dashboard or by contacting customer support. Some changes may be subject to availability and additional fees.'
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Booking?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust BookIt for their event booking needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="secondary" size="lg" className="px-8 bg-white text-foreground hover:bg-white/90">
                Create Account
              </Button>
            </Link>
            <Link to="/venues">
              <Button variant="outline" size="lg" className="px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Browse Venues
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingGuidePage;