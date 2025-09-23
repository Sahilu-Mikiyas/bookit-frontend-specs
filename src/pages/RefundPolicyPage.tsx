import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';

const RefundPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Refund Policy</h1>
          <p className="text-lg text-muted-foreground">
            Understanding our refund and cancellation policies
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: January 1, 2024
          </p>
        </div>

        <Alert className="mb-8">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            This refund policy applies to all bookings made through the BookIt platform. 
            Additional venue-specific policies may also apply.
          </AlertDescription>
        </Alert>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>General Refund Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                At BookIt, we understand that plans can change. Our refund policy is designed to be fair 
                to both customers and venue providers while providing flexibility for unexpected circumstances.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cancellation Timeframes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">More than 30 days before event</h3>
                  <p className="text-muted-foreground">Full refund (100% of booking amount)</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">15-30 days before event</h3>
                  <p className="text-muted-foreground">75% refund of booking amount</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">7-14 days before event</h3>
                  <p className="text-muted-foreground">50% refund of booking amount</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Less than 7 days before event</h3>
                  <p className="text-muted-foreground">No refund (cancellation fee applies)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Circumstances</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We may provide exceptions to our standard refund policy in cases of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Natural disasters or extreme weather conditions</li>
                <li>Government-mandated lockdowns or restrictions</li>
                <li>Medical emergencies (with proper documentation)</li>
                <li>Venue cancellation or unavailability</li>
                <li>Force majeure events beyond customer control</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Each case will be reviewed individually, and documentation may be required.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How to Request a Refund</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Step 1: Submit Request</h4>
                <p className="text-muted-foreground text-sm">
                  Log into your BookIt account and navigate to "My Bookings" to submit a cancellation request.
                </p>
                
                <h4 className="font-medium text-foreground">Step 2: Review Process</h4>
                <p className="text-muted-foreground text-sm">
                  Our team will review your request within 2-3 business days and confirm eligibility.
                </p>
                
                <h4 className="font-medium text-foreground">Step 3: Refund Processing</h4>
                <p className="text-muted-foreground text-sm">
                  Approved refunds are processed within 5-7 business days to your original payment method.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Processing Fees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Please note that payment processing fees (typically 2.9% + $0.30 per transaction) 
                are non-refundable as these are charged by our payment processor.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Venue-Specific Policies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Some venues may have additional or different cancellation policies. These will be:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Clearly displayed on the venue's booking page</li>
                <li>Included in your booking confirmation email</li>
                <li>Supersede our general policy where more restrictive</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disputes and Appeals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you disagree with a refund decision, you may appeal by contacting our customer support team at 
                hellotobookit@gmail.com with additional information or documentation.
              </p>
              <p className="text-muted-foreground">
                Appeals must be submitted within 14 days of the original decision.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                For questions about refunds or to request a cancellation:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> hellotobookit@gmail.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> Bole Medhanialem Lingo Tower, 11th Floor, Addis Ababa, Ethiopia</p>
                <p><strong>Support Hours:</strong> Monday-Friday 9:00 AM - 8:00 PM EST</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;