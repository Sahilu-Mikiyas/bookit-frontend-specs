import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { ArrowLeft, Building, MapPin, Users, DollarSign, Star, Upload, Wifi } from 'lucide-react';

const CreateVenuePage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    location: '',
    address: '',
    capacity: '',
    pricePerHour: '',
    pricePerDay: '',
    featured: false,
    amenities: [] as string[],
    policies: '',
  });

  const categories = [
    'Conference Hall', 'Wedding Venue', 'Party Hall', 'Corporate Office',
    'Restaurant', 'Hotel Ballroom', 'Outdoor Space', 'Cultural Center',
    'Sports Facility', 'Exhibition Center'
  ];

  const amenityOptions = [
    'WiFi', 'Parking', 'Audio/Visual Equipment', 'Catering Kitchen',
    'Air Conditioning', 'Stage/Platform', 'Dance Floor', 'Security',
    'Decoration Services', 'Photography Area', 'Bridal Suite', 'Bar Area',
    'Outdoor Space', 'Accessibility', 'Live Streaming Setup', 'Sound System'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Venue created successfully! It will be reviewed and published within 24 hours.');
    navigate('/venues');
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      amenities: checked
        ? [...prev.amenities, amenity]
        : prev.amenities.filter(a => a !== amenity)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-foreground mb-2">List Your Venue</h1>
          <p className="text-lg text-muted-foreground">
            Share your venue with event organizers and grow your business
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Venue Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Venue Name *
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Enter venue name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Description *
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  placeholder="Describe your venue, its unique features, atmosphere..."
                  rows={4}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Venue Category *
                </label>
                <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select venue category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Location Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    City/Area *
                  </label>
                  <Input
                    value={formData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    placeholder="e.g., Addis Ababa, Bole"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Address *
                  </label>
                  <Input
                    value={formData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    placeholder="Complete address with landmarks"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Capacity & Pricing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Capacity & Pricing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Maximum Capacity *
                  </label>
                  <Input
                    type="number"
                    value={formData.capacity}
                    onChange={(e) => handleChange('capacity', e.target.value)}
                    placeholder="Number of guests"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Price per Hour (ETB) *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      value={formData.pricePerHour}
                      onChange={(e) => handleChange('pricePerHour', e.target.value)}
                      placeholder="0.00"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Price per Day (ETB)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      value={formData.pricePerDay}
                      onChange={(e) => handleChange('pricePerDay', e.target.value)}
                      placeholder="0.00"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Amenities & Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5" />
                Amenities & Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenityOptions.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox
                      id={`amenity-${amenity}`}
                      checked={formData.amenities.includes(amenity)}
                      onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                    />
                    <label
                      htmlFor={`amenity-${amenity}`}
                      className="text-sm text-foreground cursor-pointer"
                    >
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => handleChange('featured', checked as boolean)}
                />
                <label htmlFor="featured" className="text-sm text-foreground cursor-pointer">
                  Mark as Featured Venue (Premium listing - Additional fee may apply)
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Policies & Rules */}
          <Card>
            <CardHeader>
              <CardTitle>Venue Policies & Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Booking Policies & House Rules
                </label>
                <Textarea
                  value={formData.policies}
                  onChange={(e) => handleChange('policies', e.target.value)}
                  placeholder="Cancellation policy, deposit requirements, rules for guests, setup/cleanup policies..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Photos & Media */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Venue Photos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                <Upload className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h4 className="font-medium text-foreground mb-2">Upload Venue Photos</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  High-quality photos showcasing different areas and setups of your venue
                </p>
                <Button variant="outline" type="button">
                  Choose Photos
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Tip: Include photos of the main space, different setup options, amenities, and exterior views
              </p>
            </CardContent>
          </Card>

          {/* Submit Buttons */}
          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              List Venue
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateVenuePage;