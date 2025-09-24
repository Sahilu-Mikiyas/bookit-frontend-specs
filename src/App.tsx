import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import Layout from "@/components/layout/Layout";
import HomePage from "./pages/HomePage";
import VenuesPage from "./pages/VenuesPage";
import EventsPage from "./pages/EventsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import MyBookingsPage from "./pages/MyBookingsPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLoginPage from "./pages/AdminLoginPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import ExplorePage from "./pages/ExplorePage";
import VenueDetailPage from "./pages/VenueDetailPage";
import EventDetailPage from "./pages/EventDetailPage";
import BookingPage from "./pages/BookingPage";
import UserDashboard from "./pages/UserDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import AddVenuePage from "./pages/AddVenuePage";
import HelpPage from "./pages/HelpPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import BookingGuidePage from "./pages/BookingGuidePage";
import AboutPage from "./pages/AboutPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import ContactSupportPage from "./pages/ContactSupportPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import PartnerApplicationPage from "./pages/PartnerApplicationPage";
import CreateEventPage from "./pages/CreateEventPage";
import CreateVenuePage from "./pages/CreateVenuePage";
import ProtectedRoute from "@/components/ProtectedRoute";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/venues" element={<VenuesPage />} />
              <Route path="/venue/:id" element={<VenueDetailPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/event/:id" element={<EventDetailPage />} />
              <Route path="/book/:eventId" element={<BookingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/admin-login" element={<AdminLoginPage />} />
              <Route path="/reset-password" element={<PasswordResetPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/my-bookings" element={<MyBookingsPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/provider/dashboard" element={<ProviderDashboard />} />
              <Route path="/provider/add-venue" element={<AddVenuePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
              <Route path="/booking-guide" element={<BookingGuidePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/contact-support" element={<ContactSupportPage />} />
              <Route path="/booking-guide" element={<BookingGuidePage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/partner-application" element={<PartnerApplicationPage />} />
              <Route path="/create-event" element={
                <ProtectedRoute requirePartner={true}>
                  <CreateEventPage />
                </ProtectedRoute>
              } />
              <Route path="/create-venue" element={
                <ProtectedRoute requirePartner={true}>
                  <CreateVenuePage />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
