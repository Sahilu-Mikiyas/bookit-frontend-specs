import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  CreditCard, 
  Lock, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  CheckCircle,
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'Ethiopia'
  });

  // Mock cart data
  const cartItems = [
    {
      id: '1',
      name: 'Grand Ballroom Booking',
      venue: 'Luxury Hotel Downtown',
      date: '2024-12-15',
      time: '18:00 - 23:00',
      price: 2500,
      quantity: 1
    },
    {
      id: '2',
      name: 'Jazz Night Experience',
      venue: 'Blue Note Lounge', 
      date: '2024-12-20',
      time: '20:00 - 22:00',
      price: 85,
      quantity: 2
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = subtotal * 0.1; // 10% discount applied
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + tax;

  const handlePayment = async () => {
    if (!billingInfo.firstName || !billingInfo.lastName || !billingInfo.email || !billingInfo.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      // Simulate creating booking and initializing Chapa payment
      const bookingData = {
        eventId: cartItems[0]?.id,
        tickets: cartItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: total,
        customerInfo: billingInfo,
        paymentMethod: 'chapa'
      };

      // In real implementation, this would call your backend
      console.log('Creating booking with Chapa payment...', bookingData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real app, backend would return Chapa payment URL
      const mockChapaResponse = {
        paymentUrl: 'https://checkout.chapa.co/checkout/payment/mock-payment-id',
        txRef: `bookit_${Date.now()}`,
        bookingId: 'booking_' + Date.now()
      };

      toast({
        title: "Redirecting to Payment",
        description: "Initializing Chapa payment gateway...",
      });

      // In real app, redirect to Chapa payment URL
      // window.location.href = mockChapaResponse.paymentUrl;
      
      // For demo, navigate to confirmation page
      setTimeout(() => {
        navigate('/booking-confirmation', { 
          state: { 
            bookingId: mockChapaResponse.bookingId,
            txRef: mockChapaResponse.txRef 
          } 
        });
      }, 1000);

    } catch (error) {
      toast({
        title: "Payment Error",
        description: "Failed to initialize payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/cart">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Secure Checkout</h1>
          <p className="text-muted-foreground">Complete your booking with Chapa secure payment</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      value={billingInfo.firstName}
                      onChange={(e) => setBillingInfo({...billingInfo, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      value={billingInfo.lastName}
                      onChange={(e) => setBillingInfo({...billingInfo, lastName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        className="pl-10" 
                        value={billingInfo.email}
                        onChange={(e) => setBillingInfo({...billingInfo, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="phone" 
                        placeholder="+251 9XX XXX XXX" 
                        className="pl-10" 
                        value={billingInfo.phone}
                        onChange={(e) => setBillingInfo({...billingInfo, phone: e.target.value})}
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border-2 border-primary bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded text-white text-sm flex items-center justify-center font-bold">
                      C
                    </div>
                    <div>
                      <div className="font-medium">Chapa Payment</div>
                      <div className="text-sm text-muted-foreground">Secure payment with Ethiopian Birr (ETB)</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-green-500" />
                  <span>Your payment information is secure and encrypted</span>
                </div>
              </CardContent>
            </Card>

            {/* Billing Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Billing Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input 
                      id="address" 
                      placeholder="Bole Edna Mall, Addis Ababa" 
                      value={billingInfo.address}
                      onChange={(e) => setBillingInfo({...billingInfo, address: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        placeholder="Addis Ababa" 
                        value={billingInfo.city}
                        onChange={(e) => setBillingInfo({...billingInfo, city: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input 
                        id="country" 
                        value={billingInfo.country}
                        onChange={(e) => setBillingInfo({...billingInfo, country: e.target.value})}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input 
                        id="zip" 
                        placeholder="1000" 
                        value={billingInfo.zipCode}
                        onChange={(e) => setBillingInfo({...billingInfo, zipCode: e.target.value})}
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.venue}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="h-3 w-3" />
                          <span className="text-xs text-muted-foreground">
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </div>
                        {item.quantity > 1 && (
                          <Badge variant="secondary" className="text-xs mt-1">
                            Qty: {item.quantity}
                          </Badge>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-success">
                    <span>Discount (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax & Fees</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg" 
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing Payment...
                    </div>
                  ) : (
                    <>
                      <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded text-white text-xs flex items-center justify-center font-bold mr-2">
                        C
                      </div>
                      Pay with Chapa (${total.toFixed(2)})
                    </>
                  )}
                </Button>

                <div className="text-center text-xs text-muted-foreground">
                  <p className="flex items-center justify-center gap-1 mb-2">
                    <ShieldCheck className="h-3 w-3 text-green-500" />
                    Secured by Chapa - Ethiopia's trusted payment gateway
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    <Lock className="h-3 w-3" />
                    Your payment information is secure and encrypted
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;