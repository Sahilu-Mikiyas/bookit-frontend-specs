import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  HelpCircle, 
  Book, 
  Building2, 
  CreditCard, 
  Users,
  MessageSquare,
  Phone,
  Mail
} from 'lucide-react';

const HelpPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      id: 'booking',
      title: 'Booking & Events',
      icon: Book,
      questions: [
        {
          question: 'How do I book an event or venue?',
          answer: 'To book an event or venue, browse our listings on the Explore page, select the venue/event you want, and click "Book Now". You\'ll need to create an account and provide your booking details. Most bookings require approval from the venue provider.'
        },
        {
          question: 'Can I cancel my booking?',
          answer: 'Cancellation policies vary by venue and event. Check the specific terms during booking. Generally, you can cancel up to 24-48 hours before the event for a full refund. Contact support if you need to cancel.'
        },
        {
          question: 'What happens if my booking is rejected?',
          answer: 'If your booking is rejected, you\'ll receive a notification with the reason. You won\'t be charged, and you can try booking alternative venues or dates. Some providers may suggest alternative options.'
        },
        {
          question: 'How do I modify my existing booking?',
          answer: 'To modify a booking, go to "My Bookings" in your dashboard and select the booking you want to change. Depending on the venue\'s policy, you may be able to change dates, number of attendees, or add special requests.'
        }
      ]
    },
    {
      id: 'venues',
      title: 'Venues & Listings',
      icon: Building2,
      questions: [
        {
          question: 'How do I list my venue on BookIt?',
          answer: 'To become a provider, register as a provider account, complete the verification process, and submit your venue details including photos, pricing, and legal documentation. All listings are reviewed before going live.'
        },
        {
          question: 'What are the requirements for listing a venue?',
          answer: 'You need valid business licenses, insurance certificates, fire safety compliance, and proper occupancy permits. Your venue must meet local safety standards and have clear pricing and availability.'
        },
        {
          question: 'How long does venue approval take?',
          answer: 'Venue approval typically takes 24-48 hours for basic venues and up to 5 business days for complex listings. You\'ll receive email updates throughout the review process.'
        },
        {
          question: 'Can I update my venue information after approval?',
          answer: 'Yes, you can update most venue details through your provider dashboard. Major changes like capacity or location may require re-approval. Photos and descriptions can be updated immediately.'
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments & Pricing',
      icon: CreditCard,
      questions: [
        {
          question: 'What payment methods are accepted?',
          answer: 'We accept all major credit cards, PayPal, and bank transfers. Payments are processed securely through our payment partners. You\'ll only be charged after your booking is confirmed.'
        },
        {
          question: 'When am I charged for my booking?',
          answer: 'You\'re charged when the venue provider approves your booking. For events, you may need to pay immediately upon registration. Refund policies vary by venue and event type.'
        },
        {
          question: 'How do providers receive payments?',
          answer: 'Providers receive payments 24-48 hours after their event concludes successfully. Payments are transferred to your registered bank account minus our platform fee.'
        },
        {
          question: 'What are BookIt\'s platform fees?',
          answer: 'BookIt charges a 5% platform fee for successful bookings. This covers payment processing, customer support, and platform maintenance. Fees are deducted from provider payments automatically.'
        }
      ]
    },
    {
      id: 'account',
      title: 'Account & Profile',
      icon: Users,
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'Click "Sign Up" in the top right corner, provide your email and basic information, and verify your email address. You can then choose between booking events or listing venues as a provider.'
        },
        {
          question: 'I forgot my password. How do I reset it?',
          answer: 'Click "Forgot Password" on the login page, enter your email address, and we\'ll send you reset instructions. The reset link is valid for 24 hours.'
        },
        {
          question: 'How do I switch between booking and providing?',
          answer: 'You can switch roles anytime from your dashboard. However, becoming a provider requires additional verification and documentation. Both roles use the same account.'
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes, you can delete your account from your profile settings. Note that this will cancel all active bookings and remove all your data permanently. Contact support if you need assistance.'
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            How can we help you?
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Find answers to frequently asked questions or get in touch with our support team
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 text-center"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get instant help from our support team
              </p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Send us a detailed message
              </p>
              <Button variant="outline" className="w-full">
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Call us during business hours
              </p>
              <Button variant="outline" className="w-full">
                1-800-BOOK-IT
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Browse by category or search for specific topics
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {faqCategories.map(category => {
              const Icon = category.icon;
              const hasResults = filteredFAQs.find(c => c.id === category.id);
              return (
                <Badge
                  key={category.id}
                  variant={hasResults ? "default" : "secondary"}
                  className="flex items-center gap-2 px-4 py-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.title}
                  {hasResults && (
                    <span className="bg-background/20 text-xs px-2 py-1 rounded-full">
                      {hasResults.questions.length}
                    </span>
                  )}
                </Badge>
              );
            })}
          </div>

          {/* FAQ Content */}
          <div className="space-y-6">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map(category => {
                const Icon = category.icon;
                return (
                  <Card key={category.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon className="h-5 w-5" />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="space-y-2">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`${category.id}-${index}`}>
                            <AccordionTrigger className="text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <HelpCircle className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any FAQs matching your search. Try different keywords or contact support.
                  </p>
                  <Button onClick={() => setSearchTerm('')}>
                    Clear Search
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Contact Banner */}
        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Still need help?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                Contact Support
              </Button>
              <Button variant="outline">
                Visit Help Center
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelpPage;