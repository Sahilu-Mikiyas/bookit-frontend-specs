import { Venue } from '@/types/venue';
import { Event } from '@/types/event';
import { Booking } from '@/types/booking';

// Import venue images
import conferenceCenter from '@/assets/venues/conference-center.jpg';
import creativeStudio from '@/assets/venues/creative-studio.jpg';
import executiveBoardroom from '@/assets/venues/executive-boardroom.jpg';
import innovationHub from '@/assets/venues/innovation-hub.jpg';

// Import event images
import marketingSummit from '@/assets/events/marketing-summit.jpg';
import designWorkshop from '@/assets/events/design-workshop.jpg';
import boardMeeting from '@/assets/events/board-meeting.jpg';
import startupPitch from '@/assets/events/startup-pitch.jpg';

export const venueImages: Record<string, string> = {
  '1': conferenceCenter,
  '2': creativeStudio,
  '3': executiveBoardroom,
  '4': innovationHub,
};

export const eventImages: Record<string, string> = {
  '1': marketingSummit,
  '2': designWorkshop,
  '3': boardMeeting,
  '4': startupPitch,
};

export const mockVenues: Venue[] = [
  {
    id: '1',
    name: 'Grand Conference Center',
    location: 'Downtown Business District',
    capacity: 200,
    description: 'A prestigious venue perfect for large corporate events, conferences, and seminars. Features state-of-the-art AV equipment and elegant décor.',
    amenities: ['WiFi', 'Projector', 'Sound System', 'Catering', 'Parking', 'Air Conditioning'],
    pricePerHour: 150,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Creative Studio Space',
    location: 'Arts Quarter',
    capacity: 50,
    description: 'An inspiring creative workspace ideal for workshops, team building, and artistic events. Natural lighting and flexible layout options.',
    amenities: ['WiFi', 'Whiteboard', 'Kitchen', 'Natural Light', 'Flexible Seating'],
    pricePerHour: 80,
    createdAt: '2024-01-16T11:00:00Z',
    updatedAt: '2024-01-16T11:00:00Z',
  },
  {
    id: '3',
    name: 'Executive Boardroom',
    location: 'Financial Center',
    capacity: 20,
    description: 'An exclusive boardroom for high-level meetings and strategic discussions. Premium furnishings and complete privacy.',
    amenities: ['WiFi', 'Video Conferencing', 'Coffee Service', 'Secure Access', 'Leather Seating'],
    pricePerHour: 200,
    createdAt: '2024-01-17T09:00:00Z',
    updatedAt: '2024-01-17T09:00:00Z',
  },
  {
    id: '4',
    name: 'Innovation Hub',
    location: 'Tech District',
    capacity: 100,
    description: 'A modern tech-enabled space perfect for product launches, hackathons, and innovation workshops.',
    amenities: ['WiFi', 'Multiple Screens', 'Standing Desks', 'Phone Booths', 'Gaming Area', 'Snack Bar'],
    pricePerHour: 120,
    createdAt: '2024-01-18T14:00:00Z',
    updatedAt: '2024-01-18T14:00:00Z',
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Digital Marketing Summit 2024',
    description: 'Join industry leaders for a comprehensive digital marketing conference featuring the latest trends, strategies, and tools.',
    venueId: '1',
    startDate: '2024-03-15T09:00:00Z',
    endDate: '2024-03-15T17:00:00Z',
    capacity: 180,
    organizer: 'Marketing Professionals Network',
    isPublic: true,
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-01-20T10:00:00Z',
  },
  {
    id: '2',
    name: 'Creative Workshop: Design Thinking',
    description: 'An interactive workshop focused on design thinking methodologies and creative problem-solving techniques.',
    venueId: '2',
    startDate: '2024-03-20T13:00:00Z',
    endDate: '2024-03-20T16:00:00Z',
    capacity: 40,
    organizer: 'Design Innovation Lab',
    isPublic: true,
    createdAt: '2024-01-21T11:00:00Z',
    updatedAt: '2024-01-21T11:00:00Z',
  },
  {
    id: '3',
    name: 'Quarterly Board Meeting',
    description: 'Confidential quarterly review meeting for board members and key stakeholders.',
    venueId: '3',
    startDate: '2024-03-25T10:00:00Z',
    endDate: '2024-03-25T15:00:00Z',
    capacity: 15,
    organizer: 'Corporate Board',
    isPublic: false,
    createdAt: '2024-01-22T09:00:00Z',
    updatedAt: '2024-01-22T09:00:00Z',
  },
  {
    id: '4',
    name: 'Startup Pitch Competition',
    description: 'An exciting competition where emerging startups present their innovative ideas to a panel of investors.',
    venueId: '4',
    startDate: '2024-04-01T18:00:00Z',
    endDate: '2024-04-01T21:00:00Z',
    capacity: 90,
    organizer: 'Startup Accelerator Hub',
    isPublic: true,
    createdAt: '2024-01-23T16:00:00Z',
    updatedAt: '2024-01-23T16:00:00Z',
  },
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    eventId: '1',
    userId: '2',
    numberOfAttendees: 2,
    status: 'approved',
    notes: 'Looking forward to the marketing insights!',
    createdAt: '2024-01-25T10:00:00Z',
    updatedAt: '2024-01-26T14:00:00Z',
  },
  {
    id: '2',
    eventId: '2',
    userId: '2',
    numberOfAttendees: 1,
    status: 'pending',
    notes: 'Interested in design thinking methodologies',
    createdAt: '2024-01-27T09:00:00Z',
    updatedAt: '2024-01-27T09:00:00Z',
  },
  {
    id: '3',
    eventId: '4',
    userId: '3',
    numberOfAttendees: 3,
    status: 'approved',
    notes: 'Bringing my team to learn about startups',
    createdAt: '2024-01-28T15:00:00Z',
    updatedAt: '2024-01-29T10:00:00Z',
  },
];

// Helper function to get events with venue data
export const getEventsWithVenues = (): Event[] => {
  return mockEvents.map(event => ({
    ...event,
    venue: mockVenues.find(venue => venue.id === event.venueId)
  }));
};

// Helper function to get bookings with event and user data
export const getBookingsWithDetails = (): Booking[] => {
  const eventsWithVenues = getEventsWithVenues();
  return mockBookings.map(booking => ({
    ...booking,
    event: eventsWithVenues.find(event => event.id === booking.eventId)
  }));
};
