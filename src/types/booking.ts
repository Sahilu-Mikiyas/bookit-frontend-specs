import { Event } from './event';
import { User } from './auth';

export type BookingStatus = 'pending' | 'approved' | 'rejected';

export interface Booking {
  id: string;
  eventId: string;
  event?: Event;
  userId: string;
  user?: User;
  numberOfAttendees: number;
  status: BookingStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}