import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  Eye, 
  Database, 
  Lock, 
  Users, 
  Globe, 
  Settings,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'December 1, 2024';

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: Shield,
      content: [
        'BookIt Inc. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by BookIt.',
        'This policy applies to our website, mobile applications, and other online services (collectively, the "Service").',
        'By using our Service, you agree to the collection and use of information in accordance with this policy.'
      ]
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal Information: Name, email address, phone number, and payment information when you create an account or make a booking.',
        'Profile Information: Profile picture, preferences, and other information you choose to provide.',
        'Booking Information: Details about venues, events, dates, and services you book through our platform.',
        'Communication Data: Messages, reviews, and other communications you send through our platform.',
        'Technical Information: IP address, browser type, device information, and usage patterns.',
        'Location Data: Approximate location to show nearby venues and events (with your permission).'
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Settings,
      content: [
        'Provide and maintain our Service, including processing bookings and payments.',
        'Communicate with you about bookings, account updates, and customer support.',
        'Personalize your experience and recommend relevant venues and events.',
        'Process payments and prevent fraudulent transactions.',
        'Improve our Service through analytics and user feedback.',
        'Send marketing communications (with your consent) about new features and offers.',
        'Comply with legal obligations and resolve disputes.'
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Users,
      content: [
        'Venue Partners: We share booking details with venue and event providers to fulfill your reservations.',
        'Service Providers: Third-party companies that help us operate our Service (payment processors, email services, etc.).',
        'Business Transfers: Information may be transferred if we are acquired by or merged with another company.',
        'Legal Requirements: We may disclose information when required by law or to protect our rights and safety.',
        'Aggregated Data: We may share anonymized, aggregated data that cannot identify individual users.',
        'We do not sell your personal information to third parties for marketing purposes.'
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: [
        'We implement appropriate technical and organizational measures to protect your personal information.',
        'All payment information is encrypted using industry-standard SSL/TLS protocols.',
        'Access to personal data is restricted to authorized personnel only.',
        'We regularly update our security measures to address emerging threats.',
        'Despite our efforts, no method of transmission over the internet is 100% secure.',
        'Please report any suspected security breaches to our support team immediately.'
      ]
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: Database,
      content: [
        'We retain your personal information only as long as necessary to provide our Service.',
        'Account information is retained until you delete your account.',
        'Booking history is retained for legal and business purposes (typically 7 years).',
        'Communication records are retained according to our business needs and legal requirements.',
        'You can request deletion of your data by contacting our support team.',
        'Some information may be retained in anonymized form for analytics purposes.'
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      icon: Eye,
      content: [
        'Access: You can request a copy of the personal information we have about you.',
        'Correction: You can update or correct your personal information through your account settings.',
        'Deletion: You can request deletion of your personal information (subject to legal requirements).',
        'Portability: You can request a machine-readable copy of your personal information.',
        'Objection: You can object to certain uses of your information, such as marketing communications.',
        'Withdraw Consent: You can withdraw consent for optional data processing at any time.'
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      icon: Globe,
      content: [
        'We use cookies and similar technologies to enhance your experience and analyze usage.',
        'Essential cookies are necessary for the Service to function properly.',
        'Analytics cookies help us understand how users interact with our Service.',
        'Marketing cookies may be used to show you relevant advertisements.',
        'You can control cookie preferences through your browser settings.',
        'Disabling certain cookies may limit your ability to use some features of our Service.'
      ]
    },
    {
      id: 'third-party',
      title: 'Third-Party Services',
      icon: Globe,
      content: [
        'Our Service may contain links to third-party websites and services.',
        'We are not responsible for the privacy practices of these third parties.',
        'We recommend reviewing the privacy policies of any third-party services you use.',
        'Some third-party services (like payment processors) have their own privacy policies.',
        'We may integrate with social media platforms and other services with your consent.'
      ]
    },
    {
      id: 'international',
      title: 'International Data Transfers',
      icon: Globe,
      content: [
        'Your information may be transferred to and processed in countries other than your own.',
        'We ensure appropriate safeguards are in place for international data transfers.',
        'By using our Service, you consent to the transfer of your information as described.',
        'We comply with applicable data protection laws regarding international transfers.'
      ]
    },
    {
      id: 'children',
      title: 'Children\'s Privacy',
      icon: Shield,
      content: [
        'Our Service is not intended for children under 13 years of age.',
        'We do not knowingly collect personal information from children under 13.',
        'If you are a parent and believe your child has provided us with personal information, please contact us.',
        'We will take steps to remove such information and terminate the child\'s account.'
      ]
    },
    {
      id: 'changes',
      title: 'Changes to This Privacy Policy',
      icon: Settings,
      content: [
        'We may update this Privacy Policy from time to time.',
        'Material changes will be communicated via email or prominent notices on our Service.',
        'The "Last Updated" date at the top of this policy indicates when it was last revised.',
        'Your continued use of our Service after changes become effective constitutes acceptance.',
        'We encourage you to review this Privacy Policy periodically.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Learn how we collect, use, and protect your personal information
          </p>
          <Badge variant="secondary" className="text-sm">
            Last updated: {lastUpdated}
          </Badge>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-2">Your Privacy Matters</h3>
            <p className="text-sm text-muted-foreground">
              At BookIt, we're committed to protecting your privacy and being transparent about how we handle your data. 
              This Privacy Policy explains our practices in plain language so you can make informed decisions about using our service.
            </p>
          </CardContent>
        </Card>

        {/* Privacy Sections */}
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

        {/* Data Protection Rights Summary */}
        <Card className="mt-12 bg-success/5 border-success/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-success" />
              Your Data Protection Rights Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p><strong>✓ Right to Access:</strong> Request copies of your data</p>
                <p><strong>✓ Right to Correct:</strong> Update incorrect information</p>
                <p><strong>✓ Right to Delete:</strong> Request data removal</p>
              </div>
              <div className="space-y-2">
                <p><strong>✓ Right to Portability:</strong> Export your data</p>
                <p><strong>✓ Right to Object:</strong> Opt out of certain processing</p>
                <p><strong>✓ Right to Withdraw Consent:</strong> Change your mind anytime</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8 bg-muted/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Privacy Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                If you have questions about this Privacy Policy or want to exercise your privacy rights, please contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>privacy@bookit.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+251909312671</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary mt-0.5" />
                    <span>Bole Edna Mall<br />Addis Ababa, Ethiopia</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <p className="text-xs text-muted-foreground">
                We typically respond to privacy requests within 30 days. For urgent matters, 
                please mark your communication as "Privacy Request - Urgent".
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPage;