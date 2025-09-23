import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Upload, FileText, Building, Award, Shield } from 'lucide-react';

const PartnerApplicationPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    experience: '',
    description: '',
    website: '',
    socialMedia: '',
    agreeTerms: false,
    agreeMarketing: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Partnership application submitted successfully! We will review your application and contact you within 5-7 business days.');
    navigate('/');
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Partner with BookIt</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our network of trusted venue providers and event organizers. 
            Grow your business with access to thousands of potential customers.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Building className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Expand Your Reach</h3>
              <p className="text-sm text-muted-foreground">
                Connect with customers actively searching for venues and events in your area.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Trusted Platform</h3>
              <p className="text-sm text-muted-foreground">
                Join a platform trusted by thousands with secure payments and verified reviews.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Secure Payments</h3>
              <p className="text-sm text-muted-foreground">
                Get paid securely with our integrated payment system and fraud protection.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle>Partnership Application Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Business Information */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Business Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business/Organization Name *
                    </label>
                    <Input
                      value={formData.businessName}
                      onChange={(e) => handleChange('businessName', e.target.value)}
                      placeholder="Your business name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Person *
                    </label>
                    <Input
                      value={formData.contactPerson}
                      onChange={(e) => handleChange('contactPerson', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="business@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+251 XXX XXX XXX"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Business Details */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Business Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Type *
                    </label>
                    <Select value={formData.businessType} onValueChange={(value) => handleChange('businessType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="venue-owner">Venue Owner/Manager</SelectItem>
                        <SelectItem value="event-organizer">Event Organizer</SelectItem>
                        <SelectItem value="hotel">Hotel/Resort</SelectItem>
                        <SelectItem value="restaurant">Restaurant/Catering</SelectItem>
                        <SelectItem value="wedding-planner">Wedding Planner</SelectItem>
                        <SelectItem value="corporate">Corporate Event Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Years of Experience *
                    </label>
                    <Select value={formData.experience} onValueChange={(value) => handleChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Description *
                    </label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      placeholder="Tell us about your business, services, and what makes you unique..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Website (Optional)
                      </label>
                      <Input
                        value={formData.website}
                        onChange={(e) => handleChange('website', e.target.value)}
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Social Media (Optional)
                      </label>
                      <Input
                        value={formData.socialMedia}
                        onChange={(e) => handleChange('socialMedia', e.target.value)}
                        placeholder="Facebook, Instagram, etc."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Required Documents</h3>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h4 className="font-medium text-foreground mb-2">Upload Business License</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Please upload your business license or registration certificate (PDF/JPG)
                    </p>
                    <Button variant="outline" type="button">
                      <FileText className="h-4 w-4 mr-2" />
                      Choose File
                    </Button>
                  </div>
                  
                  <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h4 className="font-medium text-foreground mb-2">Additional Documents (Optional)</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Portfolio, certifications, or other relevant documents (PDF/JPG)
                    </p>
                    <Button variant="outline" type="button">
                      <FileText className="h-4 w-4 mr-2" />
                      Choose Files
                    </Button>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleChange('agreeTerms', checked as boolean)}
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to BookIt's{' '}
                    <a href="/terms" className="text-primary underline">Terms of Service</a>{' '}
                    and{' '}
                    <a href="/privacy" className="text-primary underline">Privacy Policy</a>
                  </label>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="marketing"
                    checked={formData.agreeMarketing}
                    onCheckedChange={(checked) => handleChange('agreeMarketing', checked as boolean)}
                  />
                  <label htmlFor="marketing" className="text-sm text-muted-foreground">
                    I agree to receive marketing communications and partnership updates from BookIt
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button 
                  type="submit" 
                  className="flex-1"
                  disabled={!formData.agreeTerms}
                >
                  Submit Application
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnerApplicationPage;