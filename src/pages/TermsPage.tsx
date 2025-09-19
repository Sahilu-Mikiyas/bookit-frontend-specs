import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText, Calendar, Shield, CreditCard } from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'December 1, 2024';

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        'By accessing and using BookIt ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all visitors, users, and others who access or use the service.'
      ]
    },
    {
      id: 'definitions',
      title: 'Definitions',
      icon: FileText,
      content: [
        '"BookIt", "we", "us", or "our" refers to BookIt Inc. and our platform.',
        '"User", "you", or "your" refers to any individual or entity using our service.',
        '"Venue" refers to any physical location available for booking through our platform.',
        '"Event" refers to any scheduled activity or gathering listed on our platform.',
        '"Booking" refers to a confirmed reservation made through our platform.'
      ]
    },
    {
      id: 'user-accounts',
      title: 'User Accounts',
      icon: Shield,
      content: [
        'You must create an account to access certain features of our service.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You agree to provide accurate, current, and complete information during registration.',
        'You must notify us immediately of any unauthorized use of your account.',
        'We reserve the right to suspend or terminate accounts that violate these terms.'
      ]
    },
    {
      id: 'booking-terms',
      title: 'Booking Terms',
      icon: Calendar,
      content: [
        'All bookings are subject to availability and venue/event provider confirmation.',
        'Booking confirmations are sent via email and serve as your receipt.',
        'You agree to arrive at the scheduled time and comply with venue rules.',
        'No-shows may result in forfeiture of payment and booking privileges.',
        'Special requests are not guaranteed and subject to venue availability.'
      ]
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms',
      icon: CreditCard,
      content: [
        'Payment is required at the time of booking unless otherwise specified.',
        'All prices are displayed in USD and include applicable taxes.',
        'We accept major credit cards, PayPal, and other payment methods as available.',
        'Payment processing is handled by secure third-party providers.',
        'Additional fees may apply for premium services or last-minute bookings.'
      ]
    },
    {
      id: 'cancellation',
      title: 'Cancellation & Refund Policy',
      icon: Calendar,
      content: [
        'Cancellation policies vary by venue and event provider.',
        'Free cancellation is typically available 24-48 hours before the booking.',
        'Refunds are processed within 5-10 business days to the original payment method.',
        'Service fees may be non-refundable depending on the cancellation timing.',
        'Force majeure events may qualify for full refunds at our discretion.'
      ]
    },
    {
      id: 'user-conduct',
      title: 'User Conduct',
      icon: Shield,
      content: [
        'You agree to use our service only for lawful purposes.',
        'Prohibited activities include fraud, harassment, spam, or illegal content.',
        'You may not interfere with or disrupt the service or servers.',
        'Respect venue property and other users at all times.',
        'Report any issues or violations to our customer support team.'
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: Shield,
      content: [
        'BookIt owns all rights to our platform, including trademarks and copyrights.',
        'Users retain ownership of content they upload, but grant us usage rights.',
        'You may not reproduce, distribute, or create derivative works without permission.',
        'Venue images and descriptions are used with permission from providers.',
        'DMCA takedown requests should be sent to our designated agent.'
      ]
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: Shield,
      content: [
        'BookIt acts as a platform connecting users with venue and event providers.',
        'We are not responsible for the quality, safety, or legality of venues/events.',
        'Our liability is limited to the amount paid for the specific booking.',
        'We disclaim warranties of merchantability and fitness for a particular purpose.',
        'Users participate in events and visit venues at their own risk.'
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy & Data Protection',
      icon: Shield,
      content: [
        'Your privacy is important to us. Please review our Privacy Policy.',
        'We collect and use personal information as described in our Privacy Policy.',
        'We implement security measures to protect your personal information.',
        'We may share information with venue providers to fulfill your bookings.',
        'You have rights regarding your personal data as described in our Privacy Policy.'
      ]
    },
    {
      id: 'modifications',
      title: 'Modifications to Terms',
      icon: FileText,
      content: [
        'We reserve the right to modify these terms at any time.',
        'Material changes will be communicated via email or platform notifications.',
        'Continued use of the service constitutes acceptance of modified terms.',
        'You should review these terms periodically for updates.',
        'If you disagree with changes, you may discontinue using our service.'
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: Shield,
      content: [
        'Either party may terminate this agreement at any time.',
        'We may suspend or terminate accounts for violations of these terms.',
        'Upon termination, your right to use the service ceases immediately.',
        'Certain provisions will survive termination, including liability limitations.',
        'You remain responsible for any outstanding payments or obligations.'
      ]
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: FileText,
      content: [
        'These terms are governed by the laws of the State of New York.',
        'Any disputes will be resolved in the courts of New York County, NY.',
        'You waive any objection to venue or personal jurisdiction in these courts.',
        'If any provision is invalid, the remainder of these terms remain in effect.',
        'These terms constitute the entire agreement between you and BookIt.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Please read these terms carefully before using BookIt
          </p>
          <Badge variant="secondary" className="text-sm">
            Last updated: {lastUpdated}
          </Badge>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-2">Important Notice</h3>
            <p className="text-sm text-muted-foreground">
              These Terms of Service ("Terms") govern your use of BookIt's venue and event booking platform. 
              By using our service, you agree to these terms. If you don't agree with any part of these terms, 
              you may not use our service.
            </p>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={section.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <section.icon className="h-5 w-5 text-primary" />
                  <span>{index + 1}. {section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <Card className="mt-12 bg-muted/30">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>For questions about these Terms of Service, please contact us:</strong>
              </p>
              <p>Email: legal@bookit.com</p>
              <p>Phone: +251909312671</p>
              <p>Address: Bole Edna Mall, Addis Ababa, Ethiopia</p>
              <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM (EAT)</p>
            </div>
          </CardContent>
        </Card>

        {/* Acknowledgment */}
        <Card className="mt-8 border-success/20 bg-success/5">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-foreground mb-2">Acknowledgment</h3>
            <p className="text-sm text-muted-foreground">
              By using BookIt, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
              These terms are effective immediately upon your first use of our platform.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsPage;