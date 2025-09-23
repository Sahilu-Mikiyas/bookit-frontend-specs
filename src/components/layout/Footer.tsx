import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Calendar,
  Users,
  Building,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Venues', href: '/venues' },
    { label: 'Events', href: '/events' },
    { label: 'About Us', href: '/about' },
  ];

  const supportLinks = [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Support', href: '/contact-support' },
    { label: 'Booking Guide', href: '/booking-guide' },
    { label: 'FAQ', href: '/faq' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              Stay Connected with BookIt
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest venue updates, exclusive offers, and event planning tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button variant="default" className="shadow-md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <span className="text-xl font-display font-bold text-primary">BookIt</span>
              </Link>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your trusted partner for premium venue and event bookings. We connect you with the perfect spaces for unforgettable experiences.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <div className="font-medium text-foreground">BookIt Headquarters</div>
                    <div>Bole Medhanialem Lingo Tower</div>
                    <div>11th Floor, Addis Ababa</div>
                    <div>Ethiopia</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-foreground font-medium">+1 (555) 123-4567</div>
                    <div className="text-muted-foreground">24/7 Support Available</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-foreground font-medium">hellotobookit@gmail.com</div>
                    <div className="text-muted-foreground">Get in touch</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-foreground font-medium">Mon - Fri: 9:00 AM - 8:00 PM EST</div>
                    <div className="text-muted-foreground">Weekend: 10:00 AM - 6:00 PM EST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-lg font-semibold text-foreground mb-4 mt-8">Services</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Building className="h-4 w-4 text-primary" />
                  <span>Venue Rentals</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Event Planning</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Corporate Events</span>
                </li>
              </ul>
            </div>

            {/* Support & Help */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Support & Help</h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3 mb-8">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} BookIt. All rights reserved. Built with{' '}
              <Heart className="h-4 w-4 inline text-destructive fill-current" /> in Addis Ababa, Ethiopia.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>🔒 Secure Booking</span>
              <span>⚡ Instant Confirmation</span>
              <span>🌟 Trusted by 10K+ customers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;