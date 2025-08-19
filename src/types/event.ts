import { Venue } from './venue';

export interface Event {
  id: string;
  name: string;
  description: string;
  venueId: string;
  venue?: Venue;
  startDate: string;
  endDate: string;
  capacity: number;
  organizer: string;
  imageUrl?: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}