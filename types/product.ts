export interface IProduct {
  _id: string;
  location: string;
  name: string;
  description: string;
  rent: number;

  propertyType: string; // e.g., "Apartment", "House", "Condo"
  category: {
    _id: string;
    name: string; // e.g., "Residential", "Commercial"
  };
  imageUrls: string[];
  isActive: boolean;
  owner: {
    _id: string;
    name: string;
  };
  contactInfo: {
    name: string;
    phone: string;
    email: string;
  };
  amenities: string[]; // e.g., ["Parking", "Laundry", "Gym"]
  averageRating?: number;
  ratingCount?: number;
  availableFrom?: Date;
  leaseTerm?: string; // e.g., "1 Year", "Month-to-Month"
  slug: string;
  createdAt: string;
  updatedAt: string;
  offerPrice?: number; // Optional discounted price
  bedrooms: number;
  bathrooms: number;
  area: number; // in square feet/meters
  floor?: number;
  furnished?: boolean;
  rooms: number;
  phone_number: number;
}
