export interface Venue {
  id: string;
  name: string;
  location: string;
  capacity: number;
  description: string;
  amenities: string[];
  pricePerHour: number;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}