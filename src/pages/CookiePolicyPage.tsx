import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
          <p className="text-lg text-muted-foreground">
            Learn about how BookIt uses cookies to enhance your experience
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                BookIt uses cookies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Remember your login information and preferences</li>
                <li>Provide personalized content and recommendations</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our services and user experience</li>
                <li>Enable social media features</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are necessary for the website to function properly. They enable core functionality 
                  such as security, network management, and accessibility.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Performance Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies collect information about how you use our website, such as which pages you visit 
                  most often. This data helps us improve our website's performance.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Functionality Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies allow our website to remember choices you make and provide enhanced features 
                  and personal content.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Marketing Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are used to deliver advertisements more relevant to you and your interests. 
                  They also help limit the number of times you see an advertisement.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Managing Your Cookie Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You have the right to decide whether to accept or reject cookies. You can manage your cookie 
                preferences through your browser settings or our cookie consent banner.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Browser Settings:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                  <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
                  <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
                  <li>Safari: Preferences → Privacy → Cookies and website data</li>
                  <li>Edge: Settings → Site permissions → Cookies and site data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We may use third-party services that set cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Google Analytics:</strong> To understand how users interact with our website</li>
                <li><strong>Social Media Platforms:</strong> To enable social sharing and login features</li>
                <li><strong>Payment Processors:</strong> To handle secure payment transactions</li>
                <li><strong>Advertising Partners:</strong> To show relevant advertisements</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about our Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> hellotobookit@gmail.com</p>
                <p><strong>Address:</strong> Bole Medhanialem Lingo Tower, 11th Floor, Addis Ababa, Ethiopia</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;